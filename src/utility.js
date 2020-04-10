// return an integer less than max + 1
export function getRandomInt(max, min = 1) {
  if (max < min) return null;
  if (max === min) return max;
  let res = Math.floor(Math.random() * Math.floor(max) + 1);
  if (res < min) {
    res = getRandomInt(max, min);
  }

  return res;
}

// retrun {a: 5, b: 10, op1: 1 or 2]
export function getTwoNumbers(max) {
  const op1 = getRandomInt(2);
  const sum01 = getRandomInt(max, 20);
  const a = getRandomInt(sum01 - 1);
  const b = sum01 - a;

  if (b < 10) {
    return getTwoNumbers(max);
  }

  if (op1 === 1) {
    return {
      a,
      b,
      op1,
    };
  } else {
    return {
      a: sum01,
      b,
      op1,
    };
  }
}

// retrun {a: 5, b: 10, op1: 1]
export function getTwoNumbersPlus(max) {
  const op1 = 1;
  const sum01 = getRandomInt(max, 20);
  const a = getRandomInt(sum01 - 1);
  const b = sum01 - a;

  if (max > 20 && b < 10) {
    return getTwoNumbersPlus(max);
  }

  return {
    a,
    b,
    op1,
  };
}

// retrun {a: 5, b: 10, op1: 2]
export function getTwoNumbersMinus(max) {
  const op1 = 2;
  const sum01 = getRandomInt(max, 20);
  const a = getRandomInt(sum01 - 1);
  const b = sum01 - a;

  if (max > 20 && b < 10) {
    return getTwoNumbersMinus(max);
  }

  return {
    a: sum01,
    b,
    op1,
  };
}

export const OPTIONS_TYPE = [
  { value: "1", label: "加法" },
  { value: "2", label: "减法" },
  { value: "3", label: "连加" },
  { value: "4", label: "连减" },
  { value: "5", label: "加减混合" },
];

export const createExercises = (noPerPage, numMax, funcExercise) => {
  let tableContent01 = [];
  // exercise loop
  for (let i = 0; i < noPerPage; i++) {
    tableContent01.push(funcExercise(numMax));
  }

  return tableContent01;
};

export const getTypeFunc = (type01) => {
  let func01;
  switch (type01) {
    case "1": {
      func01 = getTwoNumbersPlus;
      break;
    }
    case "2": {
      func01 = getTwoNumbersMinus;
      break;
    }
    default: {
      func01 = getTwoNumbers;
      break;
    }
  }
  return func01;
};
