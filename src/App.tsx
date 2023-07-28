

import './App.css'

function App() {
  const pokemonNames = ["pikachu", "clefairy", "jigglypuff","squirtle", "bulbasaur"]
  return (
      <div>
        {pokemonNames.map(pokemon => 
          <button>{pokemon}</button>)}
      </div>
  )
}

export default App
