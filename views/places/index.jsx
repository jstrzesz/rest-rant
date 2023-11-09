const React = require('react');
const Def = require('../default');

const Index = ({ places }) => {
  const placesFormatted = places.map(place => (
    <div key={place.name}>
      <h2>{place.name}</h2>
      <img src={place.pic} alt={place.name} />
    </div>
  ))
  return (
    <Def>
      <main>
        <h1>Places Index Page</h1>
        { placesFormatted }
      </main>
    </Def>
  )
};

module.exports = Index;
