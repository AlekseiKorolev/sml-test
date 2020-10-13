import React from "react";

import "./form.styles.scss";

import { reduxForm, InjectedFormProps } from "redux-form";
import { useSelector } from "react-redux";

import Types from "../types/types.component";
import Tax from "../tax/tax.component";
import Amount from "../amount/amount.component";
import Info from "../info/info.component";

import { Container, Row } from "react-bootstrap";

interface FormProps {
  amount: string;
  tax: boolean;
  type: string;
}

const Form: React.FC<InjectedFormProps<FormProps>> = (props: any) => {
  const store: any = useSelector(state => state);
  const amount = store?.form?.payment?.values?.amount || "";
  const tax =
    store?.form?.payment?.values?.tax !== undefined
      ? store?.form?.payment?.values?.tax
      : true;
  const type = store?.form?.payment?.values?.type || "month";

  return (
    <Container>
      <Row>Сумма</Row>
      <Row>
        <form>
          <Types checked={type} />
          {type !== "min" && <Tax tax={tax} />}
          {type !== "min" && <Amount type={type} />}
        </form>
      </Row>
      {type === "month" && amount.length !== 0 ? (
        <Info value={amount} withTax={tax} />
      ) : (
        <div className="instead-of-info"></div>
      )}
    </Container>
  );
};

export default reduxForm<FormProps>({
  form: "payment"
})(Form);
