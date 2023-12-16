import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const InputWrapper = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  height: 2.5rem;
  padding: 0 15px;
  box-shadow: 0px 0px 8px #ddd;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 1.25rem;
    width: 100%;
    margin-left: 5px;
  }
  input:focus {
    outline: none;
  }
`;
const SearchIcon = styled(FaSearch)`
  color: royalblue;
`;

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}}&limit=5&lang=en&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((location) => {
          return value && location && location.name && location.country;
        });
        setResults(results);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <InputWrapper>
      <SearchIcon />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputWrapper>
  );
}

export default SearchBar;
