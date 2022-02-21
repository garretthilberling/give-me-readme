const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = () => {
  return inquirer 
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
      name: 'usage',
      message: "Write a sentences or two to explain how to use the application."
    },
    {
      type: 'input',
      name: 'testing',
      message: "Write a sentence or two describing how to test your application."
    },
    {
      type: 'input',
      name: 'contribute',
      message: "Write a sentence or two describing how other devs can contribute to your project."
    }
    ])
    // .then(answers => console.log(answers));
}

const writeFile = answerData => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', answerData, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

function init() {
  console.log("Hello, welcome to Give Me README!")
  console.log("Answer the following questions to generate your project's professional README.")
  questions()
  .then(answerData => {
    return generateMarkdown(answerData);
  })
  .then(genREADME => {
    return writeFile(genREADME)
  })
  .catch(err => {
    console.log(err);
  });
}

init()