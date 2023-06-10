import React from "react";
import "./home.css";
import First from "../formpages/First";
const Home = () => {
  return (
    <>
      <div className="container-fluid homecontainer">
        <div className="row homerow justify-content-center align-items-center">
          <div className="col-md-5 colhome">
            <First />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
