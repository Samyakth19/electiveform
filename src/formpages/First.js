import React from "react";
import "./first.css";
import { useNavigate } from "react-router-dom";
import Ise from "../pages/Ise.js";

const First = () => {
  let radValue;
  const radioBtnClick = (e) => {
    radValue = e.target.value;
  };

  const navigate = useNavigate();

  const nextFunc = (e) => {
    switch (radValue) {
      case "ec":
        navigate("/Ece");
        break;
      case "is":
        navigate("/Ise");
        break;
      case "cs":
        navigate("/Cse");
        break;
      case "ee":
        navigate("/Eee");
        break;
      case "mec":
        navigate("/Mech");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <>
      <form className="firstform textcenter">
        <label htmlFor="names">Name:</label>
        <br />
        <input id="names" placeholder="Enter the name" type="text" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input id="email" placeholder="Enter the Email" type="email" />
        <br />
        <label htmlFor="usn">Usn:</label>
        <br />
        <input id="usn" placeholder="Enter the Usn" type="text" />
        <br />
        <h4>Select the branch</h4>
        <input
          type="radio"
          id="cs"
          name="branch"
          onClick={radioBtnClick}
          value="cs"
        />
        <label className="ral" htmlFor="cs">
          Cse
        </label>
        <br />
        <input
          type="radio"
          id="is"
          name="branch"
          onClick={radioBtnClick}
          value="is"
        />
        <label className="ral" htmlFor="is">
          Ise
        </label>
        <br />
        <input
          type="radio"
          id="ec"
          name="branch"
          onClick={radioBtnClick}
          value="ec"
        />
        <label className="ral" htmlFor="ec">
          Ece
        </label>
        <br />
        <input
          type="radio"
          id="ee"
          name="branch"
          onClick={radioBtnClick}
          value="ee"
        />
        <label className="ral" htmlFor="ee">
          Ele
        </label>
        <br />
        <input
          type="radio"
          id="mec"
          name="branch"
          onClick={radioBtnClick}
          value="mec"
        />
        <label className="ral" htmlFor="mec">
          Mec
        </label>
        <br />
        <button
          onClick={nextFunc}
          type="button"
          className="btn nextbtn btn-outline-primary"
        >
          next
        </button>
      </form>
    </>
  );
};

export default First;
