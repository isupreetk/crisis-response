import './LandingPage.scss';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
// import Button from '../../components/Button/Button';
import DisasterList from '../../components/DisasterList/DisasterList';

//data
import disasterData from '../../data/disasters.json';

//components
import Mission from '../../components/Mission/Mission';
import Support from '../../components/Support/Support';

function LandingPage() {
    return (
        <>
            <HeroBanner />

            <DisasterList disasterData={disasterData} />

            {/* <div className='button-examples'>
                <p>Button examples</p>
                <Button text="get help" />
                <Button disabled={true} text='share your story' />
                <Button modifier="--secondary" text='donate' />
            </div> */}

            <Mission />
            <Support />
        </>
    )
}

export default LandingPage;
