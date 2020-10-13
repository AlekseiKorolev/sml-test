import React from "react";

import "./form.styles.scss";

import { reduxForm, InjectedFormProps } from "redux-form";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import Types from "../types/types.component";
import Tax from "../tax/tax.component";
import Amount from "../amount/amount.component";
import Info from "../info/info.component";

import { Container, Row } from "react-bootstrap";

const initialState = {
  amount: "",
  tax: true,
  type: "month"
};

interface Props {
  amount: string;
  tax: boolean;
  type: string;
}
interface Values {
  values: Props;
}
interface Payment {
  payment: Values;
}
interface Form {
  form: Payment;
}

const useTypedSelector: TypedUseSelectorHook<Form> = useSelector;

const Form: React.FC<InjectedFormProps<Props>> = () => {
  const store = useTypedSelector(state =>
    state?.form?.payment?.values !== undefined
      ? { ...initialState, ...state.form.payment.values }
      : initialState
  );

  const amount = store.amount;
  const tax = store.tax;
  const type = store.type;

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

export default reduxForm<Props>({
  form: "payment"
})(Form);
