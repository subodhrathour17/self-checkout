import React from "react";
import { FiLogOut } from "react-icons/fi";
import {Link} from "react-router-dom"

const Logout = () => {
  return (
    <>
      <div className="logout-main">
        <Link to="/">
          <button type="button" className="logout-button ">
            <FiLogOut /> Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default Logout;
