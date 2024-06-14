const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
app.on('request', (req, res) => {
  const responseTxt = 'Hello Holberton School!';
  const dbPath = process.argv[2];
  const students = [];
  const fields = {};
  const fieldsArray = [];
  const csv = [];
  const csvArray = [];
  let csvString = '';

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Header', responseTxt.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseTxt));
  } else if (req.url === '/students') {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.write('This is the list of students\n');
        res.write('Cannot load the database');
      } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.write('This is the list of students\n');
        csvString = data.toString();
        csvArray.push(csvString.split('\n'));
        for (const line of csvArray[0]) {
          csv.push(line.split(','));
        }
        for (const field of csv[0]) {
          fieldsArray.push(field);
        }
        for (const line of csv.slice(1)) {
          for (const field of line) {
            fields[fieldsArray[line.indexOf(field)]] = field;
          }
          students.push(fields);
        }
        for (const student of students) {
          res.write(`Number: ${student.id}\n`);
          res.write(`Name: ${student.firstname} ${student.lastname}\n`);
          if (student.location) {
            res.write(`Location: ${student.location}\n`);
          }
          res.write('\n');
        }
      }
      res.end();
    });
  }
});
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});
module.exports = app;
