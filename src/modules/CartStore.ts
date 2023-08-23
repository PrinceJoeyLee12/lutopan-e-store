import { Store } from 'pullstate';

export const CartStore = new Store({
  total: 0,
  product_ids: [],
});

export const addToCart = (categorySlug: string, productID: string) => {
  CartStore.update((s: any) => {
    s.product_ids = [
      ...s.product_ids,
      `${categorySlug}/${parseInt(productID)}`,
    ];
  });
};

export const removeFromCart = (productIndex: any) => {
  CartStore.update((s) => {
    s.product_ids.splice(productIndex, 1);
  });
};
