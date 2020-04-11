// return an integer less than max + 1
export function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

// retrun {a: 5, b: 10, op1: 1 or 2]
export function getTwoNumbers(max) {
  const op1 = getRandomInt(1, 2);
  if (op1 === 1) return getTwoNumbersPlus(max);
  else if (op1 === 2) return getTwoNumbersMinus(max);
}

// retrun {a: 5, b: 10, op1: 1]
export function getTwoNumbersPlus(max) {
  const op1 = 1;
  const sum01 = getRandomInt(20, max);
  const a = getRandomInt(1, sum01 - 1);
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
  const sum01 = getRandomInt(20, max);
  const a = getRandomInt(1, sum01 - 1);
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

// retrun {a: 5, b: 10, op1: 1]
export function getTwoNumbersMulti01() {
  const op1 = 3;
  const a = getRandomInt(1, 9);
  const b = getRandomInt(1, 9);

  return {
    a,
    b,
    op1,
  };
}

export const OPTIONS_TYPE = [
  { value: "0", label: "加减法" },
  { value: "1", label: "加法" },
  { value: "2", label: "减法" },
  { value: "3", label: "连加" },
  { value: "4", label: "连减" },
  { value: "5", label: "加减混合" },
  { value: "6", label: "乘法口诀" },
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
    case "0": {
      func01 = getTwoNumbers;
      break;
    }
    case "1": {
      func01 = getTwoNumbersPlus;
      break;
    }
    case "2": {
      func01 = getTwoNumbersMinus;
      break;
    }
    case "6": {
      func01 = getTwoNumbersMulti01;
      break;
    }
    default: {
      func01 = getTwoNumbers;
      break;
    }
  }
  return func01;
};

export const getTitle = (scope, type) => {
  let title;
  if (!type || type.length === 0 || type.length > 1) {
    return "口算练习题";
  }

  let typeValue = type[0].value;
  let typeLabel = type[0].label;
  switch (typeValue) {
    case "6":
      title = `${typeLabel}口算练习题`;
      break;

    default:
      title = `${scope}以内${typeLabel}口算练习题`;
      break;
  }
  return title;
};
