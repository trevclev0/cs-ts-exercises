export class CartItem {
    /**
     * Constructor for CartItem. This does not do anything, all values
     * are assigned through the public properties.
     * @param productId The id of the product
     * @param quantity The quantity of the product in the cart
     */
    constructor(
        public productId: string,
        public quantity: number,
    ) {
        // This constructor does nothing
    }
}

export class CartItemCollection {
    private items: Map<string, CartItem> = new Map();

    /**
     * Adds a product to the collection or updates the quantity if it already exists.
     * @param productId - The identifier of the product to add.
     * @param quantity - The quantity of the product to add.
     */

    add(productId: string, quantity: number): void {
        const currentItem = this.items.get(productId);
        if (currentItem) {
            currentItem.quantity += quantity;
        } else {
            this.items.set(productId, new CartItem(productId, quantity));
        }
    }

    /**
     * Updates the quantity of the product in the cart. If the quantity is less than
     * or equal to 0, the product is removed from the cart.
     * @param productId - The identifier of the product to update.
     * @param quantity - The new quantity of the product.
     */
    update(productId: string, quantity: number): void {
        if (quantity <= 0) {
            this.remove(productId);
        } else {
            this.items.set(productId, new CartItem(productId, quantity));
        }
    }

    /**
     * Removes a product from the collection.
     * @param productId - The identifier of the product to remove.
     */
    remove(productId: string): void {
        this.items.delete(productId);
    }

    /**
     * Gets all items in the cart.
     * @returns An array of CartItem
     */
    getAll(): CartItem[] {
        return Array.from(this.items.values());
    }
}
