import numberFormat from "./numberFormat";

export default (str: string): string => {
  if (!str) return "";
  const newStr = str
    .split("")
    .filter(num => "0123456789".includes(num))
    .filter((_, i) => i < 12)
    .join("");
  return numberFormat(
    parseInt(newStr) > 999000000000 ? (999000000000).toString() : newStr
  );
};
