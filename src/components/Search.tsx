import classesSearch from "./Search.module.css";

type SearchProps = {
  loadUserProps: (username: string) => Promise<void>; //0ª
};

import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

//1ª
const Search = ({ loadUserProps }: SearchProps) => {
  const [userName, setUserName] = useState("");

  //Tipo do próprio React para eventos (e)...
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUserProps(userName);
    }
  };

  return (
    <div className={classesSearch.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios.</p>
      <div className={classesSearch.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            loadUserProps(userName); //2ª
          }}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
