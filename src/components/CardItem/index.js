// Write your code here.
const CardItem = props => {
  const {cardsDetails} = props
  const {title, description, imageUrl, className} = cardsDetails
  return (
    <li className={`${className} card-container`}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-description"> {description} </p>
      <div className="card-image-container">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
