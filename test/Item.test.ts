import Item from "../src/Item"

test("Deve criar um item com dimensões", function () {
    const item = new Item(1, "Instrumentos", "Guitarra", 1000, 100, 30, 10);
    const volume = item.getVolume();
    expect(volume).toBe(0.03)
})