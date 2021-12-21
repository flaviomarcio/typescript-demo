//reference
//https://www.npmjs.com/package/prompts
//https://www.npmjs.com/package/docker-cli-js

function list_stats(){
    const { exec } = require("child_process");    
    exec("docker stats --no-stream --format '{\"blockIO\": \"{{ .BlockIO }}\",\"cpuPerc\": \"{{ .CPUPerc }}\",\"container\": \"{{ .Container }}\",\"id\": \"{{ .ID }}\",\"memPerc\": \"{{ .MemPerc }}\",\"memUsage\": \"{{ .MemUsage }}\",\"name\": \"{{ .Name }}\",\"netIO\": \"{{ .NetIO }}\",\"pids\": \"{{ .PIDs }}\"}' | jq -R -s -c 'split(\"\n\")'", (error, stdout, stderr) => {
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
            row=String(row).trim();
            if(row==='')
                continue
            let obj=JSON.parse(row);
            obj.blockIO=String(obj.blockIO).split('/');
            obj.memUsage=String(obj.memUsage).split('/');
            obj.netIO=String(obj.netIO).split('/');          
            console.log(obj);
        }
        return [];
    });
    return [];
}

function list_containers(){
    const { exec } = require("child_process");
    exec("docker ps --format '{\"containerId\":\"{{ .ID }}\", \"image\": \"{{ .Image }}\", \"names\":\"{{ .Names }}\", \"ports\": \"{{ .Ports }}\", \"status\":\"{{ .Status }}\", \"command\":{{ .Command }}}' | jq -R -s -c 'split(\"\n\")'", (error, stdout, stderr) => {
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
            row=String(row).trim();
            if(row==='')
                continue
            let obj=JSON.parse(row);
            obj.ports=String(obj.ports).split(',');
            console.log(obj);
        }
        return [];
    });
    return [];
}

function list_images(){    
    const { exec } = require("child_process");
    exec("docker image ls --format '{\"containers\" : \"{{ .Containers}}\",    \"createdAt\" : \"{{ .CreatedAt}}\",    \"createdSince\" : \"{{ .CreatedSince}}\",    \"digest\" : \"{{ .Digest}}\",    \"id\" : \"{{ .ID}}\",    \"repository\" : \"{{ .Repository}}\",    \"sharedSize\" : \"{{ .SharedSize}}\",    \"size\" : \"{{ .Size}}\",    \"tag\" : \"{{ .Tag}}\",    \"uniqueSize\" : \"{{ .UniqueSize}}\",    \"virtualSize\" : \"{{ .VirtualSize}}\"}' | jq -R -s -c 'split(\"\n\")'", (error, stdout, stderr) => {
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
            row=String(row).trim();
            if(row==='')
                continue
            let obj=JSON.parse(row);
            console.log(obj);            
        }    
    });
    return [];
}

function start(){
    list_stats()
}

start();