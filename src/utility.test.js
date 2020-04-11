import { expect } from "chai";
import { getRandomInt, getTwoNumbers, createExercises } from "./utility";

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
