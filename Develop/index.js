// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

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
        name: "Table of Contents",
        message: ""
    },
    {
        type: "input",
        name: "Installation",
        message: ""
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
