const constants = [
  'ADD_FIGHTER',
  'GET_FIGHTERS',
  'GET_CURRENT_FIGHTER'
].reduce(
  function (acc, curr) {
    acc[curr] = curr
    return acc
  },
  {}
)

module.exports = constants
