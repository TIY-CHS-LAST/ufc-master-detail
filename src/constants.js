const constants = [
  'ADD_FIGHTER',
  'GET_FIGHTERS'
].reduce(function(acc, curr) {
  acc[curr] = curr;
  return acc
}, {});

module.exports = constants;
