import React, { useState, useRef } from "react";

import "./types.styles.scss";

import { Field } from "redux-form";

import { Overlay, Tooltip } from "react-bootstrap";

interface TypesConst {
  name: string;
  id: string;
}

const TYPES: TypesConst[] = [
  {
    name: "Оклад за месяц",
    id: "month"
  },
  {
    name: "МРОТ",
    id: "min"
  },
  {
    name: "Оплата за день",
    id: "day"
  },
  {
    name: "Оплата за час",
    id: "hour"
  }
];

const INFO =
  "МРОТ - минимальный размер оплаты труда. Разный для разных регионов.";

const renderType = (props: any) => {
  const checked: string = props.checked;
  const tip: boolean = props.tip;

  return TYPES.map((type: TypesConst) => {
    return (
      <li key={`radio${type.id}`}>
        <span className="dot-container">
          <span className={type.id === checked ? "dot" : "disabled"}></span>
        </span>
        <input
          className="form-chack-input"
          id={type.id}
          type="radio"
          {...props.input}
          value={type.id}
          checked={checked === type.id}
        />
        <label className="form-check-label" htmlFor={type.id}>
          {type.name}
        </label>
        {type.id === "min" ? (
          <div
            ref={props.target}
            className="tip-container"
            onClick={props.handleClick}
          >
            <span className="tip">{tip ? "x" : "i"}</span>
          </div>
        ) : null}
      </li>
    );
  });
};

const Types = (props: any) => {
  const [tip, setTip] = useState<boolean>(false);
  const target = useRef(null);

  const checked: string = props.checked;

  const handleClick = () => setTip(!tip);

  return (
    <ul className="list-unstyled">
      <Field
        name="type"
        checked={checked}
        component={renderType}
        target={target}
        tip={tip}
        handleClick={handleClick}
      />
      <Overlay target={target.current} show={tip} placement="bottom-start">
        {(props: any) => (
          <Tooltip id="tip" {...props}>
            {INFO}
          </Tooltip>
        )}
      </Overlay>
    </ul>
  );
};

export default Types;
