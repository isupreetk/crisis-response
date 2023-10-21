import "./DisasterDetailHero.scss";
import Map from "../../assets/images/map-mcdougall-wildfire.svg";
import Button from "../Button/Button";

function DisasterDetailHero({ selectedDisaster }) {

    // console.log("disaster detail hero", selectedDisaster);

    return (
        <section className="disaster-detail-hero">
            <h3>{selectedDisaster?.name}</h3>
            <h5>{selectedDisaster?.location}</h5>
            <img src={Map} alt="location on map" />
            {/* <img src={selectedDisaster?.mapPhoto} alt="location on map" /> */}

            <div className="disaster-detail-hero__about-section">
                <span><strong>Started on: </strong>{selectedDisaster?.startDateText}</span>
                <h3>Impact</h3>
            </div>
            <div className="disaster-detail-hero__impact-section">
                <div className="disaster-detail-hero__impact-1">
                    <p>{selectedDisaster?.impacts[0].value}</p>
                    <p>{selectedDisaster?.impacts[0].metric}</p>
                </div>
                <div className="disaster-detail-hero__impact-1">
                    <p>{selectedDisaster?.impacts[1].value}</p>
                    <p>{selectedDisaster?.impacts[1].metric}</p>
                </div>
                <div className="disaster-detail-hero__impact-1">
                    <p>{selectedDisaster?.impacts[2].value}</p>
                    <p>{selectedDisaster?.impacts[2].metric}</p>
                </div>
            </div>
            <div className="disaster-detail-hero__button">
                <Button modifier="--secondary" text='donate now' />
            </div>
        </section>
    )
}

export default DisasterDetailHero;