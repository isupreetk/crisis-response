import './CharityCard.scss';
import Button from '../Button/Button';

function CharityCard({ logo, org, fund, link }) {

    return (
        <div className="charity-card">
            <img src={logo} alt="charity logo" className="charity-card__img" />

            <h4 className='charity-card__organization-name'>{org}</h4>

            <p className="charity-card__fund">{fund}</p>
            <Button text="Visit page" modifier="--secondary" />
        </div>
    )


}

export default CharityCard;