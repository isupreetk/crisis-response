import "./Support.scss";
import Button from "../Button/Button";
import AlternateSectionHeader from "../AlternateSectionHeader/AlternateSectionHeader";

function Support() {
    return (
        <section className="support">
            <AlternateSectionHeader alternateSectionHeading="Support Those Impacted" />
            {/* <h3 className="support__title">Support Those Impacted</h3> */}
            <span className="support__statement">Explore the different ways you can help those impacted by natural disasters within B.C.</span>
            <div className="support__button-container">
                <Button modifier="--secondary" text='donate' />
            </div>
        </section>
    )
}

export default Support;