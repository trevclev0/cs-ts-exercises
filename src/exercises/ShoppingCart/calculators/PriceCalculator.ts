import type { Customer } from "../../../types/Customer";
import type { Product } from "../../../types/Product";
import type { CartItemCollection } from "../CartItemCollection";

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
    const productMap = new Map(products.map((p) => [p.id, p]));
    return this.items.getAll().reduce((total, item) => {
      const product = productMap.get(item.productId);
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
