
import { isNumeric } from "./helpers";
import { error } from './middlewares/consoleMessage';
import {
  getParameters,
  validateParameters,
  getDigitSize,
  validateDigitSize
} from "./middlewares/commandMiddleware";
import { printNumber } from "./impresorLCD";

export const processCommand = command => {
  try {
    let commandParameters = getParameters(command);
    validateParameters(commandParameters, command);
    let digitSize = getDigitSize(commandParameters[0]);
    validateDigitSize(digitSize);
    return { digitSize, numberToPrint: commandParameters[1] };
  } catch (err) {
    console.error(error("Error: ", err.message));
  }
};

export const processAllTheCommands = (commandsList, digitSpace) => {
  commandsList.forEach(command => {
    try {
      const processResult = processCommand(command);
      printNumber(processResult, digitSpace);
    } catch (err) {
      console.error(error("Error: ", err.message));
    }
  });
};
