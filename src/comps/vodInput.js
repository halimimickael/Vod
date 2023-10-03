import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./vodImputCss.css";

export default function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();
  const [searchText, setSearchText] = useState("");

  const onSearchClick = () => {
    nav(`/?s=${searchText}`);
  };

  const onKeyboardClick = (e) => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  const returnHome = () => {
    nav("");
    setSearchText(""); // Réinitialisation de l'état local
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };


  return (
    <header className="container-fluid text-center bg-dark p-md-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h2 onClick={returnHome} className="text-white text-center hand-cursor">
              Stream-Hall
            </h2>
          </div>
          <nav className="d-flex col-md-8 ">
            <div className="input-group">
              <input
              onKeyDown={onKeyboardClick}
              ref={inputRef}
              placeholder={searchText || "search..."} // Utilisation de l'état local pour le placeholder
              type="search"
              className="form-control mr-2"
              onChange={handleInputChange}  
              value={searchText}
            />
            <button onClick={onSearchClick} className="btn btn-danger">
              search
            </button>
            </div>
            
          </nav>
        </div>
      </div>
    </header>
  );
}
