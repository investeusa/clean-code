import Coupon from "../src/Coupon";
import Dimension from "../src/Dimension";
import Item from "../src/Item";
import Order from "../src/Order";

test("Não deve criar um pedido com CPF inválido", function () {
    expect(() => new Order("111.111.111-11", new Date("2022-01-01T10:00:00"))).toThrow(new Error("CPF Inválido"));
});


test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("935.411.347-80", new Date("2022-01-01T10:00:00"));
    order.addItem(new Item(1, "Instumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Instumentos musicais", "Guitarra", 30), 3)
    const total = order.getTotal();
    expect(total).toBe(6090)
})

test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("935.411.347-80", new Date("2022-01-01T10:00:00"));
    order.addItem(new Item(1, "Instumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Instumentos musicais", "Guitarra", 30), 3)
    const coupon = new Coupon("VALE20", 20);
    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(4872)
})

test("Não deve aplicar cupom de desconto expirado", function () {
    const order = new Order("935.411.347-80", new Date("2022-01-01T10:00:00"));
    order.addItem(new Item(1, "Instumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2, "Instumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3, "Instumentos musicais", "Guitarra", 30), 3)
    const coupon = new Coupon("VALE20", 20, new Date("2021-01-01T10:00:00"));
    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(6090)
})

test("Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)", function () {
    const order = new Order("935.411.347-80", new Date("2022-01-01T10:00:00"));
    order.addItem(new Item(1, "Instumentos musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1) //
    order.addItem(new Item(2, "Instumentos musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1)
    order.addItem(new Item(3, "Instumentos musicais", "Guitarra", 30, new Dimension(10, 10, 10), 1), 3)
    const total = order.getTotal();
    expect(total).toBe(6090 + 30 + 200 + 10 + 10 + 10)
})
