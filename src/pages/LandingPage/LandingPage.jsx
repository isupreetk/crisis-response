import './LandingPage.scss';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Button from '../../components/Button/Button';
import Support from '../../components/Support/Support';


function LandingPage() {
    return (
        <>
            <HeroBanner />


            <div className='button-examples'>
                <p>Button examples</p>
                <Button text="get help" />
                <Button disabled={true} text='share your story' />
                <Button modifier="--secondary" text='donate' />

            </div>
            <Support />

        </>
    )
}

export default LandingPage;
