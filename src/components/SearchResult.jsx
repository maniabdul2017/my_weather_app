// import React from "react";
// import { styled } from "styled-components";

// const SearchResults = styled.div`
//   padding: 10px 20px;
//   &:hover {
//     background-color: #efefef;
//   }
// `;

// function SearchResult({ result }) {
//   return (
//     <SearchResults>
//       {result.name} , {result.country}
//     </SearchResults>
//   );
// }

// export default SearchResult;

// import React from "react";
// import styled, { css } from "styled-components";

// const SearchResults = styled.div`
//   padding: 10px 20px;
//   background-color: ${({ isActive }) => (isActive ? "#efefef" : "white")};
//   transition: background-color 0.3s ease;

//   ${({ isActive }) =>
//     !isActive &&
//     css`
//       &:hover {
//         background-color: #efefef;
//       }
//     `}
// `;

// function SearchResult({ result, isActive }) {
//   return (
//     <SearchResults isActive={isActive}>
//       {result.name}, {result.country}
//     </SearchResults>
//   );
// }

// export default SearchResult;

// import React, { useState, useEffect } from "react";
// import styled, { css } from "styled-components";

// const SearchResults = styled.div`
//   padding: 10px 20px;
//   background-color: ${({ isActive }) => (isActive ? "#efefef" : "white")};
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #efefef;
//   }

//   ${({ isActive }) =>
//     isActive &&
//     css`
//       &:focus {
//         outline: none;
//         box-shadow: 0 0 0 2px #2980b9;
//       }
//     `}
// `;

// function SearchResult({ result, isActive, onClick, onMouseEnter }) {
//   return (
//     <SearchResults
//       tabIndex={0}
//       isActive={isActive}
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       onKeyDown={(event) => {
//         if (event.key === "Enter") {
//           onClick();
//         }
//       }}
//     >
//       {result.name}, {result.country}
//     </SearchResults>
//   );
// }

// export default SearchResult;




// everything working correcty except the key up and down
// import React from "react";
// import styled, { css } from "styled-components";

// const SearchResults = styled.div`
//   padding: 10px 20px;
//   background-color: ${({ isactive }) => (isactive ? "#efefef" : "white")};
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #efefef;
//   }

//   ${({ isactive }) =>
//     isactive &&
//     css`
//       &:focus {
//         outline: none;
//         box-shadow: 0 0 0 2px #2980b9;
//       }
//     `}
// `;

// function SearchResult({ result, isactive, onClick, onMouseEnter }) {
//   return (
//     <SearchResults
//       tabIndex={0}
//       isactive={isactive}
//       aria-selected={isactive ? "true" : "false"}
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       onKeyDown={(event) => {
//         if (event.key === "Enter") {
//           onClick();
//         }
//       }}
//     >
//       {result.name}, {result.country}
//     </SearchResults>
//   );
// }

// export default SearchResult;



// import React from "react";
// import styled, { css } from "styled-components";

// const SearchResults = styled.div`
//   padding: 10px 20px;
//   background-color: ${({ isactive }) => (isactive ? "#efefef" : "white")};
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #efefef;
//   }

//   ${({ isactive }) =>
//     isactive &&
//     css`
//       &:focus {
//         outline: none;
//         box-shadow: 0 0 0 2px #2980b9;
//       }
//     `}
// `;

// function SearchResult({ result, isactive, onClick, onMouseEnter, onKeyDown }) {
//   return (
//     <SearchResults
//       tabIndex={0}
//       isactive={isactive}
//       aria-selected={isactive ? "true" : "false"}
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       onKeyDown={onKeyDown}
//     >
//       {result.name}, {result.country}
//     </SearchResults>
//   );
// }

// export default SearchResult;






import React from "react";
import styled, { css } from "styled-components";

const SearchResults = styled.div`
  padding: 10px 20px;
  background-color: ${({ isactive }) => (isactive ? "#efefef" : "white")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #efefef;
  }

  ${({ isactive }) =>
    isactive &&
    css`
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #2980b9;
      }
    `}
`;

function SearchResult({ result, isactive, onClick, onMouseEnter, onKeyDown }) {
  return (
    <SearchResults
      tabIndex={0}
      {...(isactive ? { isactive: "true" } : {})}
      aria-selected={isactive ? "true" : "false"}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onKeyDown={onKeyDown}
    >
      {result.name}, {result.country}
    </SearchResults>
  );
}


export default SearchResult;
