interface Props{
    imageLink: string,
    courseName: string,
    courseDescription: string
}

function CourseCard(props : Props)
{
    return (<div>
        <div>

        </div>
        <div>
            <div>
                <img src={props.imageLink} alt="course info image"/>
            </div>
            <div>
                <p>{props.courseName}</p>
                <p>{props.courseDescription}</p>
            </div>
        </div>
    </div>);
}

export default CourseCard;