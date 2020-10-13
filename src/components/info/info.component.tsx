import React from "react";

import "./info.styles.scss";

import calculate from "../../util/calculate";
import numberValidator from "../../util/numberValidator";

import { Row } from "react-bootstrap";

interface InfoProps {
  value: string;
  withTax: boolean;
}

interface InfoState {
  amount: string;
  tax: string;
  total: string;
}

const Info = ({ value, withTax }: InfoProps) => {
  const res: InfoState = calculate(numberValidator(value), withTax);
  return (
    <Row>
      <div className={"info-container"}>
        <div>
          {res.amount} &#8381;
          <span className="font-regular">
            {" "}
            сотрудник будет получать на руки
          </span>
        </div>
        <div>
          {res.tax} &#8381;
          <span className="font-regular"> НДФЛ, 13% от оклада</span>
        </div>
        <div>
          {res.total} &#8381;
          <span className="font-regular"> за сотрудника в месяц</span>
        </div>
      </div>
    </Row>
  );
};

export default Info;
