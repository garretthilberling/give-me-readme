// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  inquirer 
    .prompt([
      {
        type: 'input',
        name: 'firstname',
        message: 'What is your first name?'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'What is your last name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username? (case sensitive)'
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
      name: 'url',
      message: 'Paste the link to the deployed URL of this application.'
    },
    {
      type: 'confirm',
      name: 'includeLicense',
      message: 'Would you like to include a license to this application?',
      default: true
    }, //if "no" then all license related questions will be skipped. 
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for this application.',
      choices: ['MIT License', 'GNU GPLv3 License', 'Apache License'],
      when: ({ includeLicense }) => {
        if (includeLicense) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What languages were used for this application?',
      choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Node.js', 'ES6', 'BootStrap', 'Tailwind']
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'Finish the following sentence: "This application was designed to..."'
    },
    {
      type: 'input',
      name: 'additional',
      message: "Write a few sentences to provide any other additional information on your application."
    },
    {
      type: 'input',
      name: 'testing',
      message: "Write a sentence or two describing how to test your application."
    }
    ])
    .then(answers => console.log(answers));
}

// TODO: Create a function to write README file
function writeToFile(answerData) {
  const readmeGen = generateMarkdown(answerData);

  fs.writeFile('./dist/README.MD', readmeGen, err => {
    if (err) throw new Error(err);

    console.log('README created! Check out the README.md located in the dist folder to see the result!');
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Hello, welcome to Give Me README!")
  console.log("Answer the following questions to generate your project's professional README.")
  questions();
}

// Function call to initialize app
init()
.then(data => {
  return generateMarkdown(data);
})
.then(write => {
  writeToFile(write)
});