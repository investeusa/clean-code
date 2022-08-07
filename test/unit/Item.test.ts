import Dimension from "../../src/domain/entity/Dimension";
import Item from "../../src/domain/entity/Item"

test("Deve criar um item com dimensões", function () {
    const item = new Item(1, "Instrumentos", "Guitarra", 1000, new Dimension(100, 30, 10));
    const volume = item.getVolume();
    expect(volume).toBe(0.03)
})

test("Deve criar um item com dimensões e densidade", function () {
    const item = new Item(1, "Instrumentos", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const density = item.getDensity()
    expect(density).toBe(100) // 3/0.03
})