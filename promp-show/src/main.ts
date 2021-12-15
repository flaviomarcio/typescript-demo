//reference
//https://www.npmjs.com/package/prompts
async function showOption(){
    const prompts = require('prompts');
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Qual seu nome?',
        validate: value => value!==''
    });    
    console.log(`Olá ${response.value}`);
};

async function start(){
    showOption();
}

start();