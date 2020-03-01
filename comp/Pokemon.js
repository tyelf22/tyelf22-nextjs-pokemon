import PokeCards from './PokeCards'
import { useState, useEffect } from 'react'
import {getAllPokemon, getPokemon} from './PokeCards'
import Card from './Card'




const Pokemon = (props) => {
    
    const allPokemon = props.pokemon 
    const pokeName = allPokemon.map(poke => {
        return {
            name: poke.name,
            url: poke.url
        }
    })

    const [pokemonData, setPokemonData] = useState([])
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [loading, setLoading] = useState(true)
    const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl)
            setNextUrl(response.next)
            setPrevUrl(response.previous)
            let pokemon = await loadingPokemon(response.results)
            setLoading(false)
        }
        fetchData()
    }, [])


    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url)
            return pokemonRecord
        }))

        setPokemonData(_pokemonData)
    }

    console.log(pokemonData)
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <>
                    <div className="grid-container">
                        {pokemonData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon}/>
                        })}
                    </div>
                </>

            )}

        <style jsx>{`
        
        .grid-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
            
        }

        
        `}</style>
        </div>
    )
}

export default Pokemon