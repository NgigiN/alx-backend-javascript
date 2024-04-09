export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];

  for (const index of array) {
    newarray.push(appendString + index);
  }

  return newarray;
}
