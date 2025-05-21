import { useEffect, useRef, useState } from 'react'
import './App.css'
import CardsContainer from './CardsContainer';

export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [idList, setIdList] = useState([])
  const [highScore, setHighScore] = useState(0);
  const currentScore = idList.length;
  const didFetch = useRef(false);

  // MARCHE MAIS STOP SPAM LES APIs.
  useEffect(() => {
    if(!didFetch.current){
     const promises = [];
     for(let i = 1; i <= 9; i++){
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}/`))
     }
     Promise.all(promises)
     .then(results => Promise.all(results.map(r => r.json())))
     .then(dataArray => {
      const names = dataArray.map((data, index) => ({name:data.name, url:data.sprites['front_default'], id:index}));
      setPokemonList(names);
     })
     
      didFetch.current = true;
    }
  }, [])

  console.log("rerender")
  if(currentScore > highScore){
    setHighScore(prev => prev + 1)
  }

  function shuffleArray(array) {
    return [...array].map(v => ({v, sort:Math.random()})).sort((a, b) => a.sort - b.sort).map(({v}) => v);
}

  return (
    <>
      <header style={{display:'flex', flexFlow:'row nowrap', justifyContent:'space-between'}}>
        <h2>Current score : {currentScore}</h2>
        <h2>High score : {highScore}</h2>
      </header>
      <CardsContainer cardsArray={shuffleArray(pokemonList)} setHighScore={setHighScore} setIdList={setIdList} idList={idList}/>
    </>
  )
}
