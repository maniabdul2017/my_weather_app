// import React from "react";
// import styled from "styled-components";

// const SlideshowContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   scroll-snap-type: x mandatory;
//   scroll-behavior: smooth;

//   & > div {
//     flex: 0 0 auto;
//     width: 100%;
//     scroll-snap-align: start;
//     padding: 10px;
//   }
// `;

// const Slide = styled.div`
//   // Style for each slide
// `;

// function Slideshow({ forecastData }) {
//   return (
//     <SlideshowContainer>
//       {forecastData.map((hourlyData, index) => (
//         <Slide key={index}>
//           <p>Date: {hourlyData.dt_txt}</p>
//           <p>Temperature: {hourlyData.main.temp}</p>
//           {/* Add more properties as needed */}
//         </Slide>
//       ))}
//     </SlideshowContainer>
//   );
// }

// export default Slideshow;

// import React, { useState } from "react";
// import styled from "styled-components";

// const SlideshowContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   scroll-snap-type: x mandatory;
//   scroll-behavior: smooth;

//   & > div {
//     flex: 0 0 auto;
//     width: 100%;
//     scroll-snap-align: start;
//     padding: 10px;
//   }
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   margin-top: 10px;
// `;

// const PaginationItem = styled.span`
//   cursor: pointer;
//   font-size: 14px;
//   color: ${({ isActive }) => (isActive ? "#3498db" : "black")};
//   text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
// `;

// const Slide = styled.div`
//   /* Style for each slide */
// `;

// function Slideshow({ forecastData }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const changeSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const renderPagination = () => {
//     return forecastData.map((hourlyData, index) => (
//       <PaginationItem
//         key={index}
//         onClick={() => changeSlide(index)}
//         isActive={index === currentSlide}
//       >
//         {formatTime(hourlyData.dt_txt)}
//       </PaginationItem>
//     ));
//   };

//   const formatTime = (time) => {
//     const date = new Date(time);
//     return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" });
//   };

//   return (
//     <div>
//       <SlideshowContainer>
//         {forecastData.map((hourlyData, index) => (
//           <Slide key={index}>
//             <p>Date: {hourlyData.dt_txt}</p>
//             <p>Temperature: {hourlyData.main.temp}</p>
//             {/* Add more properties as needed */}
//           </Slide>
//         ))}
//       </SlideshowContainer>
//       {forecastData.length > 1 && (
//         <PaginationContainer>
//           {renderPagination()}
//         </PaginationContainer>
//       )}
//     </div>
//   );
// }

// export default Slideshow;






// import React, { useState } from "react";
// import styled from "styled-components";

// // const SlideshowContainer = styled.div`
// //   display: flex;
// //   overflow-x: auto;
// //   scroll-snap-type: x mandatory;
// //   scroll-behavior: smooth;

// //   & > div {
// //     flex: 0 0 auto;
// //     width: 100%;
// //     scroll-snap-align: start;
// //     padding: 10px;
// //   }
// // `;


// const PaginationContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   margin-top: 10px;
// `;

// const PaginationItem = styled.span`
//   cursor: pointer;
//   color: ${({ isActive }) => (isActive ? "blue" : "black")};
// `;

// const Slide = styled.div`
//   // Style for each slide
// `;

// function Slideshow({ forecastData }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const changeSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const renderPagination = () => {
//     return forecastData.map((hourlyData, index) => (
//       <PaginationItem
//         key={index}
//         onClick={() => changeSlide(index)}
//         isActive={index === currentSlide}
//       >
//         {formatTime(hourlyData.dt_txt)}
//       </PaginationItem>
//     ));
//   };

//   const formatTime = (time) => {
//     const date = new Date(time);
//     return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" });
//   };

//   const renderCurrentSlideData = () => {
//     const currentHourlyData = forecastData[currentSlide];
//     return (
//       <Slide>
//         <p>Date: {currentHourlyData.dt_txt}</p>
//         <p>Temperature: {currentHourlyData.main.temp}</p>
//       </Slide>
//     );
//   };

//   return (
//     <div>
//       {forecastData.length > 1 && (
//         <PaginationContainer>
//           {renderPagination()}
//         </PaginationContainer>
//       )}
//       {renderCurrentSlideData()}
//     </div>
//   );
// }

// export default Slideshow;


// import React, { useState } from "react";
// import styled from "styled-components";

// // const SlideshowContainer = styled.div`
// //   display: flex;
// //   overflow-x: auto;
// //   scroll-snap-type: x mandatory;
// //   scroll-behavior: smooth;

// //   & > div {
// //     flex: 0 0 auto;
// //     width: 100%;
// //     scroll-snap-align: start;
// //     padding: 10px;
// //   }
// // `;


// const PaginationContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   margin-top: 10px;
// `;

// const PaginationItem = styled.span`
//   cursor: pointer;
//   color: ${({ isActive }) => (isActive ? "blue" : "black")};
// `;

// const Slide = styled.div`
//   // Style for each slide
// `;

// function Slideshow({ forecastData }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const changeSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const renderPagination = () => {
//     return forecastData.map((hourlyData, index) => (
//       <PaginationItem
//         key={index}
//         onClick={() => changeSlide(index)}
//         isActive={index === currentSlide}
//       >
//         {formatTime(hourlyData.dt_txt)}
//       </PaginationItem>
//     ));
//   };

//   const formatTime = (time) => {
//     const date = new Date(time);
//     return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" });
//   };

//   const renderCurrentSlideData = () => {
//     const currentHourlyData = forecastData[currentSlide];
//     return (
//       <Slide>
//         <p>Date: {currentHourlyData.dt_txt}</p>
//         <p>Temperature: {currentHourlyData.main.temp}</p>
//       </Slide>
//     );
//   };

//   return (
//     <div>
//       {forecastData.length > 1 && (
//         <PaginationContainer>
//           {renderPagination()}
//         </PaginationContainer>
//       )}
//       {renderCurrentSlideData()}
//     </div>
//   );
// }

// export default Slideshow;


// import React, { useState } from "react";
// import styled from "styled-components";

// const SlideshowContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Card = styled.div`
//   flex: 0 0 auto;
//   width: 100%;
//   border: 1px solid #ddd; 
//   margin-top: 10px;
  

//   // Add any other styling as needed
// `;

// function Slideshow({ forecastData }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const changeSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <SlideshowContainer>
//       {forecastData.map((hourlyData, index) => (
//         <Card key={index} onClick={() => changeSlide(index)}>
//           <p>Date: {hourlyData.dt_txt}</p>
//           <p>Temperature: {hourlyData.main.temp}</p>
//           {/* Add more details as needed */}
//         </Card>
//       ))}
//     </SlideshowContainer>
//   );
// }

// export default Slideshow;

// import React, { useState } from "react";
// import styled from "styled-components";

// const SlideshowContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Card = styled.div`
//   display: flex;
//   width: 100%;
//   border: 1px solid #ddd; 
//   margin-top: 10px;
//   cursor: pointer;
// `;

// const LeftSection = styled.div`
//   flex: 1;
//   padding: 10px;
// `;

// const RightSection = styled.div`
//   flex: 1;
//   padding: 10px;
// `;

// function Slideshow({ forecastData }) {
//   const [currentSlide, setCurrentSlide] = useState(null);

//   const changeSlide = (index) => {
//     setCurrentSlide(currentSlide === index ? null : index);
//   };

//   const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

//   return (
//     <SlideshowContainer>
//       {forecastData.map((hourlyData, index) => (
//         <Card key={index} onClick={() => changeSlide(index)}>
//           <LeftSection>
//             <p>Weather Icon: {hourlyData.weather[0].icon}</p>
//             <p>Hour: {new Date(hourlyData.dt_txt).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })}</p>
//           </LeftSection>
//           <RightSection>
//             {currentSlide === index ? (
//               <div>
//                 <p>Main Temperature: {kelvinToCelsius(hourlyData.main.temp)}°C</p>
//                 <p>Temperature Min: {kelvinToCelsius(hourlyData.main.temp_min)}°C</p>
//                 <p>Temperature Max: {kelvinToCelsius(hourlyData.main.temp_max)}°C</p>
//                 {/* Add more details as needed */}
//               </div>
//             ) : (
//               <div>
//                 <p> {kelvinToCelsius(hourlyData.main.temp_min)}/{kelvinToCelsius(hourlyData.main.temp_max)}°C</p>
//               </div>
//             )}
//           </RightSection>
//         </Card>
//       ))}
//     </SlideshowContainer>
//   );
// }

// export default Slideshow;


import React, { useState } from "react";
import styled from "styled-components";

const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #ddd;
  margin-top: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  border-radius: 10px; /* Rounded border */

  &:hover {
    box-shadow: 0px 0px 8px #ddd;
  }
`;


const LeftSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    max-width: 50px;
    height: auto;
    border-radius: 50%;
    margin-right: 10px; 
  }
`;


const RightSection = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  float: right;
  justify-content: space-between;
`;


const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;

function Slideshow({ forecastData }) {
  const [currentSlide, setCurrentSlide] = useState(null);

  const changeSlide = (index) => {
    setCurrentSlide(currentSlide === index ? null : index);
  };

  const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

  return (
    <SlideshowContainer>
      {forecastData.map((hourlyData, index) => (
        <Card key={index} onClick={() => changeSlide(index)}>
          <LeftSection>
            <WeatherIcon
              alt={`weather-icon-${hourlyData.weather[0].description}`}
              src={`http://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`}
            />
            <p>
            <p>Hour: {new Date(hourlyData.dt_txt).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })}</p>
{
  new Date(`${hourlyData.dt_txt} UTC`)
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      timeZone: "Europe/Athens",
    })
}

</p> 
          </LeftSection>
          <RightSection>
            {currentSlide === index ? (
              <div>
                <p>Main Temperature: {kelvinToCelsius(hourlyData.main.temp)}°C</p>
                <p>Temperature Min: {kelvinToCelsius(hourlyData.main.temp_min)}°C</p>
                <p>Temperature Max: {kelvinToCelsius(hourlyData.main.temp_max)}°C</p>
              
              </div>
            ) : (
              <div>
                <p>
                  {kelvinToCelsius(hourlyData.main.temp_min)}/{kelvinToCelsius(hourlyData.main.temp_max)}°C
                </p>
              </div>
            )}
          </RightSection>
        </Card>
      ))}
    </SlideshowContainer>
  );
}

export default Slideshow;

// import React, { useState } from "react";
// import styled from "styled-components";

// const SlideshowContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Card = styled.div`
//   display: flex;
//   width: 100%;
//   border: 1px solid #ddd;
//   margin-top: 10px;
//   cursor: pointer;
//   transition: box-shadow 0.3s ease;
//   background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
//   border-radius: 10px; /* Rounded border */

//   &:hover {
//     box-shadow: 0px 0px 8px #ddd;
//   }
// `;

// const LeftSection = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;

//   img {
//     max-width: 50px;
//     height: auto;
//     border-radius: 50%;
//     margin-right: 10px;
//   }
// `;

// const RightSection = styled.div`
//   flex: 1;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   float: right;
//   justify-content: space-between;
// `;

// const WeatherIcon = styled.img`
//   width: 50px;
//   height: 50px;
// `;

// const AdditionalDetails = styled.div`
//   background-color: #f0f0f0;
//   padding: 10px;
//   border-radius: 5px;
//   margin-top: 10px;
// `;

// function Slideshow({ forecastData }) {
//   const [selectedSlide, setSelectedSlide] = useState(null);

//   const selectSlide = (index) => {
//     setSelectedSlide(selectedSlide === index ? null : index);
//   };

//   const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

//   return (
//     <SlideshowContainer>
//       {forecastData.map((hourlyData, index) => (
//         <Card key={index} onClick={() => selectSlide(index)}>
//           <LeftSection>
//             <WeatherIcon
//               alt={`weather-icon-${hourlyData.weather[0].description}`}
//               src={`http://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`}
//             />
//             <p>
//               {new Date(`${hourlyData.dt_txt} UTC`)
//                 .toLocaleString("en-US", {
//                   hour: "numeric",
//                   minute: "numeric",
//                   // timeZone: "Europe/Athens",
//                 })}
//             </p>
//           </LeftSection>
//           <RightSection>
//           <div>
//                 <p>
//                    {kelvinToCelsius(hourlyData.main.temp_min)}/{kelvinToCelsius(hourlyData.main.temp_max)}°C
//                  </p>
// </div>
//             {selectedSlide === index && (
//               <AdditionalDetails>
//               <p>Main Temperature: {kelvinToCelsius(hourlyData.main.temp)}°C</p>
//               <p>Temperature Min: {kelvinToCelsius(hourlyData.main.temp_min)}°C</p>
//               <p>Temperature Max: {kelvinToCelsius(hourlyData.main.temp_max)}°C</p>
//                 <p>Additional Details</p>
//               </AdditionalDetails>
//             )}
//           </RightSection>
//         </Card>
//       ))}
//     </SlideshowContainer>
//   );
// }

// export default Slideshow;
