import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "../../src/validators/password-rules";

describe("Password Rules Validation", () => {
  describe("tieneMayusculasYMinusculas", () => {
    it("debe retornar válido cuando la clave tiene mayúsculas y minúsculas", () => {
      const result = tieneMayusculasYMinusculas("Abc123");
      expect(result.esValida).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it("debe retornar inválido cuando la clave solo tiene minúsculas", () => {
      const result = tieneMayusculasYMinusculas("abc123");
      expect(result.esValida).toBe(false);
      expect(result.error).toBe(
        "La clave debe de tener mayúsculas y minúsculas"
      );
    });

    it("debe retornar inválido cuando la clave solo tiene mayúsculas", () => {
      const result = tieneMayusculasYMinusculas("ABC123");
      expect(result.esValida).toBe(false);
      expect(result.error).toBe(
        "La clave debe de tener mayúsculas y minúsculas"
      );
    });
  });
});

describe("tieneNumeros", () => {
  it("debe retornar válido cuando la clave tiene números", () => {
    const result = tieneNumeros("Abc123");
    expect(result.esValida).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("debe retornar inválido cuando la clave no tiene números", () => {
    const result = tieneNumeros("Abc");
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener números");
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("debe retornar válido cuando la clave tiene caracteres especiales", () => {
    const result = tieneCaracteresEspeciales("Abc123!");
    expect(result.esValida).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("debe retornar inválido cuando la clave no tiene caracteres especiales", () => {
    const result = tieneCaracteresEspeciales("Abc123");
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave debe de tener caracteres especiales");
  });
});

describe("tieneLongitudMinima", () => {
  it("debe retornar válido cuando la clave tiene la longitud mínima", () => {
    const result = tieneLongitudMinima("Abc123444!");
    expect(result.esValida).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("debe retornar inválido cuando la clave no tiene la longitud mínima", () => {
    const result = tieneLongitudMinima("Abc123");
    expect(result.esValida).toBe(false);
  });
});

describe("tieneNombreUsuario", () => {
  it("debe retornar válido cuando la clave no contiene el nombre de usuario", () => {
    const result = tieneNombreUsuario("usuario", "clave");
    expect(result.esValida).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("debe retornar inválido cuando la clave contiene el nombre de usuario", () => {
    const result = tieneNombreUsuario("usuario", "claveusuario");
    expect(result.esValida).toBe(false);
    expect(result.error).toBe(
      "La clave no puede contener el nombre de usuario"
    );
  });
});

describe("tienePalabrasComunes", () => {
  it("debe retornar válido cuando la clave no contiene palabras comunes", () => {
    const result = tienePalabrasComunes("clave", ["casa"]);
    expect(result.esValida).toBe(true);
  });

  it("debe retornar inválido cuando la clave contiene palabras comunes", () => {
    const result = tienePalabrasComunes("clave", ["clave", "password"]);
    expect(result.esValida).toBe(false);
    expect(result.error).toBe("La clave no puede contener palabras comunes");
  });
});
