import React from "react";

import "./tax.styles.scss";

import { Field } from "redux-form";

const renderSwitch = (props: any) => {
  return (
    <label className="switch">
      <input {...props.input} type="checkbox" defaultChecked={true} />
      <span className="slider"></span>
    </label>
  );
};

const Tax = ({ tax }: { tax: boolean }) => {
  return (
    <div className="tax-container">
      <div className={tax ? "gray" : "black"}>Указать с НДФЛ</div>
      <Field name="tax" component={renderSwitch} />
      <div className={tax ? "black" : "gray"}>Без НДФЛ</div>
    </div>
  );
};

export default Tax;
