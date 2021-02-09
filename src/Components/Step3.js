import React from "react";

function Step3(props) {
  let noSongs = 2;
  const songs = [];
  for (let i = 1; i <= noSongs; i++) {
    songs.push(i);
  }
  return (
    <div>
      <h3>Account Details</h3>
      <form>
        <div className="form__control">
          <input
            type="text"
            name="bankname"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Name of Bank"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="branchname"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Branch Name"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="acctype"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Type of Bank Account"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="accnumber"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Bank Account No"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="accstatement"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Account Statement"
          />
        </div>
        <button className="prev__btn" onClick={props.prev}>
          Previous
        </button>
        <button className="next__btn" onClick={props.next}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Step3;
