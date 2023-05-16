// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your repository called?",
    },
    {
        type: "input",
        name: "description",
        message: "Tell me about your repository! This will be included in the 'Description' tab of your README.",
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your application, if any?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please include instructions on how to use your application! (A spot to include a screenshot will be inside your README after generating.)",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please include any contributions that you may have had!",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your repository",
        choices: ["Mozilla Public License 2.0",
            "Apache License 2.0", "MIT License", "None"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "what email is the best way to reach you with any further questions?",
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile("Generated README.md", generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    }
    )
}

// Function call to initialize app
init();
