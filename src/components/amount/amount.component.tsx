import React, { useEffect } from "react";

import { change, Field } from "redux-form";
import { useDispatch } from "react-redux";
import checkInput from "../../util/checkInput";

import "./amount.styles.scss";

const renderAmount = (props: any) => (
  <input
    {...props.input}
    id="amount"
    onKeyDown={props.handleKey}
    className="form-control"
    maxLength="15"
    type="text"
  />
);

interface AmountType {
  type: string;
}

const Amount = ({ type }: AmountType) => {
  const dispatch = useDispatch();

  const handleKey = (event: any) => {
    const key = event.key;
    const value = event.target.value;
    let caret = event.target.selectionStart;

    if (key === "ArrowRight" && value[caret] === " ") {
      event.target.selectionStart = caret + 1;
    } else if (key === "ArrowLeft" && value[caret - 2] === " ") {
      event.target.selectionStart = caret - 2;
    }
  };

  useEffect(() => {
    const input = document.getElementById("amount") as HTMLInputElement;

    input.addEventListener("input", (event: any) => {
      const type = event.inputType.split("deleteContent").join("");
      let value = event.target.value;
      let caret = input.selectionStart || 0;

      if (!value) return;
      if (value.length === 1 && !"0123456789".includes(value[0])) {
        input.value = "";
        return;
      }

      let res = checkInput(value);

      let add = 0;
      if (
        (type === "Forward" || type === "Backward") &&
        res.length > value.length
      ) {
        type === "Forward" && add++;
        const arr = value.split("");
        arr.splice(type === "Backward" ? caret - 1 : caret, 1);
        res = checkInput(arr.join(""));
      }

      dispatch(change("payment", "amount", res));

      const diff = value.length - res.length;

      input.selectionStart = caret - diff + add >= 0 ? caret - diff + add : 0;
      input.selectionEnd = caret - diff + add >= 0 ? caret - diff + add : 0;
    });
  }, [dispatch]);

  return (
    <div className={"amount-container"}>
      <Field name="amount" component={renderAmount} handleKey={handleKey} />
      <span className="currency-sign">
        &#8381; {type === "hour" ? " в час" : type === "day" ? " в день" : ""}
      </span>
    </div>
  );
};

export default Amount;
