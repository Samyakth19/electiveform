import React from "react";
import "./second.css";
const Second = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row secondrow justify-content-center align-items-center">
          <div className="col-md-5 secondcol ">
            <form className="coursewiseform">
              <h4>Select the course</h4>
              <input type="radio" id="cs" name="branch" />
              <label className="ral" htmlFor="cs">
                lorem posum
              </label>
              <br />
              <input type="radio" id="is" name="branch" />
              <label className="ral" htmlFor="is">
                lorem
              </label>
              <br />
              <input type="radio" id="ec" name="branch" />
              <label className="ral" htmlFor="ec">
                lorem ipsum
              </label>
              <br />
              <input type="radio" id="ee" name="branch" />
              <label className="ral" htmlFor="ee">
                lorem
              </label>
              <br />
              <input type="radio" id="ai" name="branch" />
              <label className="ral" htmlFor="ai">
                lorem ipsum
              </label>
              <br />
              <button
                type="button"
                className="btn nexxtbtn btn-outline-primary"
              >
                next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
