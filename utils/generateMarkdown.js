const fs = require('fs');
const renderLicenseBadge = (license) => {
  if (!license) {
    return ""
  } else if (license = "MIT") {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  } else if (license = "GNU GPLv3") {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
  } else {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  }
}

const renderLicenseLink = (license) => {
  if (!license) {
    return ""
  } else {
    return license
  }
}
const fullLicense = (license) => {
  if (license = "MIT") {
    return 'MIT'
  } else if (license = "GNU GPLv3") {
    return 'GNU'
  } else {
    return 'APACHE'
  }
}

const renderLicenseSection = (license, link) => {
  if (!license) {
    return ""
  } else {
    return `
    ## License
    This application is covered under the [${renderLicenseLink(link)}](${fullLicense(link)})
    `;
  }
}

module.exports = response => {
  const { firstname, lastname, github, email, linkedin, projectname, url, license, includeLicense, languages, purpose, additional, usage, testing, contribute } = response
  return `
  # ${projectname}
  ${renderLicenseBadge(license)}
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Tests](#Tests)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  * [Credits](#Credits)

  ## Description
  ${projectname} is an application designed to ${purpose} The languages used to build this application are ${languages.slice(0, -1).join(', ')}, and ${languages.slice(-1)}. ${additional}

  ## Usage
  ${usage}

  ## Installation
  No installation required, access the application at the live URL via this link: ${url} 

  ${renderLicenseSection(includeLicense, license)}

  ## Tests
  ${testing}

  ## Contributing
  ${contribute}

  ## Questions
  If you have any questions about this project, please contact me via my GitHub or email: https://github.com/${github} | ${email}

  ## Credits
  This project was created solely by ${firstname} ${lastname}: ${linkedin}
    `;
};
