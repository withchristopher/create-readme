// Generate markdown for README

// function for badge generation
function generateBadge(license) {
    return `![](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)`;
}

// function to generate the readme
function generateMarkdown(data) {
    return `
# Title 
${data.titleName}

${generateBadge(data.license)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
${data.license}

## Questions
My GitHub Username is: ${data.githubName}, with a link to my page: https://github.com/${data.githubName} <br>
My email is ${data.email} <br>
`;
};

module.exports = generateMarkdown;