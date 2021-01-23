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
  let diff;
  if (max > 20) diff = 10;
  else diff = 1;

  const sum01 = getRandomInt(Math.floor(max / 2), max);
  const a = getRandomInt(1, sum01 - diff);
  const b = sum01 - a;
  return {
    a,
    b,
    op1,
  };
}

// retrun {a: 5, b: 10, c: 25, op1: 1, op2: 1]
export function getThreeNumbersPlus(max) {
  const op1 = 1;
  const op2 = 1;

  let diff;
  if (max > 20) diff = 10;
  else diff = 1;

  const sum01 = getRandomInt(Math.floor(max / 2), max);
  const a = getRandomInt(1, sum01 - diff);
  const b = getRandomInt(1, sum01 - a - diff);
  const c = sum01 - a - b;

  return {
    a,
    b,
    c,
    op1,
    op2,
  };
}

// retrun {a: 5, b: 10, op1: 2]
export function getTwoNumbersMinus(max) {
  const op1 = 2;
  let diff;
  if (max > 20) diff = 10;
  else diff = 1;

  const sum01 = getRandomInt(Math.floor(max / 2), max);
  const a = getRandomInt(1, sum01 - diff);
  const b = sum01 - a;

  return {
    a: sum01,
    b,
    op1,
  };
}

// retrun {a: 5, b: 10, c: 25, op1: 1, op2: 1]
export function getThreeNumbersMinus(max) {
  const op1 = 2;
  const op2 = 2;

  let diff;
  if (max > 20) diff = 10;
  else diff = 1;

  const sum01 = getRandomInt(Math.floor(max / 2), max);
  const a = getRandomInt(1, sum01 - diff);
  const b = getRandomInt(1, sum01 - a - diff);
  const c = sum01 - a - b;

  return {
    a: sum01,
    b,
    c,
    op1,
    op2,
  };
}

// retrun {a: 5, b: 10, c: 25, op1: 1, op2: 2]
export function getThreeNumbers(max) {
  const op1 = getRandomInt(1, 2);
  const op2 = op1 === 1 ? 2 : 1;
  let c;
  let res;

  if (op1 === 1) {
    res = getTwoNumbersPlus(max);
    const d = res.a + res.b;
    c = getRandomInt(1, d - 1);
  } else {
    res = getThreeNumbersMinus(max);
    const d = res.a - res.b;
    c = getRandomInt(1, 100 - d);
  }

  return {
    ...res,
    c,
    op2,
  };
}

// retrun {a: 5, b: 10, op1: 3]
export function getTwoNumbersMulti01() {
  const op1 = 3;
  const a = getRandomInt(2, 9);
  const b = getRandomInt(2, 9);

  return {
    a,
    b,
    op1,
  };
}

// retrun {a: 10, b: 2, op1: 4]
export function getTwoNumbersDivide() {
  const op1 = 4;
  let a = getRandomInt(2, 9);
  const b = getRandomInt(2, 9);
  a = a * b;

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
  { value: "7", label: "除法"}
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
    case "3": {
      func01 = getThreeNumbersPlus;
      break;
    }
    case "4": {
      func01 = getThreeNumbersMinus;
      break;
    }
    case "5": {
      func01 = getThreeNumbers;
      break;
    }
    case "6": {
      func01 = getTwoNumbersMulti01;
      break;
    }
    case "7": {
      func01 = getTwoNumbersDivide;
      break;
    }
    default: {
      func01 = getTwoNumbers;
      break;
    }
  }
  return func01;
};

export const getTitle = (scope, type, title01, howMany) => {
  if (!!title01) return title01;
  let title = "口算练习题";

  if (!type || type.length === 0 || type.length > 1) {
    return "口算练习题";
  }

  let typeValue = type[0].value;
  let typeLabel = type[0].label;
  switch (typeValue) {
    case "6":
      title = `${typeLabel}口算练习${howMany}题`;
      break;

    default:
      title = `${scope}以内${typeLabel}口算练习${howMany}题`;
      break;
  }
  return title;
};

export const getOp = (value) => {
  // get op
  let op;
  switch (value) {
    case 1:
      op = "+";
      break;
    case 2:
      op = "-";
      break;
    case 3:
      op = "x";
      break;
    case 4:
      op = "÷";
      break;
    default:
      break;
  }
  return op;
};
