import React from "react";
import { Link, Route } from "react-router-dom";
import SponsorNav from "../UI/SponsorNav";
import Footer from "../Footer/Footer";

import "./Driver_Management.css";
function Driver_Management(props) {
  return (
    <div>
      <SponsorNav />
      <div className="Dashboard_Profile">
        <label className="dashboard_header">Driver Management</label>
        <hr className="line_50" />
        <br></br>
        <Link to="/pages/Apply_To_Sponsor" className="Link">
          <button type="submit">
            <label className="sponsor_button"> Manage Applicants</label>
          </button>
        </Link>
        <hr className="line_30" />
        <label className="current_sponsors">Current Drivers</label>
        <hr className="line_30" />
        <div className="bottom_here">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Driver_Management;
