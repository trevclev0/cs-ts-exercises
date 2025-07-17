import { describe, expect, beforeEach, it } from "@jest/globals";

import { ShoppingCart, Product, Customer } from "./shopping-cart";

describe("ShoppingCart", () => {
    let cart: ShoppingCart;
    let regularCustomer: Customer;
    let premiumCustomer: Customer;
    let vipCustomer: Customer;
    let products: Product[];

    beforeEach(() => {
        regularCustomer = {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            address: "123 Main St",
            loyaltyPoints: 100,
            priceLevel: "regular",
        };

        premiumCustomer = {
            ...regularCustomer,
            id: "2",
            priceLevel: "premium",
        };

        vipCustomer = {
            ...regularCustomer,
            id: "3",
            priceLevel: "vip",
        };

        products = [
            {
                id: "p1",
                name: "Laptop",
                price: 1000,
                weight: 2.5,
                category: "electronics",
                inStock: true,
            },
            {
                id: "p2",
                name: "Book",
                price: 20,
                weight: 0.5,
                category: "books",
                inStock: true,
            },
            {
                id: "p3",
                name: "Smartphone",
                price: 800,
                weight: 0.3,
                category: "electronics",
                inStock: true,
            },
        ];
    });

    describe("Cart Management", () => {
        beforeEach(() => {
            cart = new ShoppingCart(regularCustomer);
        });

        it("should initialize with empty cart", () => {
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(0);
        });

        it("should add items to cart", () => {
            const laptop = products[0];
            const book = products[1];

            cart.addItem(laptop, 1);
            cart.addItem(book, 2);
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(1040);
        });

        it("should add multiple quantities of the same item", () => {
            const laptop = products[0];

            cart.addItem(laptop, 1);
            cart.addItem(laptop, 2);
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(3000);
        });

        it("should update quantity", () => {
            const laptop = products[0];
            cart.addItem(laptop, 1);

            cart.updateQuantity(laptop.id, 2);
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(2000);
        });

        it("should remove items when quantity is set to 0", () => {
            const laptop = products[0];
            cart.addItem(laptop, 1);

            cart.updateQuantity(laptop.id, 0);
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(0);
        });

        it("should throw error for out of stock items", () => {
            const outOfStockProduct = { ...products[0], inStock: false };

            expect(() => cart.addItem(outOfStockProduct, 1)).toThrow(
                "Product out of stock",
            );
        });
    });

    describe("Price Calculations", () => {
        it("should apply premium customer discount", () => {
            cart = new ShoppingCart(premiumCustomer);
            const laptop = products[0];

            cart.addItem(laptop, 1);
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(900);
        });

        it("should apply VIP discount", () => {
            cart = new ShoppingCart(vipCustomer);
            const laptop = products[0];

            cart.addItem(laptop, 1);
            const summary = cart.getOrderSummary(products);

            expect(summary.subtotal).toBe(850);
        });

        it("should calculate tax correctly", () => {
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];

            cart.addItem(laptop, 1);
            const summary = cart.getOrderSummary(products);

            expect(summary.tax).toBe(100);
        });
    });

    describe("Discount Codes", () => {
        beforeEach(() => {
            cart = new ShoppingCart(regularCustomer);
            cart.addItem(products[0], 1);
        });

        it("should apply SUMMER20 discount code", () => {
            cart.applyDiscountCode("SUMMER20");
            const summary = cart.getOrderSummary(products);

            expect(summary.discount).toBe(200);
        });

        it("should allow updating discount code", () => {
            cart.applyDiscountCode("SAVE10");
            cart.applyDiscountCode("SUMMER20");
            const summary = cart.getOrderSummary(products);

            expect(summary.discount).toBe(200);
        });
    });

    describe("Shipping Calculations", () => {
        it("should calculate base shipping cost", () => {
            cart = new ShoppingCart(regularCustomer);
            const book = products[1];

            cart.addItem(book, 1);
            const shipping = cart.calculateShippingCost(products);

            expect(shipping).toBe(5.05);
        });

        it("should provide free shipping over $100", () => {
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];
            cart.addItem(laptop, 1);
            const shipping = cart.calculateShippingCost(products);

            expect(shipping).toBe(0);
        });

        it("should provide free shipping for VIP customers", () => {
            cart = new ShoppingCart(vipCustomer);
            const book = products[1];

            cart.addItem(book, 1);
            const shipping = cart.calculateShippingCost(products);

            expect(shipping).toBe(0);
        });
    });

    describe("Loyalty Points", () => {
        it("should calculate points for multiple items", () => {
            cart = new ShoppingCart(regularCustomer);
            const book = products[1];

            cart.addItem(book, 5);
            const points = cart.calculateLoyaltyPoints(products);

            expect(points).toBe(10);
        });

        it("should add bonus points for electronics", () => {
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];
            const smartphone = products[2];

            cart.addItem(laptop, 1);
            cart.addItem(smartphone, 1);
            const points = cart.calculateLoyaltyPoints(products);

            expect(points).toBe(190);
        });

        it("should double points for VIP customers", () => {
            cart = new ShoppingCart(vipCustomer);
            const laptop = products[0];

            cart.addItem(laptop, 1);
            const points = cart.calculateLoyaltyPoints(products);

            expect(points).toBe(180);
        });
    });

    describe("Order Summary", () => {
        it("should generate complete order summary", () => {
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];
            cart.addItem(laptop, 1);
            cart.applyDiscountCode("SAVE10");

            const summary = cart.getOrderSummary(products);

            expect(summary).toEqual({
                subtotal: 1000,
                tax: 100,
                discount: 100,
                shippingCost: 0,
                total: 1000,
                loyaltyPoints: 105,
            });
        });

        it("should calculate complex order correctly", () => {
            cart = new ShoppingCart(premiumCustomer);
            const laptop = products[0];
            const book = products[1];
            cart.addItem(laptop, 2);
            cart.addItem(book, 3);
            cart.applyDiscountCode("SUMMER20");

            const summary = cart.getOrderSummary(products);

            const expectedSubtotal = 2 * 1000 * 0.9 + 3 * 20 * 0.9;
            expect(summary).toEqual({
                subtotal: expectedSubtotal,
                tax: expectedSubtotal * 0.1,
                discount: expectedSubtotal * 0.2,
                shippingCost: 0,
                total:
                    expectedSubtotal +
                    expectedSubtotal * 0.1 -
                    expectedSubtotal * 0.2,
                loyaltyPoints: Math.floor(expectedSubtotal / 10) + 2 * 5,
            });
        });
    });
});
