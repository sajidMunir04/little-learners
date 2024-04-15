interface Props{
    index: string,
    heading: string,
    description: string
}


function AdmissionProcessCard(props : Props)
{
    return (<div>
        <div>
            <div>
                <p>{props.index}</p>
            </div>
        </div>
        <div>
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default AdmissionProcessCard;