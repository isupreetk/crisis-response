import './LandingPage.scss';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Button from '../../components/Button/Button';
import DisasterList from '../../components/DisasterList/DisasterList';

//data
import disasterData from '../../data/disasters.json';

function LandingPage() {
    return (
        <>
            <HeroBanner />

            <DisasterList disasterData={disasterData} />
            <div className='button-examples'>
                <p>Button examples</p>
                <Button text="get help" />
                <Button disabled={true} text='share your story' />
                <Button modifier="--secondary" text='donate' />

            </div>

        </>
    )
}

export default LandingPage;
