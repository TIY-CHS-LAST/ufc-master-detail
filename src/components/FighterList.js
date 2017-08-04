import React, { Component } from 'react'
import FighterCard from './FighterCard'
import { connect } from 'react-redux'
import { getFighters } from '../actions'

const FighterList = function ({ fighters }) {

    return (
      <section className="fighters">
        {fighters
          ? fighters.map(fighter => <FighterCard key={fighter.id} fighter={fighter} />)
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
