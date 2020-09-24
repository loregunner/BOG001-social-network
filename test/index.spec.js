// importamos la funcion que vamos a testear
import { myFunction } from "../src/lib/index";
import { getThoughts } from "../src/lib/Logeado.js";

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe('getThoughts', () => {
  it('deberia ser una funciona', () => {
    expect(typeof getThoughts).toBe('function');
  })
})