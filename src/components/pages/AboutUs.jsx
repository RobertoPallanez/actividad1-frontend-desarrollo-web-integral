import React from 'react'
import { aboutUsData } from '../../mock-data/aboutUsData'
import { useFetchAboutUsData } from '../hooks/useFetchAboutUsData'

export default function AboutUs() {
    const { data, loading, error } = useFetchAboutUsData(aboutUsData);

    if (loading) return <p className='loadingPageMessage'>Loading page...</p>;
    if (error) return <p>Failed to load data: {error}</p>;

    return (
        <div className='aboutUsPageContainer'>
            <div className='aboutUsHeaderSection'>
                <h1>ABOUT GAMEZONE</h1>
                <h2>{data?.aboutUsHeader}</h2>
                <p>{data?.whoAreWeData}</p>
            </div>
            <div className='aboutUsBulletPointsContainer'>
                <div className='aboutUsBulletPoint'>
                    <img className='aboutUsBulletPointIcon' src={data?.bulletPoint1?.icon} />
                    <span>{data?.bulletPoint1?.text}</span>
                </div>
                <div className='aboutUsBulletPoint'>
                    <img className='aboutUsBulletPointIcon' src={data?.bulletPoint2?.icon} />
                    <span>{data?.bulletPoint2?.text}</span>
                </div>
                <div className='aboutUsBulletPoint'>
                    <img className='aboutUsBulletPointIcon' src={data?.bulletPoint3?.icon} />
                    <span>{data?.bulletPoint3?.text}</span>
                </div>
                <div className='aboutUsBulletPoint'>
                    <img className='aboutUsBulletPointIcon' src={data?.bulletPoint4?.icon} />
                    <span>{data?.bulletPoint4?.text}</span>
                </div>
            </div>
        </div>
    )
}
