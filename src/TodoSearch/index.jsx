import React from 'react';//Inportar react aunque muchas veces si lo interpreta
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch }
