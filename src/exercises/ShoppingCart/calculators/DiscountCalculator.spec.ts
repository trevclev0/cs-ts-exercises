import { describe, expect, beforeEach, it } from "@jest/globals";

import { DiscountCalculator } from "./DiscountCalculator";

describe("DiscountCalculator", () => {
    let calculator: DiscountCalculator;

    beforeEach(() => {
        // Arrange
        calculator = new DiscountCalculator();
    });

    it.each([
        ["SAVE10", 100, 10],
        ["SUMMER20", 100, 20],
        ["VIP15", 100, 15],
        ["SAVE10", 200, 20],
    ])(
        "calculates correct discount for code %s with subtotal %d",
        (code, subtotal, expectedDiscount) => {
            // Act
            calculator.applyDiscountCode(code);
            const discount = calculator.calculateDiscount(subtotal);
            // Assert
            expect(discount).toBe(expectedDiscount);
        },
    );

    it("returns zero discount when no code is applied", () => {
        // Act
        const discount = calculator.calculateDiscount(100);
        // Assert
        expect(discount).toBe(0);
    });

    it.each([["INVALID"], ["save10"], ["TEST123"]])(
        "throws error for invalid discount code %s",
        (invalidCode) => {
            // Act, Assert
            expect(() => calculator.applyDiscountCode(invalidCode)).toThrow();
        },
    );
});
