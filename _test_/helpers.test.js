import { isNumber, isEmpty, isNumeric } from "../src/helpers";

describe("Validar variable tipo número", () => {
  it("Es un tipo número", () => {
    const values = [10, 1.5, 0.12];
    values.forEach(val => {
      const result = isNumber(val);
      expect(result).toBeTruthy();
    });
  });
});

describe("Validar si la variable esta vacia", () => {
  it("Si esta vacia", () => {
    const valueOne = [10, 1];
    const valueTwo = { nombre: "Juan", edad: 21 };
    const resultOne = isEmpty(valueOne);
    const resultTwo = isEmpty(valueTwo);
    expect(resultOne).toBeFalsy();
    expect(resultTwo).toBeFalsy();
  });
  it("Esta vacia", () => {
    const valueOne = [];
    const valueTwo = {};
    const resultOne = isEmpty(valueOne);
    const resultTwo = isEmpty(valueTwo);
    expect(resultOne).toBeTruthy();
    expect(resultTwo).toBeTruthy();
  });
});

describe("Validar si es un valor numerico", () => {
  it("Es un valor numerico", () => {
    const values = [10, 1.5, "1"];
    values.forEach(val => {
      const result = isNumeric(val);
      expect(result).toBeTruthy();
    });
  });
  it("No es un valor numerico", () => {
    const values = [ {}, false, "a"];
    values.forEach(val => {
      const result = isNumeric(val);
      expect(result).toBeFalsy();
    });
  });
});