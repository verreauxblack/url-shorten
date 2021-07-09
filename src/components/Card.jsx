const Card = ({ img, h1, p }) => {
    return (
        <div className="card">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    )
}

export default Card
