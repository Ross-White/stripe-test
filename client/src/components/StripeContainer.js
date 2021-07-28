import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51JIBwAB1wXXdtPu0AawJONWu7mSz3W6pNFEjn1PzcdqUYVNi1foru7ZC72XHzymRQHT9F5hk9fwwvED1d9f1olnm008j5uPzFY"

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}