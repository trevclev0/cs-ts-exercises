export class CartItem {
    constructor(
        public productId: string,
        public quantity: number,
    ) {
        // This constructor does nothing
    }
}

export class CartItemCollection {
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
