// import React from "react";

// function ToggleForecastButton({ days, onDayToggle, formatDay }) {
//   return (
//     <div>
//       {days.map((day, index) => (
//         <button key={index} onClick={() => onDayToggle(day)}>
//           {formatDay(day)}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default ToggleForecastButton;

// import React from "react";
// import styled from "styled-components";

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   margin-top: 10px;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const DayButton = styled.button`
//   padding: 8px 12px;
//   background-color: #3498db;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }

//   @media (max-width: 600px) {
//     margin-top: 8px;
//   }
// `;

// function ToggleForecastButton({ days, onDayToggle, formatDay }) {
//   return (
//     <ButtonContainer>
//       {days.map((day, index) => (
//         <DayButton key={index} onClick={() => onDayToggle(day)}>
//           {formatDay(day)}
//         </DayButton>
//       ))}
//     </ButtonContainer>
//   );
// }

// export default ToggleForecastButton;

import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DayButton = styled.button`
  padding: 8px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

function ToggleForecastButton({ days, onDayToggle, formatDay }) {
  return (
    <ButtonContainer>
      {days.map((day, index) => (
        <DayButton key={index} onClick={() => onDayToggle(day)}>
          {formatDay(day)}
        </DayButton>
      ))}
    </ButtonContainer>
  );
}

export default ToggleForecastButton;
