import { useState } from "react";
import "./styles.css";


const SearchBar = ({ onSearch }) => {

  const [inputValue, setInputValue] = useState("")

  const handleSearch = (e)=>{
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if(trimmedValue !== ""){
      onSearch(trimmedValue)
      setInputValue("")
    }
  }

  return (
    <form className="form-search">
      <label className="search-bar">
        <input type="text" placeholder="Digite a cidade" onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit">
          <img src="./search.svg" alt="ícone de busca" />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
