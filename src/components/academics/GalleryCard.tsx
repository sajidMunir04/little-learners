

interface Props {
    imagesLink: string[],
    heading: string,
    description: string
}

function GalleryCard(props : Props)
{
    return (<div>
        <div>
            <div>
                {props.imagesLink.map((item) => (<div>
                    <img src={item} alt="gallery image"/>
                </div>))}
            </div>
        </div>
        <div>
            <h4>{props.heading}</h4>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default GalleryCard;