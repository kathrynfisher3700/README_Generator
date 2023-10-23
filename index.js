const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'first',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is a fun fact about you?',
      name: 'funFact',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn username or link?',
      name: 'linkedIn',
    },
  ])
  .then((response) => {
    const {name, location, funFact, linkedIn} = response
    fs.writeFile('README.md', 
    "example"

    , (err) => err ? console.error(err) : console.log('Thank You!'))
  }
  );
  