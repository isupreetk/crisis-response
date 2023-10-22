import SectionHeader from "../SectionHeader/SectionHeader";
import RemoveIcon from "../../assets/icons/remove.svg";
import "./RecoveryTips.scss";

function RecoveryTips({ selectedDisaster }) {
    return (
        <section className="recovery-tips">
            <SectionHeader sectionHeading={selectedDisaster?.title} />
            <ol className="recovery-tips__list">
                {selectedDisaster?.tips.map((tip, index) => {
                    return (
                        <li key={index} className="recovery-tips__list-item">
                            <div className="recovery-tips__title-container">
                                <h5>{tip.title}</h5>
                                <img src={RemoveIcon} alt="remove icon" />
                            </div>
                            <p>{tip.content1}</p>
                            <p>{tip.content2}</p>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default RecoveryTips;