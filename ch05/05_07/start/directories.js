const fs = require("fs");


fs.readdirSync("./storage").forEach(fileName => {  //need to remove all files in the directories first 
    fs.unlinkSync(`./storage/${fileName}`);
})

fs.rmdir("./storage", err => {

    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
})