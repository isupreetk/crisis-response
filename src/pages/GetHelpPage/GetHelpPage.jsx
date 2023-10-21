import './GetHelpPage.scss';
import { useParams } from 'react-router-dom';
import ExperienceComment from '../../components/ExperienceComment/ExperienceComment';

import { useState, useEffect } from 'react';

import DisasterDetailHero from '../../components/DisasterDetailHero/DisasterDetailHero';
import RecoveryTips from '../../components/RecoveryTips/RecoveryTips';

function GetHelpPage({ disasterData }) {
    const params = useParams();
    const selectedDisaster = disasterData.find((disaster => disaster.id === params.id));


    // useEffect(() => {
    //     setSelectedDisaster((disasterList.find((disaster) => disaster.id === params.id)));
    // }, [])

    console.log('current disaster experiences', selectedDisaster.experiences);


    return (
        <div className='get-help-page'>
            <DisasterDetailHero selectedDisaster={selectedDisaster} />
            <RecoveryTips selectedDisaster={selectedDisaster} />


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

// function GetHelpPage({ disasterList, selectedDisaster, setSelectedDisaster }) {



//         return (
//             <>
//                 <DisasterDetailHero selectedDisaster={selectedDisaster} />
//                 <RecoveryTips selectedDisaster={selectedDisaster} />
//             </>
//         )
//     }
export default GetHelpPage;