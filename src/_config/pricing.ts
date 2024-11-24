const pricing = {
    monthly: Number(import.meta.env.PUBLIC_MONTHLY_PRICE),
    yearly: Number(import.meta.env.PUBLIC_YEARLY_PRICE),
};

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

export default pricing;
