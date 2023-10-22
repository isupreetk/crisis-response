import './DonatePage.scss';
import { useParams } from 'react-router-dom';
import CharityCard from '../../components/CharityCard/CharityCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEffect, useState } from 'react';
import ExperienceList from '../../components/ExperienceList/ExperienceList';
import charityData from '../../data/charities.json';

function DonatePage({ disasterData }) {

    const params = useParams();
    const [type, setType] = useState(params.type);
    const [experiences, setExperiences] = useState();


    useEffect(() => {
        setType(params.type);
        setExperiences(
            disasterData
                .filter(disaster => disaster.type === params.type)
                .map(disaster => disaster.experiences)
                .flat()
        );
    }, [params])


    return (
        <div className='donate'>

            <div className='donate__header'>

                <SectionHeader
                    sectionHeading={`Donate to non-profit ${type} relief funds`}
                />

                <div className='donate__charity-cards'>

                    {
                        charityData
                            .filter(charity => charity.type === type)
                            .map((charity, index) => <CharityCard charity={charity} key={index} />)
                    }

                </div>

            </div>





            <SectionHeader
                sectionHeading={`Donate to impacted individuals`}
            />

            <ExperienceList
                experiences={experiences}
            />


        </div>
    )
}

export default DonatePage;