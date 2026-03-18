export class DiscountCalculator {
    private static readonly DISCOUNT_RATES: Record<string, number> = {
        SAVE10: 0.1,
        SUMMER20: 0.2,
        VIP15: 0.15,
    };

    private discountCode?: string;

    applyDiscountCode(code: string): void {
        if (DiscountCalculator.DISCOUNT_RATES[code] === undefined) {
            throw new Error("Invalid discount code");
        }
        this.discountCode = code;
    }

    calculateDiscount(subtotal: number): number {
        if (!this.discountCode) return 0;
        return subtotal * DiscountCalculator.DISCOUNT_RATES[this.discountCode];
    }
}
