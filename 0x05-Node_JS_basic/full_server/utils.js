const fs = require('fs');

const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!fs.existsSync(dataPath)) {
    reject(new Error('Cannot load the database'));
    return;
  }
  if (!fs.statSync(dataPath).isFile()) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Error reading the database'));
      return;
    }

    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    // Convert to object of arrays of first names
    const result = {};
    for (const [field, students] of Object.entries(studentGroups)) {
      result[field] = students.map((student) => student.firstname);
    }

    resolve(result);
  });
});

export default readDatabase;
module.exports = readDatabase;
