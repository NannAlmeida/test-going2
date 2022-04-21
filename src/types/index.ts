export type CartType = {
    id: string;
    quantity: number;
};

export type HomeCardItemProps = {
    name: string;
    imageUrl: string;
    price: number;
    isAddedInCart: boolean;
    onAddInCart(): void;
};
  

export type HomeContextProps = {
    products?: any[];
    cart?: CartType[];
    handleToggleItemToCart(itemId: string): void;
};
