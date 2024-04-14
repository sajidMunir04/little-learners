

interface Props{
    heading: string,
    imageLink: string,
    description: string
}

function MissionCard(props : Props)
{
    return (<div>
        <div>
            <div>
                <h3>{props.heading}</h3>
            </div>
            <div>
                <img src={props.imageLink}/>
            </div>
        </div>
        <div>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default MissionCard;