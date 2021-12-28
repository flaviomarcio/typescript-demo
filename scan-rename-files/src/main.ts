//reference 
//  https://github.com/robin-rpr/Inquirer.js

const fs = require('file-system');
const prompts = require('prompts');


var staticInitialDir:String;
var staticInitialExtension:String='*.*';
var staticInitialTextReplace:String;
var staticInitialTextNew:String;
var staticInitialMode:Number;

async function renameFiles(path, ext, textReplace, textNew){
    console.log(`Scan: ${path}/${ext}}`);
    await fs.recurseSync(path, [ext],
        function(filepath, relative, filename){  
            if(relative===undefined)
                return;
            var oldPath=filepath;
            var newPath=filepath.replace(textReplace, textNew);
            fs.rename(oldPath, newPath,() => { console.log(`   >rename ${relative} to ${String(relative).replace(textReplace, textNew)}}`); });
      });
}
  
async function startRename(){

    const inputDir = [
        {
            type: 'text',
            name: 'value',
            message: 'Informe o local',
            validate: value => String(value).trim()!==''
        }
    ];

    const inputExtensionFile = [
        {
            type: 'text',
            name: 'value',
            message: 'Enter the extension files',
            initial: staticInitialExtension,
            validate: value => String(value).trim()!==''
        }
    ];   

    const inputTextReplace = [
        {
            type: 'text',
            name: 'value',
            message: 'Enter the text to replace',
            initial: staticInitialTextReplace,
            validate: value => String(value)!==''
        }
    ];

    const inputTextNew = [
        {
            type: 'text',
            name: 'value',
            initial: staticInitialTextNew,
            message: 'Enter the new text to replace',
        }
    ];   

    const inputMode = [
        {
            type: 'text',
            name: 'value',
            initial: staticInitialMode,
            message: 'Enter the new text to replace',
        }
    ];   

    const inputFinishExecution = [
        {
            type: 'confirm',
            name: 'value',
            message: 'Finish execution?',
            initial: false,
        }
    ];

    const responseDir = await prompts(inputDir);
    
    if(responseDir.value == undefined || String(responseDir.value).trim()==='')
        return;

    const responseExt = await prompts(inputExtensionFile);

    if(responseExt.value == undefined || String(responseExt.value).trim()==='')
        responseExt.value='*.*';

    const responseTextReplace = await prompts(inputTextReplace);

    if(responseTextReplace.value == undefined || String(responseTextReplace.value)==='')
        return;

    const responseTextNew = await prompts(inputTextReplace);

    staticInitialDir=responseDir.value;
    staticInitialExtension=responseExt.value;
    staticInitialTextReplace=responseTextReplace.value;
    staticInitialTextNew=responseTextNew.value;

    await renameFiles(responseDir.value, responseExt.value, responseTextReplace.value, responseTextNew.value);

    const responseFinishExecution = await prompts(inputFinishExecution);

    return responseFinishExecution.value;
};

async function start(){
    var response=false;
    do{
        response=await startRename()
    }while(response);
}

start();