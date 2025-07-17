export interface Customer {
    id: string;
    name: string;
    email: string;
    address: string;
    loyaltyPoints: number;
    priceLevel: CustomerPriceLevel;
}

export type CustomerPriceLevel = "regular" | "premium" | "vip";
