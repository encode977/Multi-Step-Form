import React from "react";

function Step1(props) {
  return (
    <div>
      <h3>Personal Details</h3>
      <form>
        <div className="form__control">
          <input
            type="text"
            name="fullname"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Full Name"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="numnber"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Mobile Number"
          />
        </div>
        <div className="form__control">
          <input
            type="email"
            name="email"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="ctznumber"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Citizenship Number"
          />
        </div>
        <button className="next__btn" onClick={props.next}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Step1;
