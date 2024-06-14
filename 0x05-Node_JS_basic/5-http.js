const http = require('http')
const fs = require('fs')

const PORT = 1245
const HOST = 'localhost'
const app = http.createServer((req, res) => {
  const dbPath = process.argv[2]

  if (req.url === '/') {
    // Respond with the welcome message
    const responseTxt = 'Hello Holberton School!'
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 200
    res.end(responseTxt)
  } else if (req.url === '/students') {
    // Respond with the student list
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      res.setHeader('Content-Type', 'text/plain')

      if (err) {
        // Handle error reading the file
        res.statusCode = 500
        res.end('This is the list of our students\nCannot load the database')
      } else {
        // Process the CSV data
        const students = data.split('\n').filter(line => line.trim() !== '')
        const studentFields = students.shift().split(',')

        const studentList = students.map(line => {
          const details = line.split(',')
          const student = {}
          studentFields.forEach((field, index) => {
            student[field.trim()] = details[index].trim()
          })
          return student
        })

        // Count and group students by field
        const fieldCounts = {}
        const studentNamesByField = {}

        studentList.forEach((student) => {
          const { field } = student
          if (!fieldCounts[field]) {
            fieldCounts[field] = 0
            studentNamesByField[field] = []
          }
          fieldCounts[field]++
          studentNamesByField[field].push(student.firstname)
        })

        // Write the response with the student details
        res.statusCode = 200
        res.write('This is the list of our students\n')
        res.write(`Number of students: ${students.length}\n`)

        for (const [field, count] of Object.entries(fieldCounts)) {
          res.write(`Number of students in ${field}: ${count}. List: ${studentNamesByField[field].join(', ')}\n`)
        }

        res.end()
      }
    })
  } else {
    // Handle other paths
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 404
    res.end('Not Found')
  }
})

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`)
})

module.exports = app
