import React from "react";
import { NavLink } from "react-router-dom";

function Submission() {
  return (
    <div className="justify-center">
      <div className="w-fit mx-auto text-2xl text-center font-bold text-slate-200">
        Congratulations!!! <br></br>
        <span className="text-sm">
          Your Application has been submitted. Please wait for the results.
        </span>
      </div>
      <div className="w-2/6 mx-auto">
        <img src="celebrate.png" alt="celebrate" className="bg-blend-"></img>
      </div>
      <div className="absolute bottom-20 right-40">
        <NavLink
          to="/results"
          className="bg-blue-600 hover:bg-blue-500 text-slate-100 font-bold py-2 px-6 rounded inline-flex items-center"
        >
          <span>View Results</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Submission;
