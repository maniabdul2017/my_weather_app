// import React from "react";
// import { styled } from "styled-components";
// import SearchResult from "./SearchResult";

// const ResultList = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 8px #ddd;
//   border-radius: 10px;
//   margin-top: 1rem;
//   max-height: 300px;
//   overflow-y: scroll;
// `;

// const ResultList = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 8px #ddd;
//   border-radius: 10px;
//   margin-top: 1rem;
//   max-height: 300px;
//   overflow-y: scroll;

//   /* Custom scrollbar styles */
//   scrollbar-width: thin;
//   scrollbar-color: #888 #f1f1f1;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//     border-radius: 4px;
//   }
// `;

// const ResultList = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 8px #ddd;
//   border-radius: 10px;
//   margin-top: 1rem;
//   max-height: ${({ results }) =>
//     results && results.length > 3 ? "300px" : "auto"};
//   overflow-y: ${({ results }) =>
//     results && results.length > 3 ? "scroll" : "hidden"};

//   /* Custom scrollbar styles */
//   scrollbar-width: thin;
//   scrollbar-color: #888 #f1f1f1;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//     border-radius: 4px;
//   }
// `;
// function SearchResultsList({ results }) {
//   return (
//     <ResultList>
//       {results.map((result, id) => {
//         return <SearchResult result={result} key={id} />;
//       })}
//     </ResultList>
//   );
// }

// export default SearchResultsList;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import SearchResult from "./SearchResult";

// const ResultList = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 8px #ddd;
//   border-radius: 10px;
//   margin-top: 1rem;
//   max-height: ${({ results }) =>
//     results && results.length > 3 ? "300px" : "auto"};
//   overflow-y: ${({ results }) =>
//     results && results.length > 3 ? "scroll" : "hidden"};

//   /* Custom scrollbar styles */
//   scrollbar-width: thin;
//   scrollbar-color: #888 #f1f1f1;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//     border-radius: 4px;
//   }
// `;

// function SearchResultsList({ results }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowDown") {
//         event.preventDefault();
//         setActiveIndex((prevIndex) =>
//           prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
//         );
//       } else if (event.key === "ArrowUp") {
//         event.preventDefault();
//         setActiveIndex((prevIndex) =>
//           prevIndex > 0 ? prevIndex - 1 : prevIndex
//         );
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [results]);

//   return (
//     <ResultList results={results}>
//       {results.map((result, index) => (
//         <SearchResult
//           key={index}
//           result={result}
//           isActive={index === activeIndex}
//         />
//       ))}
//     </ResultList>
//   );
// }

// export default SearchResultsList;



// before informing parent component
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import SearchResult from "./SearchResult";

// const ResultList = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 8px #ddd;
//   border-radius: 10px;
//   margin-top: 1rem;
//   max-height: ${({ results }) =>
//     results && results.length > 3 ? "300px" : "auto"};
//   overflow-y: ${({ results }) =>
//     results && results.length > 3 ? "scroll" : "hidden"};


//   scrollbar-width: thin;
//   scrollbar-color: #888 #f1f1f1;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//     border-radius: 4px;
//   }
// `;

// function SearchResultsList({ results }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleKeyDown = (event) => {
//     if (event.key === "ArrowDown") {
//       event.preventDefault();
//       setActiveIndex((prevIndex) =>
//         prevIndex === null ? 0 : Math.min(prevIndex + 1, results.length - 1)
//       );
//     } else if (event.key === "ArrowUp") {
//       event.preventDefault();
//       setActiveIndex((prevIndex) => {
//         if (prevIndex === null) {
//           return results.length - 1;
//         } else {
//           return Math.max(prevIndex - 1, 0);
//         }
//       });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [results]);

//   const handleClick = (index) => {
//     setActiveIndex(index);
//     console.log(index);
//   };

//   // const handleClick = (index,result) => {
//   //   setActiveIndex(index);
//   //   console.log(result);
//   // };
//   return (
//     <ResultList results={results}>
//       {results.map((result, index) => (
//         <SearchResult
//           key={index}
//           result={result}
//           isActive={index === activeIndex}
//           // onClick={() => handleClick(index,result)}
//           onClick={() => handleClick(index)}
//           onMouseEnter={() => setActiveIndex(index)}
//         />
//       ))}
//     </ResultList>
//   );
// }

// export default SearchResultsList;




// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import SearchResult from "./SearchResult";

// const ResultList = styled.div`
//   width: 100%;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0px 0px 8px #ddd;
//   border-radius: 10px;
//   margin-top: 1rem;
//   max-height: ${({ results }) =>
//     results && results.length > 3 ? "300px" : "auto"};
//   overflow-y: ${({ results }) =>
//     results && results.length > 3 ? "scroll" : "hidden"};


//   scrollbar-width: thin;
//   scrollbar-color: #888 #f1f1f1;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #888;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-thumb:hover {
//     background-color: #555;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
//     border-radius: 4px;
//   }
// `;

// function SearchResultsList({ results, onSelect }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleKeyDown = (event) => {
//     if (event.key === "ArrowDown") {
//       event.preventDefault();
//       setActiveIndex((prevIndex) =>
//         prevIndex === null ? 0 : Math.min(prevIndex + 1, results.length - 1)
//       );
//     } else if (event.key === "ArrowUp") {
//       event.preventDefault();
//       setActiveIndex((prevIndex) => {
//         if (prevIndex === null) {
//           return results.length - 1;
//         } else {
//           return Math.max(prevIndex - 1, 0);
//         }
//       });
//     }
//   };
  
  
//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [results]);

//   const handleClick = (index) => {
//     setActiveIndex(index);
//     onSelect(results[index]);
//   };
//   return (
//     <ResultList results={results}>
//       {results.map((result, index) => (
//         <SearchResult
//           key={index}
//           result={result}
//           isActive={index === activeIndex}
//           // onClick={() => handleClick(index,result)}
//           onClick={() => handleClick(index)}
//           onMouseEnter={() => setActiveIndex(index)}
//         />
//       ))}
//     </ResultList>
//   );
// }

// export default SearchResultsList;


import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult";

const ResultList = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px #ddd;
  border-radius: 10px;
  margin-top: 1rem;
  max-height: ${({ results }) =>
    results && results.length > 3 ? "300px" : "auto"};
  overflow-y: ${({ results }) =>
    results && results.length > 3 ? "scroll" : "hidden"};

  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
`;

function SearchResultsList({ results, onSelect }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(prevIndex + 1, results.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prevIndex) => {
        if (prevIndex === null) {
          return results.length - 1;
        } else {
          return Math.max(prevIndex - 1, 0);
        }
      });
    } else if (event.key === "Enter" && activeIndex !== null) {
      event.preventDefault();
      onSelect(results[activeIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [results, activeIndex, onSelect]);

  const handleClick = (index) => {
    setActiveIndex(index);
    onSelect(results[index]);
  };

  return (
    <ResultList results={results}>
      {results.map((result, index) => (
        <SearchResult
          key={index}
          result={result}
          isactive={index === activeIndex}
          onClick={() => handleClick(index)}
          onMouseEnter={() => setActiveIndex(index)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClick(index);
            }
          }}
        />
      ))}
    </ResultList>
  );
}

export default SearchResultsList;

