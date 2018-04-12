import {
  getParameters,
  validateParameters,
  getDigitSize,
  validateDigitSize,
  getDigitSpace
} from "../../src/middleWares/commandMiddleware";

describe("Validar obtención de parametros de una cadena", () => {
  it("Extraer los parametros del comando", () => {
    const patrameters = "Juan, Carlos, Santiago, Mauricio";
    const result = getParameters(patrameters);
    const expected = ["Juan", "Carlos", "Santiago", "Mauricio"];
    expect(result).toEqual(expect.arrayContaining(expected));
  });
  it("No se puede extrar parametros si no hay ',' ", () => {
    const patrameters = "Juan Sebastian Reina";
    expect(() => getParameters(patrameters)).toThrow();
  });
  it("No hay suficientes parametros' ", () => {
    const patrameters = [0];
    expect(() => validateParameters(patrameters, "comando")).toThrow();
  });
  it("Contiene más parametros de los permitidos' ", () => {
    const patrameters = [0, 1, 2];
    expect(() => validateParameters(patrameters, "comando")).toThrow();
  });
  it("Contiene la cantidad correcta de parametros", () => {
    const patrameters = [0, 1];
    expect(validateParameters(patrameters, "comando")).toBeTruthy();
  });
});

describe("Obtener el tamaño que debe tener la impresión", () => {
  it("Es un número", () => {
    const patrameters = "1";
    const result = getDigitSize(patrameters);
    const expected = 1;
    expect(result).toEqual(expected);
  });
  it("No se puede realizar si no es un número", () => {
    const patrameters = ["a", false];
    patrameters.forEach(param => {
      expect(() => getDigitSize(param)).toThrow();
    });
  });
});

describe("Validar que el size esta dentro del rango permitido", () => {
  it("No esta dentro del rago permitido", () => {
    const patrameters = [-1, 12, -2];
    patrameters.forEach(param => {
      expect(() => validateDigitSize(param)).toThrow();
    });
  });
  it("Estan dentro del rango permitido", () => {
    const patrameters = [1, 2.5, 9.9];
    patrameters.forEach(param => {
      expect(validateDigitSize(param)).toBeTruthy();
    });
  });
});

describe("Obtener el valor numerico de espacio", () => {
  it("Retorna un número", () => {
    const result = getDigitSpace("1");
    expect(result).toBe(1);
  });
  it("Valida si es el comando es numerico", () => {
    const patrameters = ['a', false];
    patrameters.forEach(param => {
      expect(() => getDigitSpace("a")).toThrow();
    });    
  });
  it("Valida si es el comando es numerico entero", () => {
    expect(() => getDigitSpace("1.2")).toThrow();   
  });
});
