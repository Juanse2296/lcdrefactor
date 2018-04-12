const POSICION_X = "X";
const POSICION_Y = "Y";

export const addLine = (matrix, { fixedPosition, orientation }, digitSize) => {
  const CARACTER_VERTICAL = "|";
  const CARACTER_HORIZONTAL = "-";
  for (let i = 1; i <= digitSize; i++) {
    let value = {};
    if (orientation === POSICION_X) {
      value = Math.trunc(fixedPosition.optionB) + i;
      matrix[Math.trunc(fixedPosition.optionA)][value] = CARACTER_HORIZONTAL;
    } else {
      value = Math.trunc(fixedPosition.optionA) + i;
      matrix[value][Math.trunc(fixedPosition.optionB)] = CARACTER_VERTICAL;
    }
  }
};

export const generateSegment = (segmentNumber, fixedPosition) => {
  switch (segmentNumber) {
    case 1:
      return {
        fixedPosition: fixedPosition.one,
        orientation: POSICION_Y
      };
    case 2:
      return {
        fixedPosition: fixedPosition.two,
        orientation: POSICION_Y
      };
    case 3:
      return {
        fixedPosition: fixedPosition.five,
        orientation: POSICION_Y
      };
    case 4:
      return {
        fixedPosition: fixedPosition.four,
        orientation: POSICION_Y
      };
    case 5:
      return {
        fixedPosition: fixedPosition.one,
        orientation: POSICION_X
      };

    case 6:
      return {
        fixedPosition: fixedPosition.two,
        orientation: POSICION_X
      };

    case 7:
      return {
        fixedPosition: fixedPosition.three,
        orientation: POSICION_X
      };
    default:
      break;
  }
};
