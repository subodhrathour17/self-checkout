import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="col-12 col-md-2 bg-dark text-center left-nav">
        <div className="nav-header">
          <div className="mz-step-indicator">
            <span>1</span>
          </div>
          <div>Article List</div>
        </div>
        <div className="nav-header">
          <div className="mz-step-indicator">
            <span>2</span>
          </div>
          <div>Pay</div>
        </div>
        <div className="nav-header">
          <div className="mz-step-indicator">
            <span>3</span>
          </div>
          <div>Remove The Security Tags</div>
        </div>
        <div className="nav-header">
          <div className="mz-step-indicator">
            <span>4</span>
          </div>
          <div>Reciept</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
