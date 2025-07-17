import { describe, beforeEach, it, expect } from "@jest/globals";

import { Product } from "../Product";
import { Customer, CustomerPriceLevel } from "../Customer";
import { CartItemCollection } from "../CartItemCollection";

import { PriceCalculator } from "./PriceCalculator";

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

describe("PriceCalculator", () => {
    let products: Product[];
    let customer: Customer;
    let cartItems: CartItemCollection;
    let calculator: PriceCalculator;

    beforeEach(() => {
        // Arrange
        products = [
            { ...emptyProduct, id: "1", price: 100 },
            { ...emptyProduct, id: "2", price: 200 },
        ];
        customer = { ...emptyCustomer };
        cartItems = new CartItemCollection();
        calculator = new PriceCalculator(customer, cartItems);
    });

    it.each([
        ["regular" as CustomerPriceLevel, 100, 100],
        ["premium" as CustomerPriceLevel, 100, 90],
        ["vip" as CustomerPriceLevel, 100, 85],
    ])(
        "calculates item price with %s price level",
        (
            priceLevel: CustomerPriceLevel,
            originalPrice: number,
            expectedPrice: number,
        ) => {
            // Arrange
            customer.priceLevel = priceLevel;
            const product = emptyProduct;
            product.price = originalPrice;
            // Act
            const calculatedPrice = calculator.calculateItemPrice(product);
            // Assert
            expect(calculatedPrice).toBe(expectedPrice);
        },
    );

    it("calculates correct subtotal with multiple items", () => {
        // Arrange
        cartItems.add("1", 2);
        cartItems.add("2", 1);
        // Act
        const subtotal = calculator.calculateSubtotal(products);
        // Assert
        expect(subtotal).toBe(100 * 2 + 200 * 1);
    });

    it("ignores non-existent products when calculating subtotal", () => {
        // Arrange
        cartItems.add("1", 1);
        cartItems.add("999", 1);
        // Act
        const subtotal = calculator.calculateSubtotal(products);
        // Assert
        expect(subtotal).toBe(100);
    });

    it.each([
        [100, 10],
        [200, 20],
        [0, 0],
    ])("calculates correct tax for subtotal %d", (subtotal, expectedTax) => {
        // Act
        const tax = calculator.calculateTax(subtotal);
        // Assert
        expect(tax).toBe(expectedTax);
    });
});
