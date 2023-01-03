import { getImage } from "../../base-pruebas/09-async-await";

describe("Pruebas en 09-async-await", () => {
  test("Debe retornar un url de la imagen", async () => {
    const resp = await getImage();

    expect(resp).toBe("No existe la imagen");
  });
});
