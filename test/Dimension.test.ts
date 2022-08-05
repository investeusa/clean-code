import Dimension from "../src/Dimension";

test("Deve criar as dimensoes de um item", function () {
    const dimesion = new Dimension(100, 30, 10);
    const volume = dimesion.getVolume();
    expect(volume).toBe(0.03)
})