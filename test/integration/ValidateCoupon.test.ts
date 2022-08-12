import ValidateCoupon from "../../src/application/usecase/validate-coupon/ValidateCoupon";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory"

test("Deve validar um cupom", async function () {
    const counponRepository = await new CouponRepositoryMemory();
    const validateCoupon = await new ValidateCoupon(counponRepository);
    const isValid = validateCoupon.execute("VALE20");
    expect(isValid).toBeTruthy();
})