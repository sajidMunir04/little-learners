interface Props{
    text: string
}


function HeadingSubText(props : Props)
{
    return (<div><p>{props.text}</p></div>);
}

export default HeadingSubText;