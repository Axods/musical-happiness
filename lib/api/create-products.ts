import { SUBSCRIPTION_PRODUCTS } from './sellix-config';
import { createSellixProduct } from './sellix';

export async function createSubscriptionProducts() {
  try {
    // Create monthly subscription product
    const monthlyProduct = await createSellixProduct(SUBSCRIPTION_PRODUCTS.MONTHLY);
    console.log('Created monthly subscription product:', monthlyProduct);

    // Create yearly subscription product
    const yearlyProduct = await createSellixProduct(SUBSCRIPTION_PRODUCTS.YEARLY);
    console.log('Created yearly subscription product:', yearlyProduct);

    return {
      monthly: monthlyProduct,
      yearly: yearlyProduct
    };
  } catch (error) {
    console.error('Failed to create subscription products:', error);
    throw error;
  }
}