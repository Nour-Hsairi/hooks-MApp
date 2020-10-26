import React from "react";
import "./Header.css";
import Rate from '../Rate'
import AddMovie from '../AddMovie/AddMovie'

const Header = ({ AddNewMovie,setNameSearch, rateSearch, setRateSearch }) => {
  return (
    <div>
      <div className="btnAdd">
        <AddMovie AddNewMovie={AddNewMovie} />
        </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <Rate rating={rateSearch} setRateSearch={setRateSearch}/>
      </div>
    </div>
  );
};

export default Header;
