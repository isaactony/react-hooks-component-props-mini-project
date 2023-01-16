function Article(props) {

    //const {title, date= "January 1, 1970", preview} = props;
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>

        </article>
    )

}
export default  Article;