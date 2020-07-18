const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Asks user for employee's role then returns a string. 
function promptRole() {
    return inquirer.prompt([
        { 
            type: "list",
            name: "typeOfEmployee",
            message: "What role would you like to add to your team? Enter Manager, Engineer, or Intern: ",
            choices: ["Manager", "Engineer", "Intern", "exit"]
        }
    ])
}

// Asks the user if they would like to continue to add team members after and returns a string.
function askToContinue() {
    return inquirer.prompt([
        {
            name: "proceed",
            message: "Would you like to keep adding employees to your team? (yes/no): " 
        }
    ])
}

// Asks the user for the manager data.
function promptManagerData() {
    return inquirer.prompt([
        {
            name: "name",
            message: "What is the employee's name?"
        },
        {
            name: "id",
            message: "What is their ID number?"
        },
        {
            name: "email",
            message: "What is their email?"
        },
        {
            name: "officeNumber",
            message: "What is their office number?"
        }
    ])
}

// Asks user to input engineer data.
function promptEngineerData() {
    return inquirer.prompt([
        {
            name: "name",
            message: "What is the employee's name?"
        },
        {
            name: "id",
            message: "What is their ID number?"
        },
        {
            name: "email",
            message: "What is their email?"
        },
        {
            name: "github",
            message: "What is their github username?"
        }
    ])
}

// Asks user for input intern data.
function promptInternData() {
    return inquirer.prompt([
        {
            name: "name",
            message: "What is the employee's name?"
        },
        {
            name: "id",
            message: "What is their ID number?"
        },
        {
            name: "email",
            message: "What is their email?"
        },
        {
            name: "school",
            message: "Which school did that attend?"
        }
    ])
}

let employees = []
function buildTeam() {

        //Ask user for employee data.
        promptRole()
            .then(empRole => {
                if (empRole.typeOfEmployee === 'Manager') {
                    let newManager = new Manager()
                    promptManagerData().then(managerData => {
                        newManager.name = managerData.name
                        newManager.id = managerData.id
                        newManager.email = managerData.email
                        newManager.officeNumber = managerData.officeNumber
                        employees.push(newManager)
                        buildTeam()
                    })
                    
                }
                else if (empRole.typeOfEmployee === 'Engineer') {
                    let newEngineer = new Engineer()
                    promptEngineerData().then(engineerData => {
                        newEngineer.name = engineerData.name
                        newEngineer.id = engineerData.id
                        newEngineer.email = engineerData.email
                        newEngineer.github = engineerData.github
                        employees.push(newEngineer)
                        buildTeam()
                    })
                    
                }
                else if (empRole.typeOfEmployee === 'Intern') {
                    let newIntern = new Intern()
                    promptInternData().then(internData => {
                        newIntern.name = internData.name
                        newIntern.id = internData.id
                        newIntern.email = internData.email
                        newIntern.school = internData.school
                        employees.push(newIntern)
                        buildTeam()
                    })
                    
                }
                else {
                  const output = render(employees) //this correct?
                  fs.writeFile(outputPath, output, (err) => {
                    if (err) throw err
                    console.log("success")
                  })
                  console.log(output)
                }
            })
}

buildTeam()


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


// inquirer.prompt([
//     {
//         name: "proceed",
//         message: "Would you like to keep adding people to your team? (yes/no)"
//     }
// ]).then(answer => {
//     if(answer.proceed === "no") {
//         stillBuildingTeam = false
//     }
// })