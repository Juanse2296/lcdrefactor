import readline from "readline";
import chalk from "chalk";
import { processCommand } from "./src/processCommand";
import { printNumber } from './src/impresorLCD';
import { isEmpty, isNumber } from "./src/helpers";

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const finishProcessCommands = "0,0";

let processCommands = "";

const askForInformation = question => {
  console.log(chalk.yellow(question));
  return new Promise(resolve => {
    readLineInterface.on("line", answer => resolve(answer));
  });
};

const getDigitSpace = answer => {
  if (isEmpty(answer)) {
    throw new Error("Esta vacio");
  }
  const parseAnswer = parseFloat(answer);
  if (!isNumber(parseAnswer)) {
    throw new Error("Ingrese un numero por favor!");
  }
  if (!Number.isInteger(parseAnswer)) {
    throw new Error("El comando no es un entero!");
  }
  return parseAnswer;
};

const processAllTheCommands = (commandsList, digitSpace) => {
  commandsList.forEach(command => {
    try {
      const processResult = processCommand(command);          
      printNumber(processResult, digitSpace);
    } catch (err) {
      console.error(err);
    }
  });
};

const app = async () => {
  try {
    console.log("Iniciando app..");
    const answer = await askForInformation("Espacio entre Digitos (0 a 5): ");
    const digitSpace = getDigitSpace(answer);
    let commandsList = [];
    do {
      processCommands = await askForInformation("Entrada: ");
      if (processCommands !== finishProcessCommands)
        commandsList.push(processCommands);
    } while (processCommands !== finishProcessCommands);
    console.log(chalk.magenta("lista de comandos: ", commandsList));
    processAllTheCommands(commandsList, digitSpace);
  } catch (error) {
    console.error(chalk.bgRed("Error: ", error.message));
    app();
  }
};

app();
