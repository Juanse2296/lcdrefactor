export const addDigit = number => {
  let segmentList = [];
  switch (number) {
    case 1:
      segmentList.push(3);
      segmentList.push(4);
      break;
    case 2:
      segmentList.push(5);
      segmentList.push(3);
      segmentList.push(6);
      segmentList.push(2);
      segmentList.push(7);
      break;
    case 3:
      segmentList.push(5);
      segmentList.push(3);
      segmentList.push(6);
      segmentList.push(4);
      segmentList.push(7);
      break;
    case 4:
      segmentList.push(1);
      segmentList.push(6);
      segmentList.push(3);
      segmentList.push(4);
      break;
    case 5:
      segmentList.push(5);
      segmentList.push(1);
      segmentList.push(6);
      segmentList.push(4);
      segmentList.push(7);
      break;
    case 6:
      segmentList.push(5);
      segmentList.push(1);
      segmentList.push(6);
      segmentList.push(2);
      segmentList.push(7);
      segmentList.push(4);
      break;
    case 7:
      segmentList.push(5);
      segmentList.push(3);
      segmentList.push(4);
      break;
    case 8:
      segmentList.push(1);
      segmentList.push(2);
      segmentList.push(3);
      segmentList.push(4);
      segmentList.push(5);
      segmentList.push(6);
      segmentList.push(7);
      break;
    case 9:
      segmentList.push(1);
      segmentList.push(3);
      segmentList.push(4);
      segmentList.push(5);
      segmentList.push(6);
      segmentList.push(7);
      break;
    case 0:
      segmentList.push(1);
      segmentList.push(2);
      segmentList.push(3);
      segmentList.push(4);
      segmentList.push(5);
      segmentList.push(7);
      break;
    default:
      break;
  }

  return segmentList;
};
