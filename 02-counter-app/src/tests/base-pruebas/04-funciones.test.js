import { getUser, getUsuarioActivo } from "../../base-Pruebas/04-funciones";

describe("Pruebas funciones 04", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    //toEqual() is used to compare two objects
    expect(user).toEqual(testUser);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Clever";
    const userActive = getUsuarioActivo(name);

    expect(userActive).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
