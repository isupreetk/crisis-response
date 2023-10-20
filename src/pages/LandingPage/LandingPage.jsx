import './LandingPage.scss';
import Button from '../../components/Button/Button';


function LandingPage() {
    return (
        <>
            <h1>Crisis Response App</h1>

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
