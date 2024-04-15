export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((studentsList) => studentsList.location === city)
    .map((studentsList) => {
      const newGrade = newGrades.find((grade) => grade.studentId === studentsList.id);
      return {
        ...studentsList,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
