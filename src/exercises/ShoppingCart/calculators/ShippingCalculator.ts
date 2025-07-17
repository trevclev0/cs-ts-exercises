import { Customer } from "../Customer";
import { Product } from "../Product";
import { CartItemCollection } from "../CartItemCollection";

export class ShippingCalculator {
    private readonly BASE_RATE = 5;
    private readonly WEIGHT_RATE = 0.1;

    constructor(
        private readonly customer: Customer,
        private readonly items: CartItemCollection,
    ) {
        // This constructor does nothing
    }

    calculate(products: Product[], subtotal: number): number {
        if (this.customer.priceLevel === "vip" || subtotal > 100) {
            return 0;
        }

        const totalWeight = this.items.getAll().reduce((weight, item) => {
            const product = products.find(
                (product) => product.id === item.productId,
            );
            return weight + (product?.weight || 0) * item.quantity;
        }, 0);

        return this.BASE_RATE + totalWeight * this.WEIGHT_RATE;
    }
}
