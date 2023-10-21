import './GetHelpPage.scss';
import { useParams } from 'react-router-dom';
import ExperienceComment from '../../components/ExperienceComment/ExperienceComment';

import { useState, useEffect } from 'react';

import DisasterDetailHero from '../../components/DisasterDetailHero/DisasterDetailHero';
import RecoveryTips from '../../components/RecoveryTips/RecoveryTips';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

function GetHelpPage({ disasterData }) {
    const params = useParams();

    const selectedDisaster = disasterData.find((disaster => disaster.id === params.id));

    //might want to use state later
    // const [selectedDisaster, setSelectedDisaster] = disasterData.find((disaster => disaster.id === params.id));
    // useEffect(() => {
    //     setSelectedDisaster(disasterData.find((disaster => disaster.id === params.id)));
    // }, [params])

    return (
        <div className='get-help-page'>
            <DisasterDetailHero selectedDisaster={selectedDisaster} />
            <RecoveryTips selectedDisaster={selectedDisaster} />


            <div className="get-help-page__support">
                <SectionHeader sectionHeading="Support impacted individuals" />
                <Button text="Share your story" />
            </div>



            {/* TODO: make into component */}
            <div className='comment-cards'>
                {
                    selectedDisaster.experiences.map(
                        experience => <ExperienceComment key={experience.id} experience={experience} />
                    )}
            </div>



        </div>
    )
}


export default GetHelpPage;