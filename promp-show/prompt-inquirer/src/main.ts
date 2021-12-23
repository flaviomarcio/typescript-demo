const prompts = require('prompts');
const inquirer = require('inquirer');
//reference
//https://www.npmjs.com/package/prompts
//https://github.com/robin-rpr/Inquirer.js

async function inquirerDefault(){
    
    inquirer
      .prompt([
        {
          name: 'faveReptile',
          message: 'What is your favorite reptile?',
          default: 'Alligators'
        },
      ])
      .then(answers => {
        console.info('Answer:', answers.faveReptile);
      });
}    

async function inquirerMultiple(){
    inquirer
      .prompt([
        {
          name: 'faveReptile',
          message: 'What is your favorite reptile?',
          default: 'Alligators'
        },
        {
          name: 'faveColor',
          message: 'What is your favorite color?',
          default: '#008f68'
        },
      ])
      .then(answers => {
        console.info('Answers:', answers);
      });
}

async function inquirerList(){
    
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'reptile',
          message: 'Which is better?',
          choices: ['alligator', 'crocodile'],
        },
      ])
      .then(answers => {
        console.info('Answer:', answers.reptile);
      });
}

async function inquirerRawList(){
    

    inquirer
      .prompt([
        {
          type: 'rawlist',
          name: 'reptile',
          message: 'Which is better?',
          choices: ['alligator', 'crocodile'],
        },
      ])
      .then(answers => {
        console.info('Answer:', answers.reptile);
      });
}

async function inquirerExpand(){
    

inquirer
  .prompt([
    {
      type: 'expand',
      name: 'reptile',
      message: 'Which is better?',
      choices: [
        {
          key: 'a',
          value: 'alligator',
        },
        {
          key: 'c',
          value: 'crocodile',
        },
      ],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.reptile);
  });
}

async function inquirerCheckbox(){
    

    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'reptiles',
          message: 'Which reptiles do you love?',
          choices: [
            'Alligators', 'Snakes', 'Turtles', 'Lizards',
          ],
        },
      ])
      .then(answers => {
        console.info('Answer:', answers.reptiles);
      });
}

async function inquirerPassword(){
    

    inquirer
      .prompt([
        {
          type: 'password',
          name: 'secret',
          message: 'Tell me a secret',
        },
      ])
      .then(answers => {
        // Displaying the password for debug purposes only.
        console.info('Answer:', answers.secret);
      });
}

async function inquirerEditor(){
    

    inquirer
      .prompt([
        {
          type: 'editor',
          name: 'story',
          message: 'Tell me a story, a really long one!',
        },
      ])
      .then(answers => {
        console.info('Answer:', answers.story);
      });
}

async function inquirerAutoComplet(){
    
    inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
    inquirer.prompt([{
    type: 'autocomplete',
    name: 'from',
    message: 'Select a state to travel from',
    source: function(answersSoFar, input) {
        //return myApi.searchStates(input);
        if(String(input).toLowerCase()=='a')
            return ['A','AA','AAA','AAAA'];
            if(String(input).toLowerCase()=='b')
            return ['B','BB','BBB','BBBB'];
        if(String(input).toLowerCase()=='c')
            return ['C','CC','CCC','CCCC'];
        return [];
    }
    }]).then(function(answers) {
    //etc
    });
}

async function inquirerSearchList(){
    const inquirer = require("inquirer");

    // Register plugin
    inquirer.registerPrompt("search-list", require("inquirer-search-list"));
    
    const toppings = [
      {title: "Pepperoni", usage: "Pizza"},
      {title: "Ham", usage: "Sandwich"},
      {title: "Ground Meat", usage: "BBQ"},
      {title: "Bacon", usage: "Love"},
      {title: "Bottle", usage: "Drinks"},
      {title: "Mozzarella", usage: "Pizza"},
      {title: "Rum", usage: "Party"},
    ]
    
    inquirer
        .prompt([
            {
                type: "search-list",
                message: "Select topping",
                name: "topping",
                choices: toppings.map(topping => ({name: topping.title, value: topping })),
                validate: function(answer) {
                    if (answer.name === 'Bottle') {
                        return `Whoops, ${answer.name} is not a real topping.`;
                    }
                    return true;
                }
            }
        ])
        .then(function(answers) {
            console.log(JSON.stringify(answers, null, "  "));
        })
        .catch(e => console.log(e));
}

async function inquirerSugest(){
  const inquirer = require("inquirer");
  inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
  inquirer.prompt({
    type: 'suggest',
    name: 'kittenName',
    message: 'Enter a name for your kitten:',
    suggestions: ['Oliver', 'Luna', 'Charlie', 'Bella', 'Max', 'Lucy'],
  });
}

async function inquirerFileTreeSelection(){
  const inquirer = require('inquirer')
  const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
  
  inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)
  
  inquirer
    .prompt([
      {
        type: 'file-tree-selection',
        name: 'file'
      }
    ])
    .then(answers => {
      console.log(JSON.stringify(answers))
    });
}

async function inquirerAutoSubmit(){
  
  inquirer.registerPrompt('autosubmit', require('inquirer-autosubmit-prompt'));
  
  const questions = [
    {
      type: 'autosubmit',
      name: 'first_name',
      message: 'What\'s your first name(6 characteres)',
      autoSubmit: input => input.length === 6
    }
  ];
  
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
}

async function inquirerTablePrompt(){
  
  inquirer.registerPrompt("table", require("inquirer-table-prompt"));

  inquirer
    .prompt([
      {
        type: "table",
        name: "workoutPlan",
        message: "Choose your workout plan for next week",
        columns: [
          {
            name: "Arms",
            value: "arms"
          },
          {
            name: "Legs",
            value: "legs"
          },
          {
            name: "Cardio",
            value: "cardio"
          },
          {
            name: "None",
            value: undefined
          }
        ],
        rows: [
          {
            name: "Monday",
            value: 0
          },
          {
            name: "Tuesday",
            value: 1
          },
          {
            name: "Wednesday",
            value: 2
          },
          {
            name: "Thursday",
            value: 3
          },
          {
            name: "Friday",
            value: 4
          },
          {
            name: "Saturday",
            value: 5
          },
          {
            name: "Sunday",
            value: 6
          }
        ]
      }
    ])
    .then(answers => {
      /*
      { workoutPlan:
        [ 'arms', 'legs', 'cardio', undefined, 'legs', 'arms', undefined ] }    
      */
      console.log(answers);
    });
}


// async function inquirerEmoji(){}
// {
//   //npm install --global emoj
//   inquirer.registerPrompt('emoji', require('inquirer-emoji'))
//   inquirer.prompt([
//     {
//       type: 'emoji',
//       name: 'spirit_animal',
//       message: 'Find your spirit animal emoji:'
//     }
//   ]);
// }


function start(){
  inquirerTablePrompt();
}

start();