export const SUBSCRIPTION_PRODUCTS = {
  MONTHLY: {
    title: "IntelGain Monthly Subscription",
    price: 10.00,
    currency: "USD",
    type: "subscription" as const,
    recurring_interval: "month" as const,
    description: "Monthly access to IntelGain's professional data search platform",
    gateways: ["STRIPE", "PAYPAL", "BITCOIN", "ETHEREUM"],
    webhook_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/sellix`,
    white_label: false,
    delivery_text: "Thank you for subscribing to IntelGain!",
    quantity_min: 1,
    quantity_max: 1,
    recurring: true,
    recurring_interval_count: 1,
    trial_period: 0
  },
  YEARLY: {
    title: "IntelGain Yearly Subscription",
    price: 100.00, // 10.00 * 12 - 20% discount
    currency: "USD",
    type: "subscription" as const,
    recurring_interval: "year" as const,
    description: "Yearly access to IntelGain's professional data search platform (20% discount)",
    gateways: ["STRIPE", "PAYPAL", "BITCOIN", "ETHEREUM"],
    webhook_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/sellix`,
    white_label: false,
    delivery_text: "Thank you for subscribing to IntelGain!",
    quantity_min: 1,
    quantity_max: 1,
    recurring: true,
    recurring_interval_count: 1,
    trial_period: 0
  }
};