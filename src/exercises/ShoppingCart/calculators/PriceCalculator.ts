import { Customer } from "../Customer";
import { Product } from "../Product";
import { CartItemCollection } from "../CartItemCollection";

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
            // 10% off
            case "premium":
                price *= 0.9;
                break;
            // 15% off
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
