import React from "react";
import Accordian from "@material-ui/core/Accordion";
import AccordianSummary from "@material-ui/core/AccordionSummary";
import AccordianDetail from "@material-ui/core/AccordionDetails";
import ListItemText from "@material-ui/core/ListItemText";
import ExpnadMoreIcon from "@material-ui/icons/ExpandMore";

function FinalStep(props) {
  return (
    <section className="finalStep">
      <Accordian>
        <AccordianSummary expandIcon={<ExpnadMoreIcon />}>
          Personal Details
        </AccordianSummary>
        <AccordianDetail>
          <p>Full Name: {props.state.fullname}</p>
          <p>Mobile Number: {props.state.number}</p>
          <p>Email: {props.state.email}</p>
          <p>Citizen Number: {props.state.ctznumber}</p>
        </AccordianDetail>
      </Accordian>

      <Accordian>
        <AccordianSummary expandIcon={<ExpnadMoreIcon />}>
          Address Details
        </AccordianSummary>
        <AccordianDetail className="singleList">
          <div className="singleList">
            <ListItemText>Country: {props.state.country}</ListItemText>
            <ListItemText>Province: {props.state.province}</ListItemText>
            <ListItemText>District: {props.state.district}</ListItemText>
            <ListItemText>
              Municipality: {props.state.municipality}
            </ListItemText>
            <ListItemText>Ward No: {props.state.wardno}</ListItemText>
          </div>
        </AccordianDetail>
      </Accordian>

      <Accordian>
        <AccordianSummary expandIcon={<ExpnadMoreIcon />}>
          Account Details
        </AccordianSummary>
        <AccordianDetail>
          <p>Bank Name:{props.state.bankname}</p>
          <p>Branch Name{props.state.branchname}</p>
          <p>Account Type: {props.state.acctype}</p>
          <p>Account Number:{props.state.accnumber}</p>
          <p>Account Statement:{props.state.accstatement}</p>
        </AccordianDetail>
      </Accordian>
    </section>
  );
}

export default FinalStep;
