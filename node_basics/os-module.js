
const os = require("os")

//info abt current user
const user =  os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`System uptime is ${os.uptime()} seconds`)

//info abt current OS
const currentOS =  {
    name : os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS)