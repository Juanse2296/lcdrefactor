import { result, message } from "./middlewares/consoleMessage";
import { addDigit } from "./digitStructure";
import { generateSegment, addLine } from "./digitCompose";
import { isNumeric } from "./helpers";

export const generateDigitsToPrint = ({ digitSize, numberToPrint }, digitSpace) => {
  let pivotX = 0;
  let rowsDigitNumber = 2 * digitSize + 3;
  let columDigitNumber = digitSize + 2;
  let totalRows = rowsDigitNumber;
  let totalColumns =
    columDigitNumber * numberToPrint.length + digitSpace * numberToPrint.length;
  let matrixToPrint = [];
  let arrayOfDigits = numberToPrint.split("");
  let fixedPositions = {
    one: {},
    two: {},
    three: {},
    four: {},
    five: {}
  };
  matrixToPrint = Array(totalRows)
  .fill()
  .map(() => Array(totalColumns).fill(" "));

    arrayOfDigits.forEach(digit => {
      if (!isNumeric(digit)) {
        throw new Error(`Caracter ${digit} no es un digito"`);
      }
      let parseDigit = parseFloat(digit);
      fixedPositions.one = { optionA: 0, optionB: 0 + pivotX };
      fixedPositions.two = { optionA: rowsDigitNumber / 2, optionB: 0 + pivotX};
      fixedPositions.three = { optionA: rowsDigitNumber - 1, optionB: 0 + pivotX};
      fixedPositions.four = { optionA: columDigitNumber - 1, optionB: rowsDigitNumber / 2 + pivotX};
      fixedPositions.five = { optionA: 0, optionB: columDigitNumber - 1 + pivotX};
      pivotX += columDigitNumber + digitSpace;
      let segmentList = addDigit(parseDigit);
      segmentList.forEach(segment => {
        const segmentGenerated = generateSegment(segment, fixedPositions);
        addLine(matrixToPrint, segmentGenerated, digitSize);
      });
    });
   return { matrixToPrint, totalRows, totalColumns }
};

export const printResult = ({matrixToPrint, totalRows, totalColumns}) => {
  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < totalColumns; j++) {
      process.stdout.write(result(matrixToPrint[i][j]));
    }
    console.log();
  }
};
