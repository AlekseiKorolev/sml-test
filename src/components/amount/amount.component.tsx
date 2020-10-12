import React from "react";

import { Field } from "redux-form";

import "./amount.styles.scss";

import { numberFormat } from "../../util/number-format";

const renderAmount = (props: any) => (
  <input
    {...props.input}
    value={numberFormat(props.input.value)}
    className="form-control"
    type="text"
  />
);

const onlyNumber = (str: string) => {
  if (!str) return false;
  const newStr = str.split(" ").join("");
  const regex = /^\d+$/;
  if (regex.test(newStr)) return true;
  else return false;
};

const Amount = (props: any) => {
  const type: string = props.type;

  return (
    <div
      className={
        type === "min" ? "amount-container hidden" : "amount-container"
      }
    >
      <Field name="amount" component={renderAmount} validate={onlyNumber} />
      <span className="currency-sign">
        &#8381; {type === "hour" ? " в час" : type === "day" ? " в день" : ""}
      </span>
    </div>
  );
};

export default Amount;
