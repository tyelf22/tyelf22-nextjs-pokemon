import Fetch from 'isomorphic-unfetch'
import Layout from '../comp/Layout'
import { useContext } from 'react'

import Pokemon from '../comp/Pokemon'



const Index = (props) => {

    return (
    <Layout>
        <div>
            <Pokemon pokemon={props.pokemon}/>
        </div>
    </Layout>
    )

}

Index.getInitialProps = async function() {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data = await res.json()

    return {
        pokemon: data.results
    }
}

export default Index

