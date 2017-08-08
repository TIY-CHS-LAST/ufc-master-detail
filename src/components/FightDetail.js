import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentFighter } from '../actions'

const FighterDetail = function (props) {
  props.dispatch(getCurrentFighter(props.match.params.fighterId))
  return (
    <section className='detail'>
      {props.fighter.first_name ? <section>
        <div className='division'>${props.fighter.weight_class}</div>
        <img
          src={props.fighter.left_full_body_image}
          alt={` ${props.fighter.first_name} ${props.fighter.last_name} `}
            />
        <p className='name'>
          {props.fighter.first_name} {props.fighter.last_name}
        </p>
        <p className='record'>
          {props.fighter.wins}
              -
              {props.fighter.losses}
              -
              {props.fighter.draws}
          {' '}( W-L-D )
            </p>
        <Link to='/'>Go Home</Link>
      </section> : <h1>Sorry!!</h1>}
    </section>
  )
}

const mapStateToProps = state => {
  return { fighter: state.fighterReducer.currentFighter }
}

export default connect(mapStateToProps)(FighterDetail)
