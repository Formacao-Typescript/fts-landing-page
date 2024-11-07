const pricing = {
  monthly: parseFloat(import.meta.env.PUBLIC_MONTHLY_PRICE),
  yearly: parseFloat(import.meta.env.PUBLIC_YEARLY_PRICE),
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export default pricing;
