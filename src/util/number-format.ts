export const numberFormat = (str: string, calc?: any) => {
  let newFormat = str.split("").filter(num => num !== " ");
  if (calc) {
    const value = parseInt(newFormat.join(""));
    const total = Math.round(value / 0.87);
    if (calc === "tax") {
      newFormat = (total - value).toString().split("");
    } else {
      newFormat = total.toString().split("");
    }
  }
  newFormat.reverse();
  let index = 0;
  let count = 0;
  while (index < newFormat.length) {
    if (count === 3 && index !== newFormat.length) {
      newFormat.splice(index, 0, " ");
      count = 0;
    } else {
      count++;
    }
    index++;
  }
  newFormat.reverse();
  return newFormat.join("");
};
