interface Props {
    imageLink: string,
    heading: string,
    description: string
}


function EventCard(props : Props)
{
    return (<div>
        <div>
            <div>

            </div>
            <div>
                <div>
                    <img src={props.imageLink} alt="event image"/>
                </div>
            </div>
        </div>
        <div>
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default EventCard;