interface Props{
    description: string
}

function SectionDescription(props : Props)
{
    return (<p>{props.description}</p>);
}

export default SectionDescription;