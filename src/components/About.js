function About(props) {

    return (
        <aside>
            <img src={props.imageSource} alt={props.altName} />
            <h2>{props.about}</h2>
        </aside>
    )
}

export default About