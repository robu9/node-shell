const fs = require('fs');

const cat = (data) => {
    const cmd = data.toString().trim()
        fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err
            } else {
                let fileName = cmd.split(' ')[1]
                let currentFile = files.filter(el => el === fileName)



                process.stdout.write(fs.readFile(`./${fileName}`, (err, data)=> {
                    if (err) {
                        throw err
                    } else {
                        return data;
                    }
                })
                )
                process.stdout.write("prompt > ")
            }
        })    
}

module.exports = {cat}