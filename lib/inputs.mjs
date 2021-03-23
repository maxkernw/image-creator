import inquirer from 'inquirer';

const questions = [
    {
        name: 'format',
        type: 'list',
        message: 'Select format',
        choices: [
            'webp',
            'png',
            'tiff',
            'jpeg',
            'avif'
        ]
    },
    {
        name: 'width',
        type: 'input',
        message: 'Enter width',
        validate: value => parseInt(value) > 0 ? true : 'Enter width'
    },
    {
        name: 'height',
        type: 'input',
        message: 'Enter height',
        validate: value => parseInt(value) > 0 ? true : 'Enter height'
    }
];

export function getData() {
    return inquirer.prompt(questions);
}