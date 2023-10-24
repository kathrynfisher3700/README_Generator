const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project. What solutions does it solve?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe any installation requirements.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Describe how your application is used.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'List any contributors and sources.',
      name: 'contributions',
    },
    {
      type: 'checkbox',
      message: 'What type of licensing?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'BSD','Mozilla Public', 'other', 'none' ],
    },
    {
      type: 'input',
      message: 'List any test instructions.',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'GitHub',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },


  ])
  .then((response) => {
    const {title, description, installation, usage, contributions, license, test, GitHub, email} = response

    fs.writeFile('README.md', `
# ${title}

## Description

${description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

## Installation

${installation}

## Usage

${usage}

##  License

${license}

##  Contributing

${contributions}

##  Tests
${test}

##  Questions
[Checkout my GitHub profile here: ${GitHub}](https://github.com/${GitHub})

Have additional questions? Shoot me an email at ${email}.
    `
    , (err) => err ? console.error(err) : console.log('Thank You!'))
  }
  );
