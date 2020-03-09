const {pwd} = require('./pwd')
const {ls} = require('./ls')
const {cat} = require('./cat')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    if (cmd.split(' ')[0] === `pwd`) {
        pwd(data)
    }
    if (cmd.split(' ')[0] === `ls`)    ls(data);
    // if (cmd.split(' ')[0] === `cat`)    cat();

    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt > ')

})

