const readDatabase = require('../utils');

const VALID_MAJORS = ['CS', 'SWE'];

class StudentController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responsePart = ['This is the list of our students'];

        // Debugging: Log the contents of studentGroups
        console.log('Student Groups:', studentGroups);

        const comp = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };
        for (const [field, group] of Object.entries(studentGroups).sort(comp)) {
          responsePart.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.join(', ')
          ].join(' '));
        }
        response.status(200).send(responsePart.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((studentGroups) => {
        // Debugging: Log the contents of studentGroups for the specified major
        console.log(`Student Groups for ${major}:`, studentGroups[major]);

        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentController;
module.exports = StudentController;
