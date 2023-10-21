import "./SectionHeader.scss";

function SectionHeader(props) {
    return (
        <section className="section">
            <h1 className="section-heading">{props.sectionHeading}</h1>
        </section>
    )
}

export default SectionHeader;