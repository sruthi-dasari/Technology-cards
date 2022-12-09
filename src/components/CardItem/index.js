// Write your code here.

import './index.css'

const CardDetails = props => {
  const {cardInfo} = props
  const {title, description, imgUrl, className} = cardInfo

  return (
    <li className={`card ${className}`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-content">{description}</p>
      <img src={imgUrl} alt={title} className="logo" />
    </li>
  )
}

export default CardDetails
