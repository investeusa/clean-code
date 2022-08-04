import Item from "../src/Item";
import Order from "../src/Order";

test("Deve criar um pedido", function () {
    const order = new Order("935.411.347-80");
    expect(order.cpf.getValue()).toBe("935.411.347-80");
    expect(order.getTotal()).toBe(0);
});

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Instumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Instumentos musicais", "Guitarra", 30), 3)
    const total = order.getTotal();
    expect(total).toBe(6090)
})