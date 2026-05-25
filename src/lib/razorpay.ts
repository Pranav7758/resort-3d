export const initializeRazorpay = (amount: number, currency: string = "USD") => {
  return new Promise((resolve) => {
    console.log(`Initializing Razorpay for ${amount} ${currency}...`);
    setTimeout(() => {
      resolve({
        id: "pay_" + Math.random().toString(36).substring(7),
        status: "created",
      });
    }, 1000);
  });
};
