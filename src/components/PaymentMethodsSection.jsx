import React from 'react'
import visaLogo from '../assets/visa-logo.svg'
import mastercardLogo from '../assets/mastercard-logo.svg'
import paypalLogo from '../assets/paypal-logo.svg'
import paysafeCardLogo from '../assets/paysafecard-logo.svg'
import oxxoLogo from '../assets/oxxo-logo.svg'
import googlePay from '../assets/google-pay-logo.svg'

export default function PaymentMethodsSection() {
    return (
        <div className='paymentMethodsBar'>
            <ul className='paymentMethodsList'>
                <li><img className='paymentMethodsLogo' src={visaLogo} /></li>
                <li><img className='paymentMethodsLogo' src={mastercardLogo} /></li>
                <li><img className='paymentMethodsLogo' src={paypalLogo} /></li>
                <li><img className='paymentMethodsLogo' src={paysafeCardLogo} /></li>
                <li><img className='paymentMethodsLogo' src={oxxoLogo} /></li>
                <li><img className='paymentMethodsLogo' src={googlePay} /></li>
            </ul>
        </div>
    )
}
