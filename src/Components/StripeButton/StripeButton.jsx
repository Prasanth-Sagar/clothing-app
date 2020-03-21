import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_CvoC9ALfZiKFSPjZSjBNElSi00gLI7ZwB1';

  const onToken = token => {
    console.log('TOKEN OBJECT --> ',token);
    alert('Payment Successful')
  }

  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='Clothing App'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeCheckoutButton;