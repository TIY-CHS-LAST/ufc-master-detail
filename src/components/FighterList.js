import React, { Component } from 'react'
import FighterCard from './FighterCard'
import { connect } from 'react-redux'
import { getFighters } from '../actions'

const FighterList = function (props) {
    console.log(props);
    const getPeople = function() {
      props.dispatch(getFighters())
    }
    return (
      <section className="fighters">
        <button onClick={e => getPeople()}>get people</button>
        {props.fighters
          ? props.fighters.map(fighter => <FighterCard key={fighter.id} fighter={fighter} />)
          : null }
      </section>
    )

}

function mapStateToProps (state) {
  return {
    fighters: state.fighterReducer.fighters
  }
}


export default connect(mapStateToProps)(FighterList);
