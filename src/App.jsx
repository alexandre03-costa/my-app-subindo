import { useState } from 'react'
import rickandmorty from '../src/assets/rick-morty.png'
import Characters from './components/Characters'
import './App.css'

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          Rick & Morty
        </h1>
        {characters ? (
          <Characters characters={characters}  setCharacters={setCharacters}/>
        ) : (
          <>
            <img
              src={rickandmorty}
              alt="Rick and Morty"
              className="img-home"
            /> 
            <p></p>
            <button onClick={reqApi} className="btn-search">
              Buscar personagens
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App
