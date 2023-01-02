import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe de retornar "Hola Clever"', () => {
    const name = "Clever";
    const mensaje = getSaludo(name);

    expect(mensaje).toBe(`Hola ${name}`);
  });
});
