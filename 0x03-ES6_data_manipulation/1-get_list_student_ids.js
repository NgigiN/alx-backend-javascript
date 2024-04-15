export default function getListStudentIds(array) {
  let idArray = [];

  if (array instanceof Array) {
    idArray = array.map((item) => item.id);
  } else {
    return [];
  }

  return idArray;
}
