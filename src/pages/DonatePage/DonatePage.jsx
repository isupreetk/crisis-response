import './DonatePage.scss';
import { useParams } from 'react-router-dom';
import CharityCard from '../../components/CharityCard/CharityCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEffect, useState } from 'react';

function DonatePage() {

    const params = useParams();
    const [type, setType] = useState(params.type);


    // get charity info
    useEffect(() => {
        setType(params.type);
    }, [])


    return (
        <div className='donate'>
            <SectionHeader sectionHeading={`Donate to non-profit ${type} relief funds`} />

            {/*TODO:  loop through charities with type */}

            <div className='donate__charity-cards'>
                <CharityCard logo="/images/charity/red-cross.svg" org="Canadian Red Cross" fund="BC Fires Appeal" link="https://donate.redcross.ca/page/133830/donate/1?locale=en-CA" />

                <CharityCard logo="/images/charity/united-way.svg" org="Canadian Red Cross" fund="BC Fires Appeal" link="https://donate.redcross.ca/page/133830/donate/1?locale=en-CA" />
            </div>

            <SectionHeader sectionHeading={`Donate to impacted individuals`} />




        </div>
    )
}

export default DonatePage;