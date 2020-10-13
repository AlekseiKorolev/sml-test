export default (str: string): string => {
  const newFormat: string[] = str.split("").reverse();
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
