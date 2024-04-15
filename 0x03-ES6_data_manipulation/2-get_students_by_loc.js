export default function getStudentsByLocation(studentsList, cityString) {
  return studentsList.filter((studentsList) => studentsList.location === cityString);
}
