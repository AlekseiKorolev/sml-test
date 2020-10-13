import React, { useState, useRef } from "react";

import "./types.styles.scss";

import { Field } from "redux-form";

import { Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";

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

const renderTooltip = (props: any) => (
  <Tooltip id="tip" {...props}>
    {INFO}
  </Tooltip>
);

interface RenderType {
  checked: string;
  tip: boolean;
  input: any;
  target: React.RefObject<HTMLDivElement>;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const renderType = ({
  checked,
  tip,
  input,
  target,
  handleClick
}: RenderType) => {
  return TYPES.map((type: TypesConst) => {
    return (
      <li key={`radio${type.id}`}>
        <label className="form-check-label" htmlFor={type.id}>
          <span className="dot-container">
            <span className={type.id === checked ? "dot" : "disabled"}></span>
          </span>
          <input
            className="form-chack-input"
            id={type.id}
            type="radio"
            {...input}
            value={type.id}
            checked={checked === type.id}
          />
          {type.name}
        </label>
        {type.id === "min" ? (
          <OverlayTrigger
            placement="bottom-start"
            delay={{ show: 50, hide: 50 }}
            overlay={renderTooltip}
          >
            <div ref={target} className="tip-container" onClick={handleClick}>
              <span className="tip">{tip ? "x" : "i"}</span>
            </div>
          </OverlayTrigger>
        ) : null}
      </li>
    );
  });
};

const Types = ({ checked }: { checked: string }) => {
  const [tip, setTip] = useState<boolean>(false);
  const target = useRef(null);

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
        {renderTooltip}
      </Overlay>
    </ul>
  );
};

export default Types;
