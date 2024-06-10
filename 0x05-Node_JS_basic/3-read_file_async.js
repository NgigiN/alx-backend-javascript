const fs = require('fs').promises;

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const fileLines = data
      .toString('utf-8')
      .trim()
      .split('\n');
    if (fileLines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      if (studentRecord.length !== dbFieldNames.length) {
        continue;
      }
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);

      studentGroups[field].push(Object.fromEntries(studentEntries));
    }
    const totalStudents = Object.values(studentGroups).reduce(
      (prev, curr) => prev + curr.length,
      0,
    );
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(
        `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
      );
    }
  } catch (error) {
    // Log the error message
    console.error('Cannot load the database');
    throw new Error('Cannot load the database');
  }
};

// Export the function for use in other files
module.exports = countStudents;
