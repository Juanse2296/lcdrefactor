import { isNumeric, isEmpty, isNumber  } from '../helpers';

export const getParameters = command => {
  if (!command.includes(",")) {
    throw new Error(`Cadena ${command} no contiene caracter ,`);
  }
  return command.split(",").map((item) => item.trim());
};

export const validateParameters = (parameters, command) => {
  if (parameters.length > 2) {
    throw new Error(`Cadena ${command} contiene más caracter ,`);
  }
  if (parameters.length < 2) {
    throw new Error(`Cadena ${command} no contiene los parametros requeridos`);
  }
  return true;
};

export const getDigitSize = commandParameter => {
  if (isNumeric(commandParameter)) {
    return parseFloat(commandParameter);
  } else {
    throw new Error(`Parametro Size [ ${commandParameter} ] no es un numero`);
  }
};

export const validateDigitSize = digitSize => {
  if (digitSize < 1 || digitSize > 10) {
    throw new Error(
      "El parametro size [" + digitSize + "] debe estar entre 1 y 10"
    );
  }
  return true;
};

export const getDigitSpace = answer => {
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
