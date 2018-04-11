import chalk from "chalk";
import { isNumeric } from "./helpers";

const getParameters = command => {
  if (!command.includes(",")) {
    throw new Error(`Cadena ${command} no contiene caracter ,`);
  }
  return command.split(",");
};

const validateParameters = (parameters, command) => {
  if (parameters.length > 2) {
    throw new Error(`Cadena ${command} contiene más caracter ,`);
  }
  if (parameters.length < 2) {
    throw new Error(`Cadena ${command} no contiene los parametros requeridos`);
  }
};

const getDigitSize = commandParameter => {
  if (isNumeric(commandParameter)) {
    return parseFloat(commandParameter);
  } else {
    throw new Error(`Parametro Size [ ${commandParameter} ] no es un numero`);
  }
};

const validateDigitSize = digitSize => {
  if (digitSize < 1 || digitSize > 10) {
    throw new Error(
      "El parametro size [" + digitSize + "] debe estar entre 1 y 10"
    );
  }
};

export const processCommand = (command) => {
  try {
    let commandParameters = getParameters(command);
    validateParameters(commandParameters, command);
    let digitSize = getDigitSize(commandParameters[0]);
    validateDigitSize(digitSize);
    return { digitSize, numberToPrint: commandParameters[1] };
  } catch (error) {
    console.error(chalk.bgRed("Error: ", error.message));
  }
};
