const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const addMoreQuestion = [{
    type: "confirm",
    name: "stop",
    message: "Do you want to add more?"
}]
const roleQuestion = [{
    type: "list",
    name: "role",
    message: "Who would you like to add to the team?",
    choices: ["Manager", "Engineer", "Intern"]
}];
const internQuestions = [{
    type: "input",
    name: "name",
    message: "Name?"
}, {
    type: "input",
    name: "id",
    message: "Employee ID?"
}, {
    type: "input",
    name: "email",
    message: "Employee's Email"
}, {
    type: "input",
    name: "school",
    message: "What is the intern's school?"
}];
const managerQuestions = [{
    type: "input",
    name: "name",
    message: "Name?"
}, {
    type: "input",
    name: "id",
    message: "Employee ID?"
}, {
    type: "input",
    name: "email",
    message: "Employee's Email"
}, {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?"
}];
const engineerQuestions = [{
    type: "input",
    name: "name",
    message: "Name?"
}, {
    type: "input",
    name: "id",
    message: "Employee ID?"
}, {
    type: "input",
    name: "email",
    message: "Employee's Email"
}, {
    type: "input",
    name: "github",
    message: "What is their GitHub Username?"
}]
// Variable to store employees
let employees = [];
// Ask user if they want to add more
const startInput = function () {
    inquirer.prompt(addMoreQuestion).then(answers => {
        if (answers.stop === true) {
            startEmployees();
        } else {
            const finalHtml = render(employees);
            fs.writeFileSync(outputPath, finalHtml)
        }
    })
};
// Adding information about employees
const startEmployees = function () {
    inquirer.prompt(roleQuestion).then(answers => {
        if (answers.role === "Manager") {
            inquirer.prompt(managerQuestions).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                employees.push(manager)
                startInput();
            });
        } else if (answers.role === "Engineer") {
            inquirer.prompt(engineerQuestions).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employees.push(engineer)
                startInput();
            });
        } else {
            inquirer.prompt(internQuestions).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                employees.push(intern)
                startInput();
            });
        };
    });
}


startInput();









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
