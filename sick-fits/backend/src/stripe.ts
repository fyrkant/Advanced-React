import stripe from 'stripe';

export default new stripe(process.env.STRIPE_SECRET as string);
