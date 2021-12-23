const prompts = require('prompts');

async function showSinglePrompt(){
    //Prompt with a single prompt object. Returns an object with the response.
    //const prompts = require('prompts');
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Qual seu nome?',
        validate: value => value!==''
    });    
    console.log(`Olá ${response.value}`);
};

async function showPasswordPrompt(){
    //Prompt with a single password prompt object. Returns an object with the response.
    //const prompts = require('prompts');
    const response = await prompts({
        type: 'password',
        name: 'value',
        message: 'Enter password?',
        validate: value => value!==''
    })
    console.log(`Olá ${response.value}`);
};

async function showPromptChain(){
    //Prompt with a list of prompt objects. Returns an object with the responses. Make sure to give each prompt a unique name property to prevent overwriting values.
    //const prompts = require('prompts');
    const questions = [
    {
        type: 'text',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'How old are you?'
    },
    {
        type: 'text',
        name: 'about',
        message: 'Tell something about yourself',
        initial: 'Why should I?'
    }
    ];

    (async () => {
        const response = await prompts(questions).then(answers => {
            console.info('Response:', answers.value);
          });
        })();
}

async function showDynamicPrompts(){
    //Prompt properties can be functions too. Prompt Objects with type set to falsy values are skipped.
    //const prompts = require('prompts');
    const questions = [
        {
            type: 'text',
            name: 'dish',
            message: 'Do you like pizza?'
        },
        {
            type: prev => prev == 'pizza' ? 'text' : null,
            name: 'topping',
            message: 'Name a topping'
        }
    ];

    (async () => {
    const response = await prompts(questions).then(answers => {
        console.info('Response:', answers.value);
      });
    })();
}


function start(){
  showDynamicPrompts();
}

start();