// Function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.description}
    ## [Installation](#table-of-contents)
    ${data.installation}
    ## [Usage](#table-of-contents)
    ${data.usage}
    
    ## [Contributing](#table-of-contents)
    ${data.contributers}
    
    ## [Questions](#table-of-contents)
    Please contact me using the following links:
    [GitHub](https://github.com/${data.githubUsername})
    [Email: ${data.email}](mailto:${data.email})
  `;
  }
  
  module.exports = generateMarkdown;