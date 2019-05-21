const fetch = require('node-fetch');
const assert = require('assert');
const url = 'https://api.punkapi.com/v2/beers';
const getBeers = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(function(beers) {
        return beers.map(function(beer) {
            console.log(`${beer.id} : ${beer.name}`);
        })
    })
};
getBeers();