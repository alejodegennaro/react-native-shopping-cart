export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

export function removeItemFromCart(item,index) {
    return {
        type: CART_REMOVE_ITEM,
        item,
        index
    };
}
