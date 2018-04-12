import { filterItems } from "./helpers";

const segmentArray = [1, 2, 3, 4, 5, 6, 7];

export const addDigit = number => {
  switch (number) {
    case 1:
      return filterItems([1, 2, 5, 6, 7], segmentArray);
    case 2:
      return filterItems([1, 4], segmentArray);
    case 3:
      return filterItems([1, 2], segmentArray);
    case 4:
      return filterItems([2, 5, 7], segmentArray);
    case 5:
      return filterItems([2, 3], segmentArray);
    case 6:
      return filterItems([3], segmentArray);
    case 7:
      return filterItems([1, 2, 6, 7], segmentArray);
    case 8:
      return segmentArray;
    case 9:
      return filterItems([2], segmentArray);
    case 0:
      return filterItems([6], segmentArray);
    default:
      break;
  }
};
