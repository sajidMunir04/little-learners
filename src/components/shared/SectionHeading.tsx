interface Props {
    heading : string
}

function SectionHeading(props : Props)
{
    return (<h2>{props.heading}</h2>);
}

export default SectionHeading;