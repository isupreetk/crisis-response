import "./Support.scss";
import Button from "../Button/Button";

function Support() {
    return (
        <section className="support">
            <h3 className="support__title">Support Those Impacted</h3> 
            <span className="support__statement">Explore the different ways you can help those impacted by natural disasters within B.C.</span>
            <Button modifier="--secondary" text='donate' className="button button--secondary support__button" />
        </section>
    )
}

export default Support;