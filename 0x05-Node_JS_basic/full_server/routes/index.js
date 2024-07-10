import Appcontroller from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const mapRoutes = (app) => {
  app.get('/', Appcontroller.getHomepage);
  app.get('/students', StudentController.getAllStudents);
  app.get('/students/:major', StudentController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
