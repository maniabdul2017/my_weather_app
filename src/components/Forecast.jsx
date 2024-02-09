// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const ForecastContainer = styled.div`
//   margin-top: 1rem;
//   padding: 1rem;
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 8px #ddd;
//   width: 100%;
//   text-align: center;
// `;

// function Forecast({ optionSelected }) {
//   const [forecastData, setForecastData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/forecast?lat=${optionSelected.lat}&lon=${optionSelected.lon}&appid=${
//                 process.env.REACT_APP_API_KEY
//               }`
//           );
//         const data = await response.json();
//         setForecastData(data);
//       } catch (error) {
//         console.error("Error fetching forecast data:", error);
//       }
//     };

//     if (optionSelected) {
//       fetchData();
//     }
//   }, [optionSelected]);

//   return (
//     <ForecastContainer>
//       {forecastData ? (
//         <div>
//           <h2>Forecast for {optionSelected.name}, {optionSelected.country}</h2>
//           {/* Render forecast data as needed */}
//           {/* Example: {forecastData.main.temp} */}
//         </div>
//       ) : (
//         <p>Select a location to view the forecast.</p>
//       )}
//     </ForecastContainer>
//   );
// }

// export default Forecast;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import ToggleForecastButton from "./ToggleForecastButton";

// const ForecastContainer = styled.div`
//   margin-top: 1rem;
//   padding: 1rem;
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 8px #ddd;
//   width: 100%;
//   text-align: center;
// `;

// function Forecast({ optionSelected }) {
//   const [forecastData, setForecastData] = useState(null);
//   const [showFiveDayForecast, setShowFiveDayForecast] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?lat=${optionSelected.lat}&lon=${optionSelected.lon}&appid=${process.env.REACT_APP_API_KEY}`
//         );
//         const data = await response.json();
//         setForecastData(data);
//       } catch (error) {
//         console.error("Error fetching forecast data:", error);
//       }
//     };

//     if (optionSelected) {
//       fetchData();
//     }
//   }, [optionSelected]);

//   const toggleFiveDayForecast = (value) => {
//     setShowFiveDayForecast(value);
//   };

//   return (
//     <ForecastContainer>
//       <ToggleForecastButton
//         onToggle={toggleFiveDayForecast}
//         showFiveDayForecast={showFiveDayForecast}
//       />
//       {forecastData && showFiveDayForecast && (
//         <div>
//           <h2>Forecast for {optionSelected.name}, {optionSelected.country}</h2>
//           {/* Render forecast data as needed */}
//           {/* Example: {forecastData.main.temp} */}
//         </div>
//       )}
//     </ForecastContainer>
//   );
// }

// export default Forecast;
// 
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import ToggleForecastButton from "./ToggleForecastButton";
// import Slideshow from "./Slideshow";

// // ... (imports)

// // const ForecastContainer = styled.div`
// //   margin-top: 1rem;
// //   padding: 1rem;
// //   background-color: #f0f0f0;
// //   border-radius: 10px;
// //   box-shadow: 0px 0px 8px #ddd;
// //   width: 100%;
// //   text-align: center;
// // `;

// const ForecastContainer = styled.div`
//   margin-top: 1rem;
//   padding: 1rem;
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 8px #ddd;
//   width: 100%;
//   text-align: center;

//   @media (max-width: 600px) {
//     padding: 0.5rem;
//   }
// `;

// function Forecast({ optionSelected }) {
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [forecastData, setForecastData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?lat=${optionSelected.lat}&lon=${optionSelected.lon}&appid=${process.env.REACT_APP_API_KEY}`
//         );
//         const data = await response.json();
//         setForecastData(data);
//       } catch (error) {
//         console.error("Error fetching forecast data:", error);
//       }
//     };

//     if (optionSelected) {
//       fetchData();
//     }
//   }, [optionSelected]);

//   const extractDaysFromForecast = () => {
//     if (!forecastData || !forecastData.list) {
//       return [];
//     }

//     // Assuming forecastData.list contains the forecast details
//     const timestamps = forecastData.list.map((item) => item.dt * 1000);
//     const uniqueDays = Array.from(new Set(timestamps.map((timestamp) => formatDay(timestamp))));

//     return uniqueDays;
//   };

//   // const formatDay = (timestamp) => {
//   //   const date = new Date(timestamp);
//   //   const options = { day: "numeric", month: "long" };
//   //   return date.toLocaleDateString("en-US", options);
//   // };
//   const formatDay = (timestamp) => {
//     const date = new Date(timestamp);
    
//     // Adjust the date to the local time zone
//     const localDate = new Date(date.toLocaleString("en-US", { timeZone: "Europe/Athens" }));
  
//     const options = { weekday: "short", day: "numeric", month: "short" };
//     return localDate.toLocaleDateString("en-US", options);
//   };
  
  

  

//   const forecastDays = extractDaysFromForecast();

// //   const toggleDay = (day) => {
// //     setSelectedDays((prevDays) =>
// //       prevDays.includes(day)
// //         ? prevDays.filter((selectedDay) => selectedDay !== day)
// //         : [...prevDays, day]
// //     );
// //   };
// const toggleDay = (day) => {
//     setSelectedDays((prevDays) =>
//       prevDays.includes(day) ? [] : [day]
//     );
//   };
//   const selectedDayData = selectedDays.length > 0 ? forecastData?.list?.filter((item) => {
//     const timestamp = item.dt * 1000;
//     return formatDay(timestamp) === selectedDays[0];
//   }) : [];
  
//   return (
//     <ForecastContainer>
//       {/* <ToggleForecastButton days={forecastDays} onDayToggle={toggleDay} formatDay={formatDay} /> */}
//       <ToggleForecastButton days={forecastDays.map(formatDay)} onDayToggle={toggleDay} formatDay={formatDay} />

//       {selectedDays.length > 0 && (
//       <Slideshow forecastData={selectedDayData} />
//     )}
//     </ForecastContainer>
//   );
// }

// export default Forecast;





import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleForecastButton from "./ToggleForecastButton";
import Slideshow from "./Slideshow";

const ForecastContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #ddd;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

function Forecast({ optionSelected }) {
  const [selectedDays, setSelectedDays] = useState([]);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${optionSelected.lat}&lon=${optionSelected.lon}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    if (optionSelected) {
      fetchData();
    }
  }, [optionSelected]);

  const extractDaysFromForecast = () => {
    if (!forecastData || !forecastData.list) {
      return [];
    }

    const timestamps = forecastData.list.map((item) => item.dt * 1000);
    const uniqueDays = Array.from(new Set(timestamps.map((timestamp) => formatDay(timestamp))));

    return uniqueDays;
  };
 
  
  const formatDay = (timestamp) => {
    const date = new Date(timestamp);
    // const options = { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" };
    const options = { weekday: "short", day: "numeric", month: "short",   };
    return date.toLocaleDateString("en-US", options);
  };
  
  const forecastDays = extractDaysFromForecast();

  const toggleDay = (day) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day) ? [] : [day]
    );
  };
  
  const selectedDayData = selectedDays.length > 0 ? forecastData?.list?.filter((item) => {
    const timestamp = item.dt * 1000;
    return formatDay(timestamp) === selectedDays[0];
  }) : [];

  return (
    <ForecastContainer>
      <ToggleForecastButton
        days={forecastDays}
        onDayToggle={toggleDay}
        formatDay={formatDay}
        activeDay={selectedDays[0]}
      />
      {selectedDays.length > 0 && (
        <Slideshow forecastData={selectedDayData} />
      )}
    </ForecastContainer>
  );
}

export default Forecast;




