const fs = require('fs');
const inquirer = require('inquirer');
const prompts = require('./package-lock.json');
const { drawLogo } = require('./package.json');

// Creates logo.svg file
const writeToFile = function(name, logo) {
    fs.writeFile(`${name}_logo.svg`, logo, (err) => err ? console.error('error creating file') : console.log(`Just made ${name}_logo.svg`))
}

// Initialization function
const init = () => {
    inquirer
        .prompt(prompts)
        .then((answers) => {
            const logo = Logo(answers);
            writeToFile(answers.text, logo);
        })
}

init();