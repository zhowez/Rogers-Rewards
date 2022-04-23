import "./ToGoal.css";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PannelBar from "./PannelBar";

const ProgressBar = () => {
  //changed var to let
  // var should never be used as it is bad syntax in new version of javascript like we are using

  const id = window.localStorage.getItem("id");
  const sid = window.localStorage.getItem("sid");

  const [returnedCurrentPoints, setReturnedPoints] = useState("Ammount");

  useEffect(() => {
    const url = new URL("http://18.235.52.212:8000/points/");

    url.searchParams.append("UID", 1);
    url.searchParams.append("SID", 4);

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "points/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReturnedPoints(data);
      });
  }, []);

  let sick = 34;
  console.log(sick);
  console.log(returnedCurrentPoints);

  return (
    <div className="progress-bar">
      <div className="container">
        <div className="Left">
          <div className="total">
            <div className="box">
              <div className="tot">
                <h2>{"You have"}</h2>
                <h2>{`${returnedCurrentPoints}`}</h2>
                <h2>{sick}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="log">
            <div className="box">
              <div className="pannelBar">
                <PannelBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
