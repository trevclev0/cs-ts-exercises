import { describe, expect, beforeEach, it } from "@jest/globals";

import { Product } from "./Product";
import { Customer } from "./Customer";
import { ShoppingCart } from "./ShoppingCart";

describe("ShoppingCart", () => {
    // Test fixtures
    let cart: ShoppingCart;
    let regularCustomer: Customer;
    let premiumCustomer: Customer;
    let vipCustomer: Customer;
    let products: Product[];

    beforeEach(() => {
        // Arrange - Common test fixtures
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
            // Arrange - Reset cart for each test
            cart = new ShoppingCart(regularCustomer);
        });

        it("should initialize with empty cart", () => {
            // Arrange
            // (cart already initialized in beforeEach)

            // Act
            const summary = cart.getOrderSummary(products);

            // Assert
            expect(summary.subtotal).toBe(0);
        });

        it("should add items to cart", () => {
            // Arrange
            const laptop = products[0];
            const book = products[1];

            // Act
            cart.addItem(laptop, 1);
            cart.addItem(book, 2);
            const summary = cart.getOrderSummary(products);

            // Assert
            // 1000 + (2 * 20)
            expect(summary.subtotal).toBe(1040);
        });

        it("should add multiple quantities of the same item", () => {
            // Arrange
            const laptop = products[0];

            // Act
            cart.addItem(laptop, 1);
            cart.addItem(laptop, 2);
            const summary = cart.getOrderSummary(products);

            // Assert
            // 3 * 1000
            expect(summary.subtotal).toBe(3000);
        });

        it("should update quantity", () => {
            // Arrange
            const laptop = products[0];
            cart.addItem(laptop, 1);

            // Act
            cart.updateQuantity(laptop.id, 2);
            const summary = cart.getOrderSummary(products);

            // Assert
            expect(summary.subtotal).toBe(2000);
        });

        it("should remove items when quantity is set to 0", () => {
            // Arrange
            const laptop = products[0];
            cart.addItem(laptop, 1);

            // Act
            cart.updateQuantity(laptop.id, 0);
            const summary = cart.getOrderSummary(products);

            // Assert
            expect(summary.subtotal).toBe(0);
        });

        it("should throw error for out of stock items", () => {
            // Arrange
            const outOfStockProduct = { ...products[0], inStock: false };

            // Act & Assert
            expect(() => cart.addItem(outOfStockProduct, 1)).toThrow(
                "Product out of stock",
            );
        });
    });

    describe("Price Calculations", () => {
        it("should apply premium customer discount", () => {
            // Arrange
            cart = new ShoppingCart(premiumCustomer);
            const laptop = products[0];

            // Act
            cart.addItem(laptop, 1);
            const summary = cart.getOrderSummary(products);

            // Assert
            // 10% off 1000
            expect(summary.subtotal).toBe(900);
        });

        it("should apply VIP discount", () => {
            // Arrange
            cart = new ShoppingCart(vipCustomer);
            const laptop = products[0];

            // Act
            cart.addItem(laptop, 1);
            const summary = cart.getOrderSummary(products);

            // Assert
            // 15% off 1000
            expect(summary.subtotal).toBe(850);
        });

        it("should calculate tax correctly", () => {
            // Arrange
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];

            // Act
            cart.addItem(laptop, 1);
            const summary = cart.getOrderSummary(products);

            // Assert
            // 10% of 1000
            expect(summary.tax).toBe(100);
        });
    });

    describe("Discount Codes", () => {
        beforeEach(() => {
            // Arrange - Common setup
            cart = new ShoppingCart(regularCustomer);
            // $1000 laptop
            cart.addItem(products[0], 1);
        });

        it("should apply SUMMER20 discount code", () => {
            // Arrange - (setup in beforeEach)

            // Act
            cart.applyDiscountCode("SUMMER20");
            const summary = cart.getOrderSummary(products);

            // Assert
            // 20% of 1000
            expect(summary.discount).toBe(200);
        });

        it("should allow updating discount code", () => {
            // Arrange - (setup in beforeEach)

            // Act
            cart.applyDiscountCode("SAVE10");
            cart.applyDiscountCode("SUMMER20");
            const summary = cart.getOrderSummary(products);

            // Assert
            // Should use latest discount
            expect(summary.discount).toBe(200);
        });
    });

    describe("Shipping Calculations", () => {
        it("should calculate base shipping cost", () => {
            // Arrange
            cart = new ShoppingCart(regularCustomer);
            // 0.5kg, $20
            const book = products[1];

            // Act
            cart.addItem(book, 1);
            const shipping = cart.calculateShippingCost(products);

            // Assert
            // Base $5 + (0.5kg * $0.1)
            expect(shipping).toBe(5.05);
        });

        it("should provide free shipping over $100", () => {
            // Arrange
            cart = new ShoppingCart(regularCustomer);
            // $1000
            const laptop = products[0];

            // Act
            cart.addItem(laptop, 1);
            const shipping = cart.calculateShippingCost(products);

            // Assert
            expect(shipping).toBe(0);
        });

        it("should provide free shipping for VIP customers", () => {
            // Arrange
            cart = new ShoppingCart(vipCustomer);
            // Low price item
            const book = products[1];

            // Act
            cart.addItem(book, 1);
            const shipping = cart.calculateShippingCost(products);

            // Assert
            expect(shipping).toBe(0);
        });
    });

    describe("Loyalty Points", () => {
        it("should calculate points for multiple items", () => {
            // Arrange
            cart = new ShoppingCart(regularCustomer);
            // $20 each
            const book = products[1];

            // Act
            // $100 worth of books
            cart.addItem(book, 5);
            const points = cart.calculateLoyaltyPoints(products);

            // Assert
            // 10 points for $100
            expect(points).toBe(10);
        });

        it("should add bonus points for electronics", () => {
            // Arrange
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];
            const smartphone = products[2];

            // Act
            cart.addItem(laptop, 1);
            cart.addItem(smartphone, 1);
            const points = cart.calculateLoyaltyPoints(products);

            // Assert
            // 180 base points + (2 * 5) electronics bonus
            expect(points).toBe(190);
        });

        it("should double points for VIP customers", () => {
            // Arrange
            cart = new ShoppingCart(vipCustomer);
            const laptop = products[0];

            // Act
            cart.addItem(laptop, 1);
            const points = cart.calculateLoyaltyPoints(products);

            // Assert
            // (85 points + 5 bonus) * 2 for VIP
            expect(points).toBe(180);
        });
    });

    describe("Order Summary", () => {
        it("should generate complete order summary", () => {
            // Arrange
            cart = new ShoppingCart(regularCustomer);
            const laptop = products[0];
            cart.addItem(laptop, 1);
            cart.applyDiscountCode("SAVE10");

            // Act
            const summary = cart.getOrderSummary(products);

            // Assert
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
            // Arrange
            cart = new ShoppingCart(premiumCustomer);
            const laptop = products[0];
            const book = products[1];
            // 2 laptops
            cart.addItem(laptop, 2);
            // 3 books
            cart.addItem(book, 3);
            cart.applyDiscountCode("SUMMER20");

            // Act
            const summary = cart.getOrderSummary(products);

            // Assert
            // Premium gets 10% off
            const expectedSubtotal = 2 * 1000 * 0.9 + 3 * 20 * 0.9;
            expect(summary).toEqual({
                subtotal: expectedSubtotal,
                tax: expectedSubtotal * 0.1,
                // SUMMER20 gives 20% off
                discount: expectedSubtotal * 0.2,
                // Free shipping over $100
                shippingCost: 0,
                total:
                    expectedSubtotal +
                    expectedSubtotal * 0.1 -
                    expectedSubtotal * 0.2,
                // Base points + electronics bonus
                loyaltyPoints: Math.floor(expectedSubtotal / 10) + 2 * 5,
            });
        });
    });
});
