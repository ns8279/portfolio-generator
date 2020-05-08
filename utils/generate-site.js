const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if err then reject the
            if (err) {
                reject(err);
                return;
            }
            //if everything went well, response the outputwith resolve
            resolve ({
                ok: true,
                message: 'File Created!'
            });               
        });           
    });
};


//Promise to copy the style sheet file

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //if error then reject the copy
            if(err) {
                reject(err);
                return;
            }
            //if everything goes well then resolve
            resolve({
                ok:true,
                message: 'File copied successfully'
            });
        });
    });         
}

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};