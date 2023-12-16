import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import Forecast from "./Forecast";
const SearchBarContainer = styled.div`
  padding-top: 20vh;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

function Form() {
  const [results, setResults] = useState([]);
  const [optionSelected, setOptionSelected] = useState(null);
 
  const handleSelectOption = (result) => {
    console.log(result);
    setOptionSelected(result);
  };

  return (
    <SearchBarContainer>
      <SearchBar setResults={setResults} />
      {/* <SearchResultsList results={results} /> */}
      <SearchResultsList results={results} onSelect={handleSelectOption} />
      <Forecast optionSelected={optionSelected} />
    
    </SearchBarContainer>
  );
}

export default Form;
