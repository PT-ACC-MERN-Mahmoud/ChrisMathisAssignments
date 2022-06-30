import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemonApi, setPokemonApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemonApi(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
    <h1>Axios Pokemon API</h1>
    <div style={{marginLeft:"550px"}}>
      <ul style={{width:"200px"}}>
        {pokemonApi.map((pokemon, index) => (
          <li style={{marginBottom: "10px", textAlign: "center"}} key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>

    </div>
    );
}

export default App;
