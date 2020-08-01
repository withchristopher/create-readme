const fs = require('fs');
const inquirer = require('inquirer');

// Arrow function to CLI input
const promptUser = () => {
    return inquirer.prompt([{
            type: "input",
            message: "What is your GitHub username with your Application?",
            name: "githubName",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Invalid GitHub username, please enter");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the title of the project",
            name: "titleName",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Invalid priject title, please enter project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the description of the project?",
            name: "description",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Invalid description, please enter description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the installation instructions of the project?",
            name: "installation",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Invalid installation, please enter installation instructions.");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please enter usage information",
            name: "usage",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!')
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please enter contribution guidelines",
            name: "contribution",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!')
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please enter test instructions",
            name: "tests",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions!')
                    return false;
                }
            }
        },
        {
            type: "list",
            message: "Choose a license for your application",
            name: "license",
            choices: ["MIT", "Apache", "GPL", "Mozilla", "LGPL", "Eclipse", "Artistic", "Affero", "Unlicense"]
        },
    ])
};

promptUser();