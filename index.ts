#! /usr/bin/env node
import inquier from 'inquirer';
import chalk from 'chalk';

console.log(chalk.blue.bold("\n \t WELLCOME TO CODE WITH MUJAHID - CURRENCY CONVERTOR \n"))

const exchange_rate: any = {
    USD: 1,
    EUR: 0.91,
    DHM: 3.5,
    INR: 74.57,
    PKR: 277.7,
    JYP: 113,
    CAD: 1.3,
    AUD: 1.65,

};

let user_answer = await inquier.prompt([
    
    {
        name:'from_currency',
        message:chalk.green("Enter From Currency"),
        type:'list',
        choices: ['USD','EUR','DHM','INR','PKR','JYP','CAD','AUD']
    },
    {
        name:'to_currency',
        message:chalk.green("Enter To Currency"),
        type:'list',
        choices: ['USD','EUR','DHM','INR','PKR','JYP','CAD','AUD']
    },
    {
        name:'amount',
        message:chalk.magentaBright("Enter Your Amount to Convert"),
        type:'number',
        
    }
]);

let fromAmount = exchange_rate [user_answer.from_currency]
let toAmount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.red(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`));

