import React from "react";

function Step2(props) {
  let noSongs = 2;
  const songs = [];
  for (let i = 1; i <= noSongs; i++) {
    songs.push(i);
  }
  return (
    <div>
      <h3>Address information</h3>
      <form>
        <div className="form__control">
          <input
            type="text"
            name="country"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Country"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="province"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Province"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="district"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="District"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="municipality"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Municipality"
          />
        </div>
        <div className="form__control">
          <input
            type="text"
            name="wardno"
            value={props.getState("name")}
            onChange={props.handleChange}
            placeholder="Ward No"
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

export default Step2;
