/*
Writable: streams to which data can be written (for example, fs.createWriteStream()).
Readable: streams from which data can be read (for example, fs.createReadStream()).
Duplex: streams that are both Readable and Writable (for example, net.Socket).
Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).
*/

const {writeFileSync} =  require("fs")
// for(let i = 0;i<1000;i++){
//     writeFileSync("./content/big.txt",`hello world ${i}\n`,{flag : 'a'})
// }

const {createReadStream} =  require("fs")

const stream  =  createReadStream('./content/big.txt','utf-8')

stream.on('data', (res) =>{
    console.log(res)
})

stream.on('error' , (err) =>{
    console.log(err)
})
