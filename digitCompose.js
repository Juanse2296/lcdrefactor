const POSICION_X = "X";
const POSICION_Y = "Y";
const CARACTER_VERTICAL = "|";
const CARACTER_HORIZONTAL = "-";

const addLine = (matrix, { optionA, optionB}, fixedPosition, digitSize, caracter) => {
  if (fixedPosition === POSICION_X) {
    for (let y = 1; y <= digitSize; y++) {
      let value = optionB + y;
     if(matrix[optionA])matrix[optionA][value] = caracter;
    }
  } else {
    for (let i = 1; i <= digitSize; i++) {
      let value = optionA + i;
      if(matrix[value])matrix[value][optionB] = caracter;
    }
  }
};

export const addDigitSegment = (
  segmentNumber,
  fixedPosition,
  digitSize,
  matrixToPrint
) => {
  switch (segmentNumber) {
    case 1:
      addLine(
        matrixToPrint,
        fixedPosition.one,
        POSICION_Y,
        digitSize,
        CARACTER_VERTICAL
      );
      break;
    case 2:
      addLine(
        matrixToPrint,
        fixedPosition.two,
        POSICION_Y,
        digitSize,
        CARACTER_VERTICAL
      );
      break;
    case 3:
      addLine(
        matrixToPrint,
        fixedPosition.five,
        POSICION_Y,
        digitSize,
        CARACTER_VERTICAL
      );
      break;
    case 4:
      addLine(
        matrixToPrint,
        fixedPosition.four,
        POSICION_Y,
        digitSize,
        CARACTER_VERTICAL
      );
      break;
    case 5:
      addLine(
        matrixToPrint,
        fixedPosition.one,
        POSICION_X,
        digitSize,
        CARACTER_HORIZONTAL
      );
      break;
    case 6:
      addLine(
        matrixToPrint,
        fixedPosition.two,
        POSICION_X,
        digitSize,
        CARACTER_HORIZONTAL
      );
      break;
    case 7:
      addLine(
        matrixToPrint,
        fixedPosition.three,
        POSICION_X,
        digitSize,
        CARACTER_HORIZONTAL
      );
      break;
    default:
      break;
  }
};
