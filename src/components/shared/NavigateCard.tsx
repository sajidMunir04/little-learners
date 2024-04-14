interface Props{
    heading: string,
    description: string,
    link: string
}


function NavigateCard(props : Props) {
    return (<div>
        <div>
            <div>
                <h3>{props.heading}</h3>
            </div>
            <div>

            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
        <div>
            <a href={props.link}>Learn More</a>
        </div>
    </div>);
}

export default NavigateCard;