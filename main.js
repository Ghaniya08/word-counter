#! /usr/bin/env node
import inquirer from "inquirer";
let question = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence or a paragraph that you want to count the words:"
    }
]);
let words = question.sentence.trim().split(" ");
console.log("Sentence words :");
console.log(words);
console.log(`Total words are: ${words.length}`);
