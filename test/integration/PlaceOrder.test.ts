import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import IntemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/place-order/PlaceOrder";

test("Deve fazer um pedido", async function () {
    const itemRepository = new IntemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = await new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        coupon: "VALE20",
        issueDate: new Date("2022-03-01T10:00:00")
    };
    const output = await placeOrder.execute(input)
    expect(output.total).toBe(5132)
})

test("Deve fazer um pedido calculando o codigo", async function () {
    const itemRepository = new IntemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = await new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        coupon: "VALE20",
        issueDate: new Date("2022-03-01T10:00:00")
    };
    await placeOrder.execute(input)
    const output = await placeOrder.execute(input)
    expect(output.code).toBe("202200000002")
})