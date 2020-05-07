//const fs = require('fs'); //require the FileSystem Module to be able to create an html file
//const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;

// console.log(name, github);
// console.log(generatePage(name, github)); 
// fs.writeFile('index.html', generatePage(name, github), err => {
//     if(err) throw new Error(err);
//     console.log('Portfolio complete! Checkout index.html to see the output!');
// });

const inquirer = require ('inquirer');
//console.log(inquirer);
const promptUser = () => {
   return inquirer    
     .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter your name!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username(Required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;
                }else {
                    console.log('Please enter your Github USername!');
                    return false;
                }
            }
        },
        
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for the About section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => confirmAbout
        }

    ]);
    
};

//promptUser().then(answers => console.log(answers));

//Project Questions
const promptProject = portfolioData => {
    //if there are no projects

    if(!portfolioData.projects){
        portfolioData.projects = [];
    }

    console.log (`
     =======================
     Add a New Project
     ======================= 

        `
    );
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?(Required)',
            validate: projectName => {
                if(projectName) {
                    return true;
                }else {
                    console.log('Please enter your Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)',
            validate: projectDescription => {
                if(projectDescription) {
                    return true;
                }else {
                    console.log('Please enter your Proejct Description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages did you use? (Check all that applies)',
            choices: ['Javascript', 'HTML', 'CSS' , 'Node.js', 'jQuery', 'Bootstrap', 'ES6']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your Github Link. (Required)',
            validate: githubLink => {
                if(githubLink) {
                    return true;
                }else {
                    console.log('Please enter your Github Link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another project',
            default: false
        }

    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }else {
            return portfolioData;
        }
    })

};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    })
    



