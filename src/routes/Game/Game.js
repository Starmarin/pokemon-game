import { useState, useEffect } from 'react';
import PokemonCard from "../../components/PokemonCard";
import database from '../../services/firebase';
import style from './game.module.css';

function Game() {
    const [pokemons, setPokemons] = useState({})
    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    const handlerClickAdd = () => {
        const cardNewPokemon = {
            "abilities": [
                "intimidate",
                "shed-skin",
                "unnerve"
            ],
            "stats": {
                "hp": 60,
                "attack": 95,
                "defense": 69,
                "special-attack": 65,
                "special-defense": 79,
                "speed": 80
            },
            "type": "poison",
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
            "name": "arbok",
            "base_experience": 157,
            "height": 35,
            "id": 24,
            "values": {
                "top": 5,
                "right": 9,
                "bottom": "A",
                "left": "A"
            },
            "active": false
        }
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set({ ...cardNewPokemon, id: newKey });
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })

    }
    const handlerClickCard = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    return (
        <div>
            <button onClick={handlerClickAdd}>Add a new pokemon</button>
            <div className={style.flex}>
                {
                    Object.entries(pokemons).map(([key, { id, name, img, type, values, active }]) =>
                        <PokemonCard
                            key={key}
                            id={id}
                            name={name}
                            img={img}
                            type={type}
                            values={values}
                            isActive={active}
                            onClickCard={handlerClickCard}
                        />)
                }
            </div>
        </div>
    )
}

export default Game