// import chalk from "chalk";
import random from "random";

// console.log(chalk.red("Hello World, I'm red!"));
// console.log(chalk.bgBlue("Hello World, My background is Blue!"));
// console.log(chalk.inverse("Hello World, I'm inverse"));
// console.log(chalk.italic("Hello World, I'm italic!"));

// console.log(
//   chalk.bold.underline("Hello World, I'm underlined and BOLD!.. ") +
//     chalk.dim.overline("but it's all just an act. I'm quite shy really")
// );

const number = document.createElement("p");
number.textContent = random.int(1, 100);
document.body.appendChild(number);
