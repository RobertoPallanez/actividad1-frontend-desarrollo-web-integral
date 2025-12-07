import React from 'react'
import { contactUsData } from '../../mock-data/contactUsData'
import { useFetchContactUsData } from '../hooks/useFetchContactUsData'

export default function ContactUs() {
    const { data, loading, error } = useFetchContactUsData(contactUsData);

    if (loading) return <p className='loadingPageMessage'>Loading page...</p>;
    if (error) return <p>Failed to load data: {error}</p>;

    return (
        <div className='contactUsContainer'>
            <div className='contactUsHeaderSection'>
                <h1 className='contactUsHeader'>CONTACT US</h1>
                <div className='contactUsMethodContainer'>
                    <h3>{data.contact1?.contactName}</h3>
                    <p className='contactUsMethodParagraph'>
                        {data.contact1?.contactDescription}
                    </p>
                    <p className='contactEmailParagraph'>{data.contact1?.contactEmail}</p>
                </div>
                <div className='contactUsMethodContainer'>
                    <h3>{data.contact2?.contactName}</h3>
                    <p className='contactUsMethodParagraph'>
                        {data.contact2?.contactDescription}
                    </p>
                    <p className='contactEmailParagraph'>{data.contact2?.contactEmail}</p>
                </div>
                <div className='contactUsMethodContainer'>
                    <h3>{data.contact3?.contactName}</h3>
                    <p className='contactUsMethodParagraph'>
                        {data.contact3?.contactDescription}
                    </p>
                    <p className='contactEmailParagraph'>{data.contact3?.contactEmail}</p>
                </div>
            </div>
        </div>
    )
}
