//reference
//https://nodejs.org/api/child_process.html

const { 
    spawn,
    spawnSync, 
    exec,
    execSync, 
    execFileSync,
  } = require('child_process');


function call_exec(){    
    exec("ls -l | jq -R '[.]' | jq -s -c 'add'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(JSON.parse(stdout))
    });
    return [];
}

function call_execSync(){    
    const response=execSync("ls -l | jq -R '[.]' | jq -s -c 'add'").toString();
    return JSON.parse(response);
}

function call_spawn(){    
    const ls = spawn('ls', ['-l', '*']);    
    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    ls.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
    });
    
    ls.on('exit', (code) => {
      console.log(`child process exited with code ${code}`);
    });

}

function call_spawnSync(){    
    // const ls = spawnSync('ls', ['-l', '*']);    
    // ls.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });
    
    // ls.on('close', (code) => {
    //   console.log(`child process close all stdio with code ${code}`);
    // });
    
    // ls.on('exit', (code) => {
    //   console.log(`child process exited with code ${code}`);
    // });

}


function start(){
    call_exec()
    console.log(call_execSync());
    call_spawn()
    //console.log(call_spawnSync());    
}

start();