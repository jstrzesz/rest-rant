const React = require('react');
const Def = require('./Default');

const Home = () => {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = Home;
