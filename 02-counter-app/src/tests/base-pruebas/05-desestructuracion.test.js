import { retornaArreglo } from "../../base-pruebas/05-desestructuración";
describe("Pruebas 05-desestructuracion", () => {
  test("debe de retornar un string y un numero", () => {
    const [letters, numbers, colores] = retornaArreglo(); // ['ABC', 123]

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
    expect(colores).toEqual({ Color: "Azul" });
    expect(letters).toEqual(expect.any(String));
    expect(typeof letters).toBe("string");
  });
});
