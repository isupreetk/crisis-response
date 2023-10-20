import DisasterCard from "../DisasterCard/DisasterCard";
import './DisasterList.scss';
import ongoing from '../../assets/icons/ongoing.svg';


function DisasterList({ disasterData }) {

    console.log(disasterData)

    return (
        <div className="disaster-list">

            <p>TITLE HERE</p>
            {disasterData.map((disaster) => <DisasterCard key={disaster.id} disaster={disaster} />)}


        </div>
    )
}

export default DisasterList;