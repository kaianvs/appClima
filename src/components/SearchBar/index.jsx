import { useState } from "react";
import "./styles.css";


const SearchBar = ({ setCity }) => {

  const [inputValue, setInputValue] = useState('')

   const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento da página.

    // 4. Chama a função 'setCity' do componente pai para atualizar a cidade,
    //    mas apenas se o valor do input não estiver vazio.
    if (inputValue.trim()) {
      setCity(inputValue.trim());
    }
  };

  return (
    <form className="form-search" onSubmit={handleSubmit}>
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
