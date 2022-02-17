import { Link } from "react-router-dom";
import "./App.css";
import NewDriver from "./DriverForm/NewDriver";

function Application() {
  const addDriverHandler = (driver) => {
    console.log("in applicartion");
    console.log(driver);
    //this is where we would Post to the Server
  };

  return (
    <div className="Container">
      <div className="Card">
        <h1 className="Title">Application</h1>
        <div className="Link-box">
          <Link to="/" className="App-link">
            {" "}
            Home{" "}
          </Link>
        </div>
        <div className="Card">
          <NewDriver onAddDriver={addDriverHandler} />
        </div>
      </div>
    </div>
  );
}

export default Application;
