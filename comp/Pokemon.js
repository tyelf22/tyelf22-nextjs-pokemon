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

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = React.useState([]);

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

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    React.useEffect(() => {
        const results = pokemonData.filter(poke =>
            poke.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    console.log(pokemonData)
    console.log(searchResults)
    
    return (
        <div>
            <div className="header">
                <h1>Original Pokemon</h1>
                <p>Application to view and search Pokemon</p>
            </div>
            <div className="coa">
                <button>RANDOM</button>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
            </div>
            {loading ? 
                <div>
                    <h1>Loading...</h1>
                </div> : 
                searchResults.length > 0 ?
                <div className="grid-container">
                    {searchResults.map((pokemon, i) => {
                        return <Card key={i} pokemon={pokemon}/>
                    })}
                </div> :
                <>
                    <div className="grid-container">
                        {pokemonData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon}/>
                        })}
                    </div>
                </>
            }

        <style jsx>{`
        
        .grid-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px 0;
            
        }
        .header{
            font-family: 'Oxanium', helvetica;
            text-align: center;
        }

        .coa {
            text-align: center;
        }

        button {
            padding: 10px;
            width: 200px;
            border-radius: 10px;
            border: none;
            margin: 0 10px;
        }

        input {
            margin 0 10px;
            padding: 10px;
            border-radius: 10px;
        }

        
        `}</style>
        </div>
    )
}

export default Pokemon