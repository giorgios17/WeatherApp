import React from 'react'

function CardComponent(props) {
  return (
    <div className="card glass shadow" style={{width: "40%"}}>
          <img className="card-img-top" src={props.image} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
            <span className="fw-bolder">{props.descrizione}</span><br/> {props.valore}
            </p>
          </div>
        </div>
  )
}

export default CardComponent