const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// Questions for the user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        // validate: titleinput => {
        //     if (titleInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter the title of your project");
        //     }
        // }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a breif description of your project?",
        // validate: decriptioninput => {
        //     if (descriptionInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter a breif description of your project");
        //     }
        // }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions in order to run your application",
        // validate: installationinput => {
        //     if (installationInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter installation instructions in order to run your application");
        //     }
        // }
    },
    {
        type: "input",
        name: "usage",
        message: "What are the steps to use your project properly?",
        // validate: usageinput => {
        //     if (usageInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter the steps to use your project properly");
        //     }
        // }
    },
    {
        type: "input",
        name: "contributers",
        message: "Has there been any contributers on this project? If so state them here, if not state no contributers",
        // validate: contributersinput => {
        //     if (contributersInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter if there have been any contributers");
        //     }
        // }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        // validate: decriptioninput => {
        //     if (descriptionInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter your email");
        //     }
        // }
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?",
        // validate: decriptioninput => {
        //     if (descriptionInput) {
        //         return true;
        //     } else {
        //         console.log ("Please enter your GitHub username");
        //     }
        // }
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license that was used for this project",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
            "No License Used"
        ],
    },
]

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})