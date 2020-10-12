import React from "react";

import "./form.styles.scss";

import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import Types from "../types/types.component";
import Tax from "../tax/tax.component";
import Amount from "../amount/amount.component";
import Info from "../info/info.component";

import { Container, Row } from "react-bootstrap";

const Form = (props: any) => {
  const amount: string =
    (props.state && props.state.values && props.state.values.amount) || "";
  const tax: boolean =
    props.state && props.state.values && props.state.values.tax !== undefined
      ? props.state.values.tax
      : true;
  const type: string =
    props.state && props.state.values && props.state.values.type
      ? props.state.values.type
      : "month";
  const valid: boolean = props.valid;

  return (
    <Container>
      <Row>Сумма</Row>
      <Row>
        <form>
          <Types checked={type} />
          <Tax tax={tax} />
          <Amount type={type} />
        </form>
      </Row>
      {type === "month" && !valid && amount.length !== 0 ? (
        <Info value={amount} type={type} tax={tax} />
      ) : (
        <div className="instead-of-info"></div>
      )}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  state: state.form.payment
});

const ConnectForm = connect(mapStateToProps)(Form);

export default reduxForm({
  form: "payment"
})(ConnectForm);
