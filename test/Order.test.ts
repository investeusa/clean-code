import Order from "../src/Order";

test("Deve criar um pedido", function () {
    const order = new Order("935.411.347-80");
    expect(order.cpf.getValue()).toBe("935.411.347-80");
    expect(order.getTotal()).toBe(0);
});

// test("Deve criar um pedido com 3 itens", function () {

// })