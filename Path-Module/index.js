// Path Module 

import path from "path";

// console.log(path.dirname("c:\\nodejs\\index.js"))

// console.log(path.basename("c:\\nodejs\\index.js"))
// console.log(path.basename("c:\\nodejs\\app.js", ".js"))


// Extention files


// console.log(path.extname("c:\\nodejs\\index.js"))
// console.log(path.join("c:", "Dev-webdev", "courses" , "redux-toolit"))
// Go up a level 
// console.log(path.join("c:", "Dev-webdev", "courses" , "redux-toolit",".."))
// console.log(path.join("c:", "Dev-webdev", "courses" , "redux-toolit","..",".."))


// console.log(path.normalize("c:\\courses\\redux\\store\\features\\"));

// console.log(path.parse("c:\\nodejs\\course\\index.js"))
// console.log(path.parse("c:\\nodejs\\course\\index.js").base)
console.log(path.parse("c:\\nodejs\\course\\index.js").ext)