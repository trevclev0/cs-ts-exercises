import { describe, expect, beforeEach, it } from "@jest/globals";

import { Product } from "../Product";
import { Customer } from "../Customer";
import { CartItemCollection } from "../CartItemCollection";

import { LoyaltyPointsCalculator } from "./LoyaltyPointsCalculator";

const emptyProduct: Product = {
    id: "",
    name: "",
    price: 0,
    weight: 0,
    category: "",
    inStock: true,
};

const emptyCustomer: Customer = {
    id: "",
    name: "",
    email: "",
    address: "",
    loyaltyPoints: 0,
    priceLevel: "regular",
};

describe("LoyaltyPointsCalculator", () => {
    let products: Product[];
    let customer: Customer;
    let cartItems: CartItemCollection;
    let calculator: LoyaltyPointsCalculator;

    beforeEach(() => {
        // Arrange
        products = [
            { ...emptyProduct, id: "1", category: "electronics", price: 100 },
            { ...emptyProduct, id: "2", category: "books", price: 50 },
        ];
        customer = { ...emptyCustomer };
        cartItems = new CartItemCollection();
        calculator = new LoyaltyPointsCalculator(customer, cartItems);
    });

    it("calculates base points for regular customer", () => {
        // Act
        const points = calculator.calculate(products, 100);

        // Assert
        expect(points).toBe(10);
    });

    it("doubles points for VIP customer", () => {
        // Arrange
        customer.priceLevel = "vip";

        // Act
        const points = calculator.calculate(products, 100);

        // Assert
        expect(points).toBe(20);
    });

    it("adds bonus points for electronics items", () => {
        // Arrange
        cartItems.add("1", 2);

        // Act
        const points = calculator.calculate(products, 200);

        // Assert
        expect(points).toBe(30);
    });

    it("applies both VIP and electronics bonuses correctly", () => {
        // Arrange
        customer.priceLevel = "vip";
        cartItems.add("1", 2);

        // Act
        const points = calculator.calculate(products, 200);

        // Assert
        expect(points).toBe(60);
    });
});
