
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your repository called?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How do I install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide how I would use your project.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Who has contributed to your project?",
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
