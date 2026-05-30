import { beforeEach, describe, expect, it } from "vitest";

import { CartItem, CartItemCollection } from "./CartItemCollection";

describe("CartItemCollection", () => {
  let cart: CartItemCollection;

  // Initialize a fresh cart before each test ensures test isolation
  beforeEach(() => {
    cart = new CartItemCollection();
  });

  // --- GET ALL ---
  describe("getAll()", () => {
    it("returns an empty array when the cart is newly initialized", () => {
      expect(cart.getAll()).toEqual([]);
    });

    it("returns an array of all CartItems currently in the cart", () => {
      cart.add("prod-1", 2);
      cart.add("prod-2", 5);

      const items = cart.getAll();

      expect(items).toHaveLength(2);
      expect(items[0]).toBeInstanceOf(CartItem);
      expect(items[0]).toEqual({ productId: "prod-1", quantity: 2 });
      expect(items[1]).toEqual({ productId: "prod-2", quantity: 5 });
    });
  });

  // --- ADD ---
  describe("add()", () => {
    it("adds a new product to the collection if it does not exist", () => {
      cart.add("prod-1", 3);
      expect(cart.getAll()).toEqual([{ productId: "prod-1", quantity: 3 }]);
    });

    it("increments the quantity if the product already exists in the cart", () => {
      cart.add("prod-1", 3);
      cart.add("prod-1", 4);

      const items = cart.getAll();
      expect(items).toHaveLength(1);
      expect(items[0]).toEqual({ productId: "prod-1", quantity: 7 });
    });

    it("throws an error when adding an item with a quantity of 0", () => {
      expect(() => cart.add("prod-1", 0)).toThrow(
        "Quantity must be greater than zero",
      );
    });

    it("throws an error when adding an item with a negative quantity", () => {
      expect(() => cart.add("prod-1", -2)).toThrow(
        "Quantity must be greater than zero",
      );
    });
  });

  // --- UPDATE ---
  describe("update()", () => {
    it("updates an existing product to a new positive quantity", () => {
      cart.add("prod-1", 5);
      cart.update("prod-1", 10);

      expect(cart.getAll()).toEqual([{ productId: "prod-1", quantity: 10 }]);
    });

    it("creates the product if it does not exist and the update quantity is positive", () => {
      // Because of how the update method is written, setting a new ID directly adds it
      cart.update("prod-new", 4);

      expect(cart.getAll()).toEqual([{ productId: "prod-new", quantity: 4 }]);
    });

    it("removes the product if the updated quantity is exactly 0", () => {
      cart.add("prod-1", 5);
      cart.update("prod-1", 0);

      expect(cart.getAll()).toHaveLength(0);
    });

    it("removes the product if the updated quantity is negative", () => {
      cart.add("prod-1", 5);
      cart.update("prod-1", -3);

      expect(cart.getAll()).toHaveLength(0);
    });
  });

  // --- REMOVE ---
  describe("remove()", () => {
    it("removes an existing product from the cart completely", () => {
      cart.add("prod-1", 2);
      cart.add("prod-2", 4);

      cart.remove("prod-1");

      const items = cart.getAll();
      expect(items).toHaveLength(1);
      expect(items[0].productId).toBe("prod-2");
    });

    it("does nothing and does not throw if attempting to remove a non-existent product", () => {
      cart.add("prod-1", 2);

      expect(() => cart.remove("prod-999")).not.toThrow();
      expect(cart.getAll()).toHaveLength(1);
    });
  });
});
