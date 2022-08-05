import Coupon from "../src/Coupon"

test("Deve criar um coupom de desconto", function () {
    const coupon = new Coupon("VALE20", 20);
    const isExpired = coupon.isExpired(new Date("2021-01-01T10:00:00"));
    expect(isExpired).toBeFalsy();
    expect(coupon.percentage).toBe(20)
})

test("Deve criar um coupom de desconto expirado", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2021-01-01T10:00:00"));
    const isExpired = coupon.isExpired(new Date("2022-01-01T10:00:00"));
    expect(isExpired).toBeTruthy()
})