//Functional Code
const printProfile = (obj) => {
  console.log(`${obj.name} enjoys listening to ${obj.listen} while ${obj.activity}, shoving back ${obj.eat} during ${obj.meal}, prefers ${obj.sport} over any other sport and is amazing at ${obj.power}.`);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questions = ['What\'s your name? Nicknames are also acceptable! ', 'What\'s an activity you like doing? ', 'What do you listen to while doing that? ', 'Which meal is your favourite (eg: dinner, brunch, etc.) ', 'What\'s your favourite thing to eat for that meal? ', 'Which sport is your absolute favourite? ', 'What is your superpower? In a few words, tell us what you are amazing at! '];

let person = {};


rl.question(questions[0], (answer) => {
  console.log(`Thank you.`);
  person.name = answer;
  rl.question(questions[1], (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you.`);
    person.activity = answer;
    rl.question(questions[2], (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you.`);
      person.listen = answer;
      rl.question(questions[3], (answer) => {
        console.log(`Thank you.`);
        person.meal = answer;

        rl.question(questions[4], (answer) => {
          // TODO: Log the answer in a database
          console.log(`Thank you.`);
          person.eat = answer;
          rl.question(questions[5], (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you.`);
            person.sport = answer;
            rl.question(questions[6], (answer) => {
              // TODO: Log the answer in a database
              console.log(`Thank you.`);
              person.power = answer;
              rl.close();
              printProfile(person);
            })
          })
        })
      })
    })
  })
});