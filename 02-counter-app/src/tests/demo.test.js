describe("Pruebas en <DemoComponent/>", () => {
  test("Esta prueba no debe fallar", () => {
    // 1. Inicialización
    const mensaje = "Hola Mundo";

    // 2. Estímulo
    const mensaje2 = mensaje.trim();

    // 3. Observar el comportamiento esperado
    expect(mensaje).toBe(mensaje2);
  });
});
