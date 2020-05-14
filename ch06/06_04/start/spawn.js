const cp = require("child_process");

const questionAPP = cp.spawn("node", ["questions.js"]);

questionAPP.stdin.write("Ying \n");
questionAPP.stdin.write("Atlanta \n");
questionAPP.stdin.write("Change the world \n");


questionAPP.stdout.on("data", data => {
    console.log (`from the question app: ${data}`);
});

questionAPP.on("close", () => {
    console.log(`questionApp process exited`);
});