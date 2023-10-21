import './GetHelpPage.scss';
import { useParams } from 'react-router-dom';
import ExperienceComment from '../../components/ExperienceComment/ExperienceComment';

function GetHelpPage({ disasterData }) {
    const params = useParams();
    const currentDisaster = disasterData.filter((disaster => disaster.id === params.id))[0];
    console.log('current disaster experiences', currentDisaster.experiences);
    return (
        <div className='get-help-page'>
            <h1>Get Help Page for {currentDisaster.name}</h1>

            {/* make into component */}
            <div className='comment-cards'>
                {
                    currentDisaster.experiences.map(
                        experience => <ExperienceComment key={experience.id} experience={experience} />
                    )}
            </div>

        </div>
    )
}

export default GetHelpPage;