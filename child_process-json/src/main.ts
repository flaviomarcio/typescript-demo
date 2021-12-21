//reference
//https://nodejs.org/api/child_process.html

function list(){
    const { exec } = require("child_process");    
    exec("ls -l | jq -R '[.]' | jq -s -c 'add'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        let outputList=JSON.parse(stdout);
        for(let row of outputList){
            console.log(row)
        }
        return [];
    });
    return [];
}


function start(){
    list()
}

start();