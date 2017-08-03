import React from 'react'

const FighterCard = function (props) {
  return (
    <section className="fighter">
      <div className="division">${props.fighter.weight_class}</div>
      <img src={props.fighter.profile_image} alt={` ${props.fighter.first_name} ${props.fighter.last_name} `} />
      <p className="name">{props.fighter.first_name} {props.fighter.last_name}</p>
      <p className="record">{props.fighter.wins}-{props.fighter.losses}-{props.fighter.draws} ( W-L-D )</p>
      <button>More</button>
    </section>
  )
}

export default FighterCard;
