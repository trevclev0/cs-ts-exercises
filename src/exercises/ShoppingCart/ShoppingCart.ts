import { Product } from "./Product";
import { Customer } from "./Customer";
import { DiscountCalculator } from "./calculators/DiscountCalculator";
import { PriceCalculator } from "./calculators/PriceCalculator";
import { ShippingCalculator } from "./calculators/ShippingCalculator";
import { LoyaltyPointsCalculator } from "./calculators/LoyaltyPointsCalculator";
import { CartItemCollection } from "./CartItemCollection";

// ShoppingCart.ts
export class ShoppingCart {
    private items = new CartItemCollection();
    private discountCalculator = new DiscountCalculator();
    private priceCalculator: PriceCalculator;
    private shippingCalculator: ShippingCalculator;
    private loyaltyPointsCalculator: LoyaltyPointsCalculator;
    private customer: Customer;

    constructor(customer: Customer) {
        this.customer = customer;
        this.priceCalculator = new PriceCalculator(customer, this.items);
        this.shippingCalculator = new ShippingCalculator(customer, this.items);
        this.loyaltyPointsCalculator = new LoyaltyPointsCalculator(
            customer,
            this.items,
        );
    }

    // Cart management
    addItem(product: Product, quantity: number): void {
        if (!product.inStock) {
            throw new Error("Product out of stock");
        }
        this.items.add(product.id, quantity);
    }

    removeItem(productId: string): void {
        this.items.remove(productId);
    }

    updateQuantity(productId: string, quantity: number): void {
        this.items.update(productId, quantity);
    }

    applyDiscountCode(code: string): void {
        this.discountCalculator.applyDiscountCode(code);
    }

    // Shipping calculations
    calculateShippingCost(products: Product[]): number {
        const subTotal = this.priceCalculator.calculateSubtotal(products);
        return this.shippingCalculator.calculate(products, subTotal);
    }

    // Loyalty points
    calculateLoyaltyPoints(products: Product[]): number {
        const subtotal = this.priceCalculator.calculateSubtotal(products);
        return this.loyaltyPointsCalculator.calculate(products, subtotal);
    }

    // Order summary
    getOrderSummary(products: Product[]): {
        subtotal: number;
        tax: number;
        discount: number;
        shippingCost: number;
        total: number;
        loyaltyPoints: number;
    } {
        const subtotal = this.priceCalculator.calculateSubtotal(products);
        const tax = this.priceCalculator.calculateTax(subtotal);
        const discount = this.discountCalculator.calculateDiscount(subtotal);
        const shippingCost = this.calculateShippingCost(products);
        const total = subtotal + tax - discount + shippingCost;
        const loyaltyPoints = this.loyaltyPointsCalculator.calculate(
            products,
            subtotal,
        );

        return {
            subtotal,
            tax,
            discount,
            shippingCost,
            total,
            loyaltyPoints,
        };
    }
}
