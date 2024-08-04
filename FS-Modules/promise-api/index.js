import * as fs from 'fs/promises';


//creating directory / Folder



// try {
//     await fs.mkdir("c:\\NodeJs\\Courses\\Redux\\Toolkit",{recursive: true});
//     console.log("Folder Created ...")
    
// } catch (error) {
    
// }


// Reading the content 

// try {
//      const files = await fs.readdir("c:\\Recovery")
//      for (const file of files) {
//         console.log(file)
        
//      }
// } catch (error) {
    
// }

// Removing folder or directory 

// try {
//     await fs.rmdir('c:\\NodeJs\\Courses')
// } catch (error) {
    
// }


// Create and write files

// try {
//     await fs.writeFile("README.md","Hello Nodejs")
// } catch (error) {
//     console.log(error)
// }


//reading a file
// try {
//     const data = await fs.readFile("README.md","utf-8")
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

// How to append file 

// try {
//     await fs.appendFile("README.md", " Nodejs is the best")
// } catch (error) {
    
// }

// Copy File

// try {
//     await fs.copyFile("README.md", "info.txt")
// } catch (error) {
    
// }

//Get File Information

try {
    const info = await fs.stat("info.txt")
    console.log(info)
    console.log(info.isDirectory())
    console.log(info.isFile())
} catch (error) {
    
}