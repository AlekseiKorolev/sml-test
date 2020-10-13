import numberFormat from "./numberFormat";

interface NumberFormat {
  amount: string;
  tax: string;
  total: string;
}

export default (str: string, tax: boolean): NumberFormat => {
  const newFormat: string[] = str.split("").filter(num => num !== " ");
  const res: any = { amount: "", tax: "", total: "" };
  const value: number = parseInt(newFormat.join(""));
  let temp: number = 0;
  if (!tax) {
    temp = Math.round(value * 0.13);
    res.total = value.toString();
    res.tax = temp.toString();
    res.amount = (value - temp).toString();
  } else {
    temp = Math.round(value / 0.87);
    res.amount = value.toString();
    res.tax = (temp - value).toString();
    res.total = temp.toString();
  }

  for (let key of Object.keys(res)) {
    res[key] = numberFormat(res[key]);
  }

  return res;
};
