const pricing = {
  monthly: 32.93,
  yearly: 329.99,
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export default pricing;
