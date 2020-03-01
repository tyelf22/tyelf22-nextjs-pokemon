function Card(props){

    return (
        <>
        <div className="card">
            <div className="card_img">
                <img src={props.pokemon.sprites.front_default} alt="pokemon image"/>
            </div>
            <div className="card_name">
                <h1>{props.pokemon.name}</h1>
            </div>
            <div className="card_height">
                <p>Height: {props.pokemon.height}</p>
            </div>
            <div className="card_ability">
                <p>Ability: {props.pokemon.abilities[0].ability.name}</p>
            </div>
            <div className="card_weight">
                <p>Weight: {props.pokemon.weight}</p>
            </div>
            <div className="card_type">
                <p>Type: {props.pokemon.types[0].type.name}</p>
            </div>
        </div>

        <style jsx>{`
        
        .card{
            width: 200px;
            border-radius: 5px;
            margin: 5px;
            padding: 50px;
            text-align: center;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            font-family: "Oxanium"

        }

        .card:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }




        `}</style>

    </>
    )
}

export default Card

