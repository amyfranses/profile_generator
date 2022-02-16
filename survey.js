const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable.", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite?", (answer4) => {
        rl.question(
          "What's your favourite thing to eat for that meal?",
          (answer5) => {
            rl.question("What sport is your absolute favourite?", (answer6) => {
              rl.question(
                "What is your superpower? Tell us what you're amazing at in a few words.",
                (answer7) => {
                  console.log(
                    `${answer1} loves ${answer2} while listening to ${answer3}. ${answer1} loves eating ${answer5} for ${answer4}. Their favourite sport is ${answer6}. Their superpower is ${answer7}. `
                  );
                  rl.close();
                }
              );
            });
          }
        );
      });
    });
  });
});
