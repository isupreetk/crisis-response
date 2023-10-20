import './LandingPage.scss';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Button from '../../components/Button/Button';
import Support from '../../components/Support/Support';


function LandingPage() {
    return (
        <>
            <HeroBanner />
            <Button text="Button" />
            <Support />
        </>
    )
}

export default LandingPage;
