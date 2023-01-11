const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const result = path.resolve(__dirname, 'dist');
const resultpath = path.join(result, 'team.html');
const teamgenerated = require('./src/template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const listOfTeam = []

function runApp () {


    //Creating team by answering prompts by the user
    function createTeam () {
        inquirer.prompt([{
            type: "list",
            message: "Please Add Team Members",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuilder();
            }
        })
    }

    //adding manager section
    function addManager() {
        inquirer.prompt ([

            {
                type: "input",
                name: "managerName",
                message: "Please Provide Manager's Name"
            },

            {
                type: "input",
                name: "managerId",
                message: "Please Provide ID Number"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "Please Provide Manager's Email"
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please Provide Manager's Office Number"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            listOfTeam.push(manager);
            createTeam();
        });

    }

    //adding Engineer function
    function addEngineer() {
        inquirer.prompt([

            {
                type: "input",
                name: "engineerName",
                message: "Please Provide Engineer's Name"
            },

            {
                type: "input",
                name: "engineerId",
                message: "Please Provide ID"
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "Please Provide Engineer's Email"
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Please Provide Engineer's GitHub ID"
            }

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            listOfTeam.push(engineer);
            createTeam();
        });

    }
    // adding Intern function
    function addIntern() {
        inquirer.prompt([

            {
                type: "input",
                name: "internName",
                message: "Please Provide Intern's Name"
            },

            {
                type: "input",
                name: "internId",
                message: "Please Provide ID"
            },

            {
                type: "input",
                name: "internEmail",
                message: "Please Provide Intern's Email"
            },

            {
                type: "input",
                name: "internSchool",
                message: "Please Provide Intern's School"
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            listOfTeam.push(intern);
            createTeam();
        });

    }



    function htmlBuilder () {
        console.log("...........................................");
        console.log("...........................................");
        console.log("Team Created! Please see dist file for created html for Team!")

        fs.writeFileSync(resultpath, teamgenerated(listOfTeam), "UTF-8")

    }

    createTeam();

}

runApp();