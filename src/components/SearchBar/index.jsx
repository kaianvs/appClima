import { useState } from "react";
import "./styles.css";


const SearchBar = ({ setCity }) => {

  const [inputValue, setInputValue] = useState('')

   const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (inputValue.trim()) {
          setCity(inputValue.trim());
    }
  };

  return (
    <form className="form-search"  onSubmit={handleSubmit}>
      <label className="search-bar">
        <input type="text" placeholder="Digite a cidade" onChange={handleInputChange} value={inputValue}/>
        <button type="submit">
          <img src="./search.svg" alt="ícone de busca" />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
