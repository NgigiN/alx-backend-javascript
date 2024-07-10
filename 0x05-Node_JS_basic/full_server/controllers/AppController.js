class Appcontroller {
  static getHomepage (request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default Appcontroller;
module.exports = Appcontroller;
