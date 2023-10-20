import './LandingPage.scss';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Button from '../../components/Button/Button';
import DisasterList from '../../components/DisasterList/DisasterList';

//data
import disasterData from '../../data/disasters.json';
import Support from '../../components/Support/Support';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

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

            <SectionHeader sectionHeading="Example Section Heading" />

            <Support />

        </>
    )
}

export default LandingPage;
