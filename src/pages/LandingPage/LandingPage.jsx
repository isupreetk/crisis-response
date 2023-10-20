import './LandingPage.scss';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Button from '../../components/Button/Button';


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

        </>
    )
}

export default LandingPage;
