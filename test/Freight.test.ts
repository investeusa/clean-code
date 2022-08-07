import Dimension from "../src/Dimension";
import Freight from "../src/Freight";
import Item from "../src/Item";

test("Deve calcular o frete de um item", function () {
    const item = new Item(1, "Instrumentos", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const freight = new Freight();
    freight.addItem(item, 2)
    expect(freight.getTotal()).toBe(60) // 3/0.03
})