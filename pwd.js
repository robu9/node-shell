// const pwd = process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim()
//     if (cmd === 'pwd') {
//         const path = process.mainModule.path
//         process.stdout.write(path)
//         process.stdout.write('\nprompt >')
//     }
//     }    
// )

const pwd = (data) => {
    const cmd = data.toString().trim()
    if (cmd === 'pwd') {
        const path = process.mainModule.path
        process.stdout.write(path)
        process.stdout.write('\nprompt >')
    }
}


module.exports = {pwd}