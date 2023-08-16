export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
export const updateCart = (state) => {
  debugger;
  // calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  /* calculate shipping price
   * if total is more than 100 then free else 10
   * */
  state.shippingPrice = addDecimals(state.itemsPrice >= 100 ? 0 : 10);

  /* calculate tax price
   * 15% of the items
   */
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  /* calculate total price
   *Sum of all
   */
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));
};
