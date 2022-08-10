import OrderCode from "../../src/domain/entity/OrderCode";

test("Deve gerar o codigo do pedido", function () {
    const date = new Date("2022-03-01T10:00:00");
    const sequence = 1;
    const orderCode = new OrderCode(date, sequence);
    const code = orderCode.value
    expect(code).toBe("202200000001")
})