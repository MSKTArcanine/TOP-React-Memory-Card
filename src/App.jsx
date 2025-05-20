import { useEffect, useRef, useState } from 'react'
import './App.css'

export default function App() {
  const [pokemonList, setPokemonList] = useState(['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise'])
  const didFetch = useRef(false);
  // MARCHE MAIS STOP SPAM LES APIs.
  // useEffect(() => {
  //   if(!didFetch.current){
  //    const promises = [];
  //    for(let i = 1; i <= 9; i++){
  //     promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`))
  //    }
  //    Promise.all(promises)
  //    .then(results => Promise.all(results.map(r => r.json())))
  //    .then(dataArray => {
  //     const names = dataArray.map(data => data.name);
  //     setPokemonList(names);
  //    })
     
  //     didFetch.current = true;
  //   }
  // }, [])

  console.log(pokemonList)
  return (
    <>
    </>
  )
}
