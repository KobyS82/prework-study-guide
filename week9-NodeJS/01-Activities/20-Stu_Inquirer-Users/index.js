const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'Input',
        message: "What is your name?",
        name: "Name"
    },
    {
        type: 'checkbox',
        message: "What languages do you know?",
        name: "language",
        choices: [
            "html",
            "CSS",
            "JS",
            "SQL"
        ]
    },
    {
        type: 'Input',
        message: "What is your preferred method of communication?",
        name: "communication"
    }
];

inquirer.prompt(questions).then(answers => {
    fs.writeFile('answers.json', JSON.stringify(answers), (error) => {
        return error ? console.error(error) : console.log('File written successfully');
    })
});
