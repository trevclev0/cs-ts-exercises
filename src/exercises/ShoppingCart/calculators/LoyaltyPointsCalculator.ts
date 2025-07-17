import { Customer } from "../Customer";
import { Product } from "../Product";
import { CartItemCollection } from "../CartItemCollection";

export class LoyaltyPointsCalculator {
    constructor(
        private readonly customer: Customer,
        private readonly items: CartItemCollection,
    ) {
        // This constructor does nothing
    }

    calculate(products: Product[], subtotal: number): number {
        // Base points
        let points = Math.floor(subtotal / 10);

        // Bonus points for electronics
        points += this.items.getAll().reduce((bonus, item) => {
            const product = products.find(
                (product) => product.id === item.productId,
            );
            if (product?.category === "electronics") {
                return bonus + item.quantity * 5;
            }
            return bonus;
        }, 0);

        // VIP multiplier
        if (this.customer.priceLevel === "vip") {
            points *= 2;
        }

        return points;
    }
}
