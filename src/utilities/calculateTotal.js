const calculateTotal = (cart) => {
  if (cart) {
    const count = cart.reduce((sum, product) => {
      return sum + product.quantity;
    }, 0);

    const prices = cart.map((product) => product.price * product.quantity);

    const total = prices.reduce((sum, price) => {
      return sum + price;
    }, 0);

    const tax = (total * 15) / 100;
    const shipping = total ? 5.5 : 0;
    const discount = (total * 20) / 100;
    const final = (total + shipping + tax - discount).toFixed(2);

    return { count, tax, shipping, discount, total, final };
  }

  return {
    count: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    final: 0,
    total: 0,
  };
};

export default calculateTotal;
