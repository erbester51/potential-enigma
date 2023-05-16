// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  if (data.license === "Mozilla Public License 2.0") {
    data.badge = '[![badge](https://img.shields.io/badge/License-mpl--2.0-orange)](https://choosealicense.com/licenses/mpl-2.0/)';
    data.licenseLink = `## License
  
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/mpl-2.0/`;
  }
  else if (data.license === "Apache License 2.0") {
    data.badge = '[![badge]("https://img.shields.io/badge/License-apache--2.0-green")]("https://choosealicense.com/licenses/apache-2.0/")';
    data.licenseLink = `## License
  
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/apache-2.0/`
  }
  else if (data.license === "MIT License") {
    data.badge = '[![badge](https://img.shields.io/badge/License-mit-red)](https://choosealicense.com/licenses/mit/)';
    data.licenseLink = `## License
  
    For more information about the license that was used, follow the link below!

    https://choosealicense.com/licenses/mit/`
  }
  else (data.badge = "", data.licenseLink = "");

  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ${data.badge}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
     ![-YOUR PROJECT NAME](-LINK TO YOUR SCREENSHOT-)
  
  ## Credits
  
  ${data.contribution}
  
  ## Questions
  
  If you have any further questions, or would like to get ahold of me, contact me below!
  
  * GitHub: [${data.username}](https://github.com/${data.username})
  
  * Email: ${data.email}
  
  ${data.licenseLink}
  ---
  `
};

module.exports = generateMarkdown;
