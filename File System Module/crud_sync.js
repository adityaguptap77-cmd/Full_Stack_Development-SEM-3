//CRUD
//Sync
//Async
// -->Callback based method
// -->Promises based method
import fs from 'fs'
//Create the file using fs module
fs.writeFileSync("notes.txt", "Hello")
//Read the file
const data = fs.readFileSync("notes.txt","utf8")
console.log("Data:",data);
//Update the file
fs.appendFileSync("notes.txt","Hello World")
//Delete the file
fs.rmSync("notes.txt")
