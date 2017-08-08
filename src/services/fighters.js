// all ajax that interacts with api
const url = 'https://crossorigin.me/http://ufc-data-api.ufc.com/api/v1/us/fighters'

module.exports = { getAllFighters, getAllChampions, getFighter }

function getAllFighters () {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
}

function getAllChampions () {
  return fetch(`${url}/title_holders`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

function getFighter (id) {
  return fetch(`${url}/${id}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}
