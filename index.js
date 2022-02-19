// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

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
