import DisasterCard from "../DisasterCard/DisasterCard";
import './DisasterList.scss';
import SectionHeader from "../SectionHeader/SectionHeader";


function DisasterList({ disasterData }) {

    console.log(disasterData)

    return (
        <div className="disaster-list">

            <SectionHeader sectionHeading="Natural Disasters" />
            {disasterData.map((disaster) => <DisasterCard key={disaster.id} disaster={disaster} />)}


        </div>
    )
}

export default DisasterList;