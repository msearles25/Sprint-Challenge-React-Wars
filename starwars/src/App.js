import React, {useState, useEffect} from 'react';
import './App.css';
import StarWarsCard from './components/StarWarsCard';
import axios from 'axios';
import {Row} from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterInfo, setCharacterInfo] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(resp => {
        setCharacterInfo(resp.data.results)
        console.log(resp.data)
      })
      .catch(err => {
        console.log('Failed to get info:',  err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <Row>
          {characterInfo.map((character, index) => {
            return (
              <StarWarsCard 
              key={index} 
              character={character.name}
              eyeColor={character.eye_color}
              height={character.height}
              mass={character.mass}
              />
            )
          })}
        </Row>
    </div>
  );
}

export default App;
