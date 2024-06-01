#! /usr/bin/env node

// importing inquirer and chalk packages
import inquirer from "inquirer"
import chalk from "chalk"

// Display a colourfull welcome message 
console.log(chalk.italic.bold.cyanBright("\n \t\tCode with Amna -- Word Counter"))
console.log("=".repeat(60))

//prompt the user to enter a sentance

let answer=await inquirer.prompt([
    {
        name : "sentance",
        type : "input",
        message : "Enter a sentance."
    }
]);
// Trimming the sentence and splitting it in words based on "spaces"

let words = answer.sentance.trim().split(" ");

// Analysis of userinput sentance

console.log("=".repeat(60))
console.log(chalk.bold("Sentance Words:"))
console.log(words)
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`))
console.log("=".repeat(60))
