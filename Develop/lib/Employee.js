// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer")

class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}



const questions = [
    {
        type: "input",
        name: "name",
        message: "Name of Employee",
    },
    {
        type: "input",
        name: "id",
        message: "ID of the Employee",
    }, {
        type: "input",
        name: "email",
        message: "Employee's email",
    }
];
inquirer.prompt(questions).then(answers => {
    console.log(answers);
    const newEmployee = new Employee(answers.name, answers.id, answers.email)
    console.log(newEmployee.name)
    console.log(newEmployee.id)
    console.log(newEmployee.email)
})
// Name

// ID

// Email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
// 
// 
// 
// 
// 
