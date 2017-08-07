import React, { Component } from 'react'
import FighterCard from './FighterCard'
import { connect } from 'react-redux'
import { getFighters, getFighter } from '../actions'

const FighterList = function ({ fighters, getSelectedFighter }) {
  return (
    <section className='fighters'>
      {
        fighters
          ? fighters.map(fighter => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              getSelectedFighter={getSelectedFighter}
            />
          ))
          : null
      }
    </section>
  )
}

function mapStateToProps (state) {
  return { fighters: state.fighterReducer.fighters }
}
function mapDispatchToProps (dispatch) {
  return {
    getSelectedFighter: id => {
      dispatch(getFighter(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FighterList)
