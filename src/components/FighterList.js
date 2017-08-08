import React, { Component } from 'react'
import FighterCard from './FighterCard'
import { connect } from 'react-redux'
import { getFighters, getCurrentFighter } from '../actions'
import LoadingComponent from './LoadingComponent'
class FighterList extends Component {
  componentWillMount () {
    this.props.getAllFighters()
  }

  render () {
    return (
      <section className='fighters'>
        {
          this.props.isFetching
            ? <LoadingComponent />
            : this.props.fighters
              ? this.props.fighters.map(fighter => (
                <FighterCard
                  key={fighter.id}
                  fighter={fighter}
                  getSelectedFighter={this.props.getSelectedFighter}
                />
              ))
              : null
        }
      </section>
    )
  }
}

function mapStateToProps (state) {
  return { fighters: state.fighterReducer.fighters }
}
function mapDispatchToProps (dispatch) {
  return {
    getAllFighters: () => {
      console.log('in dispatch', dispatch)
      dispatch(getFighters())
    },
    getSelectedFighter: id => {
      dispatch(getCurrentFighter(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FighterList)
