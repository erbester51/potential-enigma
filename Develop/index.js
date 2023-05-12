// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please enter a description of your project"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps to download your application?"
    },
    {
        type: "input",
        name: "Usage",
        message: ""
    },
    {
        type: "input",
        name: "License",
        message: ""
    },
    {
        type: "input",
        name: "Contributions",
        message: "Contribution guidelines"
    },
    {
        type: "input",
        name: "Test",
        message: "Test instructions"
    },
];

// TODO: Create a function to write README file
// function writeToFile(readMe, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data) => {
        fs.writeFile("README.md", generateMarkdown(data), (err) => 
            err ? console.log(err) : console.log("Success!")
        );
    }
}

// Function call to initialize app
init();
