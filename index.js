const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateSite = require('./src/site-template');
const {writeFile} = require('./src/file-builder');

var manager;
var engineers = [];
var interns = [];

const createManager = () =>{
    return inquirer.prompt([
        // Name
        {
            type:'input',
            name:'name',
            message: "What is the manager's name?: ",
            validate: textInput => {
                if (textInput){
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        // ID
        {
            type:'input',
            name:'id',
            message: "What is the manager's id?: ",
            validate: textInput => {
                if (textInput){
                    return true;
                } else {
                    console.log("Please enter the manager's id!");
                    return false;
                }
            }
        },
        // Email
        {
            type:'input',
            name:'email',
            message: "What is the manager's email?: ",
            validate: textInput => {
                if (textInput){
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }
        },
        // office
        {
            type:'input',
            name:'office',
            message: "What is the manager's office number?: ",
            validate: textInput => {
                if (textInput){
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        },
    ])
        .then(inputData => {
            manager = new Manager(inputData.name, inputData.id, inputData.email, inputData.office);
        })
}

const createTeam = () => {
    console.log(`
    - - - New Team Member - - -
    `)
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message: "Is this employee an Engineer or Intern?: ",
            choices: ['Engineer','Intern']
        },
            // Name
            {
                type:'input',
                name:'name',
                message: "What is the employee's name?: ",
                validate: textInput => {
                    if (textInput){
                        return true;
                    } else {
                        console.log("Please enter the employee's name!");
                        return false;
                    }
                }
            },
            // ID
            {
                type:'input',
                name:'id',
                message: "What is the employee's id?: ",
                validate: textInput => {
                    if (textInput){
                        return true;
                    } else {
                        console.log("Please enter the employee's id!");
                        return false;
                    }
                }
            },
            // Email
            {
                type:'input',
                name:'email',
                message: "What is the employee's email?: ",
                validate: textInput => {
                    if (textInput){
                        return true;
                    } else {
                        console.log("Please enter the employee's email!");
                        return false;
                    }
                }
            },
            // GitHub
            {
                type:'input',
                name:'github',
                message: "What is the engineer's github username?: ",
                validate: textInput => {
                    if (textInput){
                        return true;
                    } else {
                        console.log("Please enter the engineer's github username!");
                        return false;
                    }
                },
                when: ({role}) => {
                    if (role === 'Engineer'){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            },
            // School
            {
                type:'input',
                name:'school',
                message: "What is the intern's school?: ",
                validate: textInput => {
                    if (textInput){
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                },
                when: ({role}) => {
                    if (role === 'Intern'){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            },
            // add another member
            {
                type:'confirm',
                name:'confirmAddMember',
                message: "Would you like to add another team member?: ",
                default: false
            },
        ])
            .then(employeeData =>{
                if(employeeData.role === 'Intern'){
                    interns.push(new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school))
                }
                else {
                    engineers.push(new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github))
                }
                if(employeeData.confirmAddMember){
                    return createTeam();
                }
            })
}

createManager()
    .then( () => {
        return createTeam();
    })
        .then( () => {
            return generateSite(manager,engineers,interns)
        })
        .then( (siteData) => {
            return writeFile(siteData);
        })
        .then((writeResponse) => {
            console.log(writeResponse);
        });