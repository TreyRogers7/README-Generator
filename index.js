const inquirer = require('inquirer');
const fs = require('fs');

const question = [
    {
        name: 'name',
        type: 'input',
        message: 'What would you like to title your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Give a description of your project.',
    },
    {
        name: 'install',
        type: 'input',
        message: 'What would you like to install to run this project?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What are your usage instructions?',
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Who are your contributors?',
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter tests here',
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'Select the license you would like to use for this project.',
        choices: '',
    },
    {
        name: 'user',
        type: 'input',
        message: 'Enter your github username',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address',
    },
],

init = function() {
    inquirer
    .prompt(question)
    .then((answer) =>{
        fs.writeFile('README.md', readMe(answer), (err)=>
        err ? console.log(err) : console.log('Complete!'))
    })
}

const readMe = data =>{
    return(`# ${data.name}
    
    ###DESCRIPTION

        ${data.description}
    
    ###INSTALLATION

        ${data.install}
    
    ###USAGE

        ${data.usage}
    
    ###CONTRIBUTING

        ${data.contributors}
    
    ###TESTS

        ${data.testing}
    
    ###INFO
        GitHub: https://www.github.com/${data.user}
    
        Email Address: ${data.email}
    `)
}

init();