import inquirer from "inquirer";
const Answer = await inquirer.prompt([{
        type: "number",
        name: "No1",
        message: "write your No1"
    },
    {
        type: "number",
        name: "No2",
        message: "write your No2"
    },
    {
        type: "list",
        name: "operator",
        message: "select your operator",
        choices: ["+", "-", "*", "/"]
    }
]);
let { No1, No2, operator } = Answer;
if (No1 && No2 && operator) {
    let result = 0;
    if (operator == "+") {
        result = No1 + No2;
    }
    else if (operator == "-") {
        result = No1 - No2;
    }
    else if (operator == "*") {
        result = No1 * No2;
    }
    else if (operator == "/") {
        result = No1 / No2;
    }
    {
        console.log("Your Answer is: " + result);
    }
}
else {
    console.log("please select correct Operator");
}
