import React from "react";
import './Dropdown.css'
import { Link, NavLink } from "react-router-dom";

function DropDown() {
  return (
    <div>
      <div className="paste-button">
        <button className="button">Paste &nbsp; ▼</button>
        <div className="dropdown-content">
          <NavLink id="top">
            Keep source formatting
          </NavLink>
          <NavLink id="middle" >
            Merge formatting
          </NavLink>
          <NavLink to='text-only' id="bottom">
            Keep text only
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
