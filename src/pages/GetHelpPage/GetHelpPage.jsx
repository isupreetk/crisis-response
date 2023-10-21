import './GetHelpPage.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DisasterDetailHero from '../../components/DisasterDetailHero/DisasterDetailHero';
import RecoveryTips from '../../components/RecoveryTips/RecoveryTips';

function GetHelpPage({ disasterList, selectedDisaster, setSelectedDisaster }) {

    const params = useParams();

    useEffect(() => {
        setSelectedDisaster((disasterList.find((disaster) => disaster.id === params.id)));
    }, [])

    return (
        <>
            <DisasterDetailHero selectedDisaster={selectedDisaster} />
            <RecoveryTips selectedDisaster={selectedDisaster} />
        </>
    )
}

export default GetHelpPage;