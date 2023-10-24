const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

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
      type: 'input',
      message: 'What type of licensing?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'List any test instructions.',
      name: 'test',
    },


  ])
  .then((response) => {
    const {title, description, installation, usage, contributions, license, test} = response

    fs.writeFile('README.md', 
    `# ${title}

    ## Description
    ${description}

    ## Table of Contents
      [Installation](installation)
      [Usage](usage)
      [License](license)
      [Contributing](contributing)
      [Tests](tests)
      
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    ##License
    ${license}
    ##Contributing
    ${contributions}
    #Tests
    ${test}
    ##Questions
    
    
    `

    , (err) => err ? console.error(err) : console.log('Thank You!'))
  }
  );

  function init() {}

// Function call to initialize app
init();
  