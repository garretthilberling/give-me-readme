// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    return ""
  } else {
    return license
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
const generatePage = (data) => {
  return `
    # ${data.projectname}

    ${renderLicenseBadge(data)}

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
    ${data.projectname} is an application designed to ${data.purpose}. The languages used to build this application are ${data.languages}. ${data.additional}

    ## Usage
    ${data.usage}

    ## Installation
    No installation required, access the application at the live URL via this link: ${data.url} 

    ${renderLicenseSection(data.includeLicense, data.license)}

    ## Tests
    ${data.testing}

    ## Contributing
    ${data.contribute}

    ## Questions
    If you have any questions about this project, please contact me via my GitHub: https://github.com/${data.github}

    ## Credits
    This project was created solely by ${data.firstname} ${data.lastname}: ${data.linkedin}
    `;
};

module.exports = generateMarkdown;
