// function to generate markdown for README
function generateMarkdown(data) {
    return `
    #Title ${data.title}

    ${generateBadge(data.license)}

    # Table of Contents

    # Description

    # Installation

    # Usage
    ${data.usage}

    # Contribution
    ${data.contribution}

    # Tests
    ${data.tests}

    # License
    ${data.license}

    # Questions
    ${data.}
  
  `;
}

module.exports = generateMarkdown;