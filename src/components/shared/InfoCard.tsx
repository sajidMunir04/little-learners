
interface Props{
    heading: string,
    description: string,
    imageLink: string
}


function InfoCard(props : Props)
{
    return (<div>
        <div>
            <div>
                <img src={props.imageLink}/>
            </div>
        </div>
        <div>
            <p>{props.heading}</p>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default InfoCard;