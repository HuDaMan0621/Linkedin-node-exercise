const fs = require("fs");

fs.readFile("./assets/alex.jpg", (err, img) => {

    if (err) {

        console.log (`AN err has occured: ${err.message}`);
        process.exit();
    }

    console.log("file contents read");
    console.log(img);
});

