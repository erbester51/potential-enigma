// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?:"
    },
    {
        type: "input",
        name: "Description",
        message: "Please enter a description of your project:"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps to download your application?:"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please include instructions on how to user your application:"
    },
    {
        type: "input",
        name: "License",
        message: "Please choose a license for your repository:",
        choices: ["MIT License", "Apache-2.0 License", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "Contributions",
        message: "Please enter your contribution guidelines:"
    },
    {
        type: "input",
        name: "Test",
        message: "Please enter your test instructions:"
    },
    {
        type: "input",
        name: "Author",
        message: "Please enter your name:"
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter your email:"
    },
    {
        type: "input",
        name: "Github",
        message: "Please enter your github username:"
    },
];

// TODO: Create a function to write README file
// function writeToFile(readMe, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile("README.md", generateMarkdown(data), (err) => 
            err ? console.log(err) : console.log("Success!")
        );
    }
    )
}

// Function call to initialize app
init();
