import DisasterDetailHero from '../../components/DisasterDetailHero/DisasterDetailHero';
import './GetHelpPage.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function GetHelpPage({ disasterList, selectedDisaster, setSelectedDisaster }) {

    const params = useParams();

    useEffect(() => {
        setSelectedDisaster((disasterList.find((disaster) => disaster.id === params.id)));
    }, [])

    return (
        <>
            <DisasterDetailHero selectedDisaster={selectedDisaster} />
        </>
    )
}

export default GetHelpPage;