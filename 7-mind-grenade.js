const names = require('./4-name');
const sayHo = (name) => {
    console.log(`hello ${name}`)
}
console.log(names)


const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`this system uptime is ${os.uptime()} seconds`)