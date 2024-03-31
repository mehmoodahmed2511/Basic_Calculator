//BASIC CALCULATOR
console.log("---BASIC CALCULATOR---");
import inquirer from "inquirer";
while (true) {
    let operations = await inquirer.prompt([{
            message: "\nSelect an operation which you want to perform",
            type: "list",
            name: "operations",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            message: "Enter first number",
            type: "number",
            name: "num1",
        },
        {
            message: "Enter second number",
            type: "number",
            name: "num2",
        },
    ]);
    if (operations.operations == "Addition") {
        console.log(operations.num1, " + ", operations.num2, "=", operations.num1 + operations.num2);
    }
    else if (operations.operations == "Subtraction") {
        console.log(operations.num1, " - ", operations.num2, "=", operations.num1 - operations.num2);
    }
    else if (operations.operations == "Multiplication") {
        console.log(operations.num1, " * ", operations.num2, "=", operations.num1 * operations.num2);
    }
    else if (operations.operations == "Division") {
        console.log(operations.num1, " / ", operations.num2, "=", operations.num1 / operations.num2);
    }
    let again = await inquirer.prompt([
        {
            message: "\nDo you want to perform another operation?",
            type: "list",
            name: "again",
            choices: ["Yes", "No"]
        }
    ]);
    if (again.again == "No") {
        console.log("\nThankyou for using this calculator\n\nAuthor: Muhammad Mehmood Ahmed, from Pakistan");
        break;
    }
}
