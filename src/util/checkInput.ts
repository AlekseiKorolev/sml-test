export default (value: string) => {
  const str = value
    .split("")
    .filter((el: any) => "0123456789".includes(el))
    .filter((_: any, i: number) => i < 12)
    .join("");

  const num = parseInt(str) < 999000000000 ? parseInt(str) : 999000000000;

  return new Intl.NumberFormat()
    .format(num)
    .split("")
    .map(el => (el === "," ? " " : el))
    .join("");
};
