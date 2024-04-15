

interface Props{
    imageLink: string,
    name: string,
    qualification: string,
    introduction: string
}

function TeamMemberCard(props : Props)
{
    return (<div>
        <div>
            <div>
                <div>
                    <img src={props.imageLink} alt="team member picture"/>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="/Icon(5).svg"/>
                </div>
            </div>
        </div>
        <div>
            <p>Qualification:{props.qualification}</p>
            <p>{props.introduction}</p>
        </div>
    </div>);
}

export default TeamMemberCard;