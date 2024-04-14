
interface Props {
    authorImageLink: string,
    authorName: string,
    rating: number,
    review: string
}


function TestimonialCard(props : Props)
{
    return (<div>
        <div>
            <div>
                <img src={props.authorImageLink}/>
            </div>
            <p>{props.authorName}</p>
        </div>
        <div>

        </div>
        <div>
            <p>{props.review}</p>
        </div>
    </div>);
}

export default TestimonialCard;