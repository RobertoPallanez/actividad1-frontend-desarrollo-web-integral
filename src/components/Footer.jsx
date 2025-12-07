import React from 'react'
import PaymentMethodsSection from './PaymentMethodsSection'
import AboutAndOthersSection from './AboutAndOthersSection'
import PrivacyPolicySection from './PrivacyPolicySection'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <PaymentMethodsSection />
                <AboutAndOthersSection />
                <PrivacyPolicySection />
            </div>
        </div>
    )
}
