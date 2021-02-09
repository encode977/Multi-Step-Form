import React from "react";

function FinalStep(props) {
  return (
    <section>
      <div className="personal__info">
        <p>Full Name: {props.state.fullname}</p>
        <p>Mobile Number: {props.state.number}</p>
        <p>Email: {props.state.email}</p>
        <p>Citizen Number: {props.state.ctznumber}</p>
      </div>
      <div className="address__info">
        <p>Country: {props.state.country}</p>
        <p>Province: {props.state.province}</p>
        <p>District: {props.state.district}</p>
        <p>Municipality: {props.state.municipality}</p>
        <p>Ward No: {props.state.wardno}</p>
      </div>

      <div className="account__info">
        <p>Bank Name:{props.state.bankname}</p>
        <p>Branch Name{props.state.branchname}</p>
        <p>Account Type: {props.state.acctype}</p>
        <p>Account Number:{props.state.accnumber}</p>
        <p>Account Statement:{props.state.accstatement}</p>
      </div>
    </section>
  );
}

export default FinalStep;
