import { expect } from "chai";
import {
  getRandomInt,
  getTwoNumbers,
  createExercises,
  getThreeNumbersPlus,
  getThreeNumbersMinus,
  getThreeNumbers,
} from "./utility";

describe("getRandomInt", () => {
  let i;
  let times = 1000;
  it("should less than 101", () => {
    for (i = 0; i < times; i++) {
      let a = getRandomInt(1, 100);
      // console.log("a", a);
      expect(a).to.lessThan(101);
    }
  });
  it("should not less than 10", () => {
    for (i = 0; i < times; i++) {
      let a = getRandomInt(10, 100);
      expect(a).to.not.lessThan(10);
    }
  });
});

describe("getTwoNumbers", () => {
  it("print 10 samples", () => {
    let i;
    let times = 10;
    for (i = 0; i < times; i++) {
      const res = getTwoNumbers(100);
      // console.log("res", res);
      expect(getTwoNumbers(100)).to.have.property("op1").lessThan(3);
      expect(res).to.have.property("a").lessThan(101);
      expect(res).to.have.property("b").lessThan(101);
      if (res.op1 === 1) {
        expect(res.a + res.b).to.lessThan(101);
      }
      if (res.op1 === 2) {
        expect(res.a - res.b).to.greaterThan(0);
      }
    }
  });
});

describe("createExercise", () => {
  it("getTwoNumbers", () => {
    let res = createExercises(100, 100, getTwoNumbers);
    // console.log("res", res);
    expect(res).to.be.an("Array");
    expect(res).to.have.lengthOf(100);
  });
});

describe("getThreeNumbersPlus", () => {
  it("op1 = + and op2 = +", () => {
    let res = getThreeNumbersPlus(100);
    console.log("res", res);
    expect(res).to.have.property("op1").equal(1);
    expect(res).to.have.property("op2").equal(1);
    expect(res).to.have.property("a").lessThan(100);
    expect(res).to.have.property("b").lessThan(100);
    expect(res).to.have.property("c").lessThan(100);

    let times = 1000;
    for (let i = 0; i < times; i++) {
      res = getThreeNumbersPlus(100);
      expect(res.a + res.b + res.c).to.lessThan(101);
    }
  });
});

describe("getThreeNumbersMinus", () => {
  it("op1 = - and op2 = -", () => {
    let res = getThreeNumbersMinus(100);
    console.log("res", res);
    expect(res).to.have.property("op1").equal(2);
    expect(res).to.have.property("op2").equal(2);
    expect(res).to.have.property("a").lessThan(100);
    expect(res).to.have.property("b").lessThan(100);
    expect(res).to.have.property("c").lessThan(100);

    let times = 1000;
    for (let i = 0; i < times; i++) {
      res = getThreeNumbersMinus(100);
      expect(res.a - res.b - res.c).to.greaterThan(0);
    }
  });
});

describe("getThreeNumbers", () => {
  it("op1 = 1, op2 = 2 or op1 = 2, op2 = 1", () => {
    let res = getThreeNumbers(100);
    console.log("res", res);
    expect(res).to.have.property("op1").oneOf([1, 2]);
    expect(res).to.have.property("op2").oneOf([1, 2]);
    expect(res.op1).to.not.equal(res.op2);
    expect(res).to.have.property("a").lessThan(100);
    expect(res).to.have.property("b").lessThan(100);
    expect(res).to.have.property("c").lessThan(100);

    let times = 1000;
    for (let i = 0; i < times; i++) {
      res = getThreeNumbers(100);
      if (res.ob1 === 1) {
        if (
          expect(res.a + res.b - res.c)
            .to.greaterThan(0)
            .and.lessThan(101)
        ) {
          console.log("res", res);
        }
      } else if (res.ob1 === 2) {
        expect(res.a - res.b + res.c)
          .to.greaterThan(0)
          .and.lessThan(101);
      }
    }
  });
});
