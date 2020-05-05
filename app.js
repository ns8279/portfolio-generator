const fs = require('fs'); //require the FileSystem Module to be able to create an html file
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

// console.log(name, github);
// console.log(generatePage(name, github)); 
fs.writeFile('index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);
    console.log('Portfolio complete! Checkout index.html to see the output!');
});



