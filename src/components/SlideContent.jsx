import React from "react";
import styled from "styled-components";

const SlideContentContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 8px #ddd;
`;

function SlideContent({ hourlyData }) {
  return (
    <SlideContentContainer>
      <p>Date: {hourlyData.dt_txt}</p>
      <p>Temperature: {hourlyData.main.temp}</p>
      {/* Add more properties as needed */}
    </SlideContentContainer>
  );
}

export default SlideContent;
