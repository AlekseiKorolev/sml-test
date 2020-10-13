import React from "react";

import { Field } from "redux-form";

import "./amount.styles.scss";

import numberValidator from "../../util/numberValidator";

const renderAmount = (props: any) => (
  <input
    {...props.input}
    value={numberValidator(props.input.value)}
    className="form-control"
    type="text"
  />
);

const Amount = ({ type }: { type: string }) => {
  return (
    <div className={"amount-container"}>
      <Field name="amount" component={renderAmount} />
      <span className="currency-sign">
        &#8381; {type === "hour" ? " в час" : type === "day" ? " в день" : ""}
      </span>
    </div>
  );
};

export default Amount;
