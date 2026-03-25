export function Posts({title, description}) {
    return (
        <div className={"posts box"}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}