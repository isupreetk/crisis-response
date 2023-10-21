import "./DisasterDetailHero.scss";
import Map from "../../assets/images/map-mcdougall-wildfire.svg";
import Button from "../Button/Button";
import AlternateSectionHeader from "../AlternateSectionHeader/AlternateSectionHeader";

function DisasterDetailHero({ selectedDisaster }) {

    // console.log("disaster detail hero", selectedDisaster);

    return (
        <section className="disaster-detail-hero">
            <h3 className="disaster-detail-hero__disaster-name">{selectedDisaster?.name}</h3>
            <AlternateSectionHeader alternateSectionHeading={selectedDisaster?.location} />
            <img src={Map} alt="location on map" />
            {/* <img src={selectedDisaster?.mapPhoto} alt="location on map" /> */}

            <div className="disaster-detail-hero__about-section">
                <span><strong>Started on: </strong>{selectedDisaster?.startDateText}</span>
                <AlternateSectionHeader alternateSectionHeading="Impact" />
            </div>
            <div className="disaster-detail-hero__impact-section">
                <div className="disaster-detail-hero__impact-1">
                    <p className="disaster-detail-hero__impact-value">{selectedDisaster?.impacts[0].value}</p>
                    <p className="disaster-detail-hero__impact-metric">{selectedDisaster?.impacts[0].metric}</p>
                </div>
                <div className="disaster-detail-hero__impact-1">
                    <p className="disaster-detail-hero__impact-value">{selectedDisaster?.impacts[1].value}</p>
                    <p className="disaster-detail-hero__impact-metric">{selectedDisaster?.impacts[1].metric}</p>
                </div>
                <div className="disaster-detail-hero__impact-1">
                    <p className="disaster-detail-hero__impact-value">{selectedDisaster?.impacts[2].value}</p>
                    <p className="disaster-detail-hero__impact-metric">{selectedDisaster?.impacts[2].metric}</p>
                </div>
            </div>
            <div className="disaster-detail-hero__button">
                <Button modifier="--secondary" text='donate now' />
            </div>
        </section>
    )
}

export default DisasterDetailHero;