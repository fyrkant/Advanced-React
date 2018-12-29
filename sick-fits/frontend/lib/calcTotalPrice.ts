export default function calcTotalPrice(cart: any) {
  return cart.reduce((tally: number, cartItem: any) => {
    if (!cartItem.item) {
      return tally;
    }
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}
