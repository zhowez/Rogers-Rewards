import React from "react";
import NewNav from "../UI/HomeNav";
import Footer from "../Footer/Footer";

import "./Wishlist.css";
function Wishlist(props) {
  return (
    <div>
      <NewNav />
    <div className="Profile">
      <div className="Main_Component">
        <div className="Cards">
          <div>
            <label className="Login-Header">
              Wishlist
            </label>
            <hr className="line" />
          </div>
          <div>
            <label className="Name">Name:</label>
            <hr className="line_bold" />
          </div>
          <div>
            <label className="Email">{"Email:"}</label>
            <hr className="line_bold" />
          </div>
          <div>
            <label className="Address">Address:</label>
            <hr className="line_bold" />
          </div>
          <div>
            <label className="Phone">Phone Number:</label>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Wishlist;