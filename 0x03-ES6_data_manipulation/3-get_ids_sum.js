export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulator, current) => accumulator + current.id, 0);
}
