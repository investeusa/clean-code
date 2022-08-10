import ValidateCoupon from "../../src/application/usecase/validate-coupon/ValidateCoupon";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory"

test("Deve validar um cupom", function () {
    const counponRepository = new CouponRepositoryMemory();
    const validateCoupon = new ValidateCoupon(counponRepository);
    const isValid = validateCoupon.execute("VALE20");
    expect(isValid).toBeTruthy();
})