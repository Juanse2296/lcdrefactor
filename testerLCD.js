import { message, notify, error } from './src/middlewares/consoleMessage';
import { askForInformation } from "./src/comandLineReader";
import { processAllTheCommands } from "./src/processCommand";
import { isEmpty, isNumber } from "./src/helpers";
import { getDigitSpace } from "./src/middlewares/commandMiddleware";

const app = async () => {
  try {
    console.log(message("Iniciando app.."));

    let processCommands = "";
    const finishProcessCommands = "0,0";
    let commandsList = [];

    const answer = await askForInformation("Espacio entre Digitos (0 a 5): ");
    const digitSpace = getDigitSpace(answer);
    
    do {
      processCommands = await askForInformation("Entrada: ");
      if (processCommands !== finishProcessCommands)
        commandsList.push(processCommands);
    } while (processCommands !== finishProcessCommands);

    console.log(notify("lista de comandos: ", commandsList));
    processAllTheCommands(commandsList, digitSpace);
    console.log(message('Terminado, intenta de nuevo :)'));
    process.exit();
  } catch (err) {
    console.error(error("Error: ", err.message));
  }
};

app();
