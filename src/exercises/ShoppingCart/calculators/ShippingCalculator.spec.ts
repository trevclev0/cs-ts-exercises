import { describe, expect, beforeEach, it } from "@jest/globals";

import { Product } from "../Product";
import { Customer } from "../Customer";
import { CartItemCollection } from "../CartItemCollection";

import { ShippingCalculator } from "./ShippingCalculator";

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

describe("ShippingCalculator", () => {
    let products: Product[];
    let customer: Customer;
    let cartItems: CartItemCollection;
    let calculator: ShippingCalculator;

    beforeEach(() => {
        // Arrange
        products = [
            { ...emptyProduct, id: "1", weight: 2.0 },
            { ...emptyProduct, id: "2", weight: 3.0 },
        ];
        customer = { ...emptyCustomer };
        cartItems = new CartItemCollection();
        calculator = new ShippingCalculator(customer, cartItems);
    });

    it("returns zero shipping cost for VIP customers", () => {
        // Arrange
        customer.priceLevel = "vip";

        // Act
        const cost = calculator.calculate(products, 50);

        // Assert
        expect(cost).toBe(0);
    });

    it("returns zero shipping cost when subtotal is over 100", () => {
        // Act
        const cost = calculator.calculate(products, 150);

        // Assert
        expect(cost).toBe(0);
    });

    it("calculates correct standard shipping cost", () => {
        // Arrange
        cartItems.add("1", 2);

        // Act
        const cost = calculator.calculate(products, 50);

        // Assert
        expect(cost).toBe(5.4);
    });

    it("ignores weight of non-existent products", () => {
        // Arrange
        cartItems.add("999", 1);

        // Act
        const cost = calculator.calculate(products, 50);

        // Assert
        expect(cost).toBe(5.0);
    });
});
