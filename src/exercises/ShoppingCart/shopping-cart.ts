// types.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    weight: number;
    category: string;
    inStock: boolean;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    address: string;
    loyaltyPoints: number;
    priceLevel: "regular" | "premium" | "vip";
}

export class CartItem {
    constructor(
        public productId: string,
        public quantity: number,
    ) {
        // This constructor does nothing
    }
}

class CartItemCollection {
    private items: Map<string, CartItem> = new Map();

    add(productId: string, quantity: number): void {
        const currentItem = this.items.get(productId);
        if (currentItem) {
            currentItem.quantity += quantity;
        } else {
            this.items.set(productId, new CartItem(productId, quantity));
        }
    }

    update(productId: string, quantity: number): void {
        if (quantity <= 0) {
            this.remove(productId);
        } else {
            this.items.set(productId, new CartItem(productId, quantity));
        }
    }

    remove(productId: string): void {
        this.items.delete(productId);
    }

    getAll(): CartItem[] {
        return Array.from(this.items.values());
    }
}

export class PriceCalculator {
    private readonly TAX_RATE = 0.1;

    constructor(
        private readonly customer: Customer,
        private readonly items: CartItemCollection,
    ) {
        // This constructor does nothing
    }

    calculateItemPrice(product: Product): number {
        let price = product.price;
        switch (this.customer.priceLevel) {
            case "premium":
                price *= 0.9;
                break;
            case "vip":
                price *= 0.85;
                break;
        }
        return price;
    }

    calculateSubtotal(products: Product[]): number {
        return this.items.getAll().reduce((total, item) => {
            const product = products.find(
                (product) => product.id === item.productId,
            );
            if (product) {
                return total + this.calculateItemPrice(product) * item.quantity;
            }
            return total;
        }, 0);
    }

    calculateTax(subtotal: number): number {
        return subtotal * this.TAX_RATE;
    }
}

export class DiscountCalculator {
    private discountCode?: string;

    applyDiscountCode(code: string): void {
        // Simplified discount code validation
        if (["SAVE10", "SUMMER20", "VIP15"].includes(code)) {
            this.discountCode = code;
        } else {
            throw new Error("Invalid discount code");
        }
    }

    calculateDiscount(subtotal: number): number {
        if (!this.discountCode) return 0;

        switch (this.discountCode) {
            case "SAVE10":
                return subtotal * 0.1;
            case "SUMMER20":
                return subtotal * 0.2;
            case "VIP15":
                return subtotal * 0.15;
            default:
                return 0;
        }
    }
}

// ShoppingCart.ts
export class ShoppingCart {
    private items = new CartItemCollection();
    private priceCalculator: PriceCalculator;
    private customer: Customer;
    private discountCalculator: DiscountCalculator;

    constructor(customer: Customer) {
        this.customer = customer;
        this.priceCalculator = new PriceCalculator(customer, this.items);
        this.discountCalculator = new DiscountCalculator();
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

    // Shipping calculations
    calculateShippingCost(products: Product[]): number {
        const subTotal = this.priceCalculator.calculateSubtotal(products);

        let totalWeight = 0;
        for (const { productId, quantity } of this.items.getAll()) {
            const product = products.find(
                (product) => product.id === productId,
            );
            if (product) {
                totalWeight += product.weight * quantity;
            }
        }

        // Base shipping rate calculation
        const shippingCost = 5 + totalWeight * 0.1;

        // Free shipping for VIP customers or orders over $100
        if (this.customer.priceLevel === "vip" || subTotal > 100) {
            return 0;
        }

        return shippingCost;
    }

    applyDiscountCode(code: string) {
        this.discountCalculator.applyDiscountCode(code);
    }

    // Loyalty points
    calculateLoyaltyPoints(products: Product[]): number {
        let points = 0;
        const subtotal = this.priceCalculator.calculateSubtotal(products);

        // Base points: 1 point per $10 spent
        points += Math.floor(subtotal / 10);

        // Bonus points for specific categories
        for (const { productId, quantity } of this.items.getAll()) {
            const product = products.find(
                (product) => product.id === productId,
            );
            if (product && product.category === "electronics") {
                points += quantity * 5;
            }
        }

        // VIP customers get double points
        if (this.customer.priceLevel === "vip") {
            points *= 2;
        }

        return points;
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
        const loyaltyPoints = this.calculateLoyaltyPoints(products);

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
