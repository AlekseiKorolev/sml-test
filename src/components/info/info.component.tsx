import React from "react";

import "./info.styles.scss";

import { numberFormat } from "../../util/number-format";

import { Row } from "react-bootstrap";

const Info = (props: any) => {
  const value: string = props.value;
  return (
    <Row>
      <div className={"info-container"}>
        <div>
          {numberFormat(value)} &#8381;
          <span className="font-regular">
            {" "}
            сотрудник будет получать на руки
          </span>
        </div>
        <div>
          {numberFormat(value, "tax")} &#8381;
          <span className="font-regular"> НДФЛ, 13% от оклада</span>
        </div>
        <div>
          {numberFormat(value, "total")} &#8381;
          <span className="font-regular"> за сотрудника в месяц</span>
        </div>
      </div>
    </Row>
  );
};

export default Info;
