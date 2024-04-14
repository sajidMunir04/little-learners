
interface Props {
    subText: string,
    heading: string,
    description: string
}


function PageBanner(props : Props)
{
    return (<div>
        <div>
            <div>
                <div>
                    <p>{props.subText}</p>
                </div>
                <h1>{props.heading}</h1>
            </div>
        </div>
        <div>
            <div><p>{props.description}</p></div>   
        </div>
    </div>);
}

export default PageBanner;