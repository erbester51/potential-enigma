// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.badge = '[![badge](https://img.shields.io/badge/License-mit-red)](https://choosealicense.com/licenses/mit)';
    data.license = `## License
    
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/mit/`;
  }
  else if (data.license === "Apache-2.0 License") {
    data.badge = '[![badge]("https://img.shields.io/badge/License-apache--2.0-green")]("https://choosealicense.com/licenses/apache-2.0/")';
    data.license = `## License
    
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/apache-2.0/`;
  }
  else if (data.license === "Mozilla Public License 2.0") {
    data.badge = '[![badge](https://img.shields.io/badge/License-mpl--2.0-orange)](https://choosealicense.com/licenses/mpl-2.0/)';
data.license = `## License

    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/mpl-2.0/`;

  }
  else (data.badge === "", data.license === "");
}

"Mozilla Public License 2.0"

// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description  
${data.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#Usage)
-[License](#License)
-[Contributions](#Contributions)
-[Test](#Test)
-[Author](#Author)
-[Email](#Email)
-[Github](#Github)

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

## Contributions
${data.contributions}

## Test
${data.test}

## Questions

Please let me know if you have any questions!

* Author: ${data.author}

* Email: ${data.email}

*Github: ${data.github}

`;
}

module.exports = generateMarkdown;
