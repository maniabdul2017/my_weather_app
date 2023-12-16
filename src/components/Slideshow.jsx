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


import React, { useState } from "react";
import styled from "styled-components";

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


const PaginationContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const PaginationItem = styled.span`
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "blue" : "black")};
`;

const Slide = styled.div`
  // Style for each slide
`;

function Slideshow({ forecastData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderPagination = () => {
    return forecastData.map((hourlyData, index) => (
      <PaginationItem
        key={index}
        onClick={() => changeSlide(index)}
        isActive={index === currentSlide}
      >
        {formatTime(hourlyData.dt_txt)}
      </PaginationItem>
    ));
  };

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" });
  };

  const renderCurrentSlideData = () => {
    const currentHourlyData = forecastData[currentSlide];
    return (
      <Slide>
        <p>Date: {currentHourlyData.dt_txt}</p>
        <p>Temperature: {currentHourlyData.main.temp}</p>
      </Slide>
    );
  };

  return (
    <div>
      {forecastData.length > 1 && (
        <PaginationContainer>
          {renderPagination()}
        </PaginationContainer>
      )}
      {renderCurrentSlideData()}
    </div>
  );
}

export default Slideshow;