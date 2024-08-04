import * as fs from 'fs'


fs.mkdirSync("c:\\Nodejs\\test\\demo", {recursive: true})

// remove directory
fs.rmSync("c:\\Nodejs", {recursive: true})
