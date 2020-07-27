const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const myTeam = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// use inquirer to ask questions of a manager, and then put the data into the class
function generateAManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name, Manager?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your E-mail:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
    ])
    .then((result) => {
      myTeam.push(
        new Manager(result.name, result.id, result.email, result.officeNumber)
      );
      addTeamMember();
    });
}

function generateAEnginner() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Employee ID:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter E-mail:",
      },
    ])
    .then((result) => {
      myTeam.push(
        new Engineer(result.name, result.id, result.email, result.github)
      );
      addTeamMember();
    });
}

function generateAIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter ID:",
        validate: (v) => !isNaN(v) || "You must enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter E-mail:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Where were they schooled:",
      },
    ])
    .then((result) => {
      myTeam.push(
        new Intern(result.name, result.id, result.email, result.school)
      );
      addTeamMember();
    });
}
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "type",
        message:
          "What type of employee do you want to enter? Engineer, Intern or type 'Done' to quit:",
      },
    ])
    .then((result) => {
      if (result.type === "Done") {
        // convert employees to html and store it
        let teamHtml = render(myTeam);
        fs.writeFileSync("./output/team.html", teamHtml);
      }
      if (result.type === "Engineer") {
        generateAEnginner();
      }
      if (result.type === "Intern") {
        generateAIntern();
      }
    });
}

function main() {
  generateAManager();
}

main();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
