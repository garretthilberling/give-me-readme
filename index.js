// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: 'What is first name?'
},
{
  type: 'input',
  name: 'lastName',
  message: 'What is your last name?'
},
{
  type: 'input',
  name: 'github',
  message: 'What is your github username?'
},
{
  type: 'input',
  name: 'linkedin',
  message: 'Paste the link to your LinkedIn profile.'
},
{
  type: 'input',
  name: 'projectname',
  message: 'What is the name of this project?'
},
{
  type: 'input',
  name: 'lastName',
  message: 'Paste the link to the deployed URL of this application.'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('yourREADME.MD', generatePage(fileName, data), err => {
        if (err) throw err;
        console.log('README is complete! Check out yourREADME.MD to see the output!');
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
