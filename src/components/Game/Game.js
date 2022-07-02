import styles from './Game.module.css';
import React, { useEffect, useState } from 'react';
import "nes.css/css/nes.min.css";
import pokemons from '../../utils/pokemonArray';
import GithubButton from '../GithubButton/GithubButton';

const Game = props => {
  const {
    toggleRules,
    pauseAudio,
    startAudio,
    music,
    toggleCopyright
  } = props;

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [pokemonsArray, setPokemonArray] = useState(pokemons);
  const [renderedPokemon, setRenderedPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  // useEffect hook to change up array of rendered pokemon whenever necessary
  let nextPokemon;
  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < 9; i++) {
        if (score === 49) {
            setRenderedPokemon(newArray);
        } else if (newArray.length == 0) {
            nextPokemon = pokemonsArray[Math.floor(Math.random() * 49)];
            newArray = [...newArray, nextPokemon];
        } else if (newArray.find(pokemon => pokemon.catched === false)) {
            nextPokemon = pokemonsArray[Math.floor(Math.random() * 49)];
            while (newArray.find(pokemon => pokemon === nextPokemon)) {
                nextPokemon = pokemonsArray[Math.floor(Math.random() * 49)];
            }
            
            newArray = [...newArray, nextPokemon];
        } else if (newArray.find(pokemon => pokemon.catched === false) === undefined) {
            let startIndex = pokemonsArray.findIndex(pokemon => pokemon.catched === false);
            nextPokemon = pokemonsArray[Math.floor(Math.random() * (49 - startIndex)) + startIndex];
            while (nextPokemon.catched === true || (newArray.find(pokemon => pokemon === nextPokemon))) {
                nextPokemon = pokemonsArray[Math.floor(Math.random() * (49 - startIndex)) + startIndex]
            }

            newArray = [...newArray, nextPokemon];
        } else {
            console.log("Debugging createRenderedPokemonArray");
        }
    }

    setRenderedPokemon(newArray);
  }, [selectedPokemon, score]);

  // Reset Score on Click of the Reset Button in Game
  function resetScore() {
    let click = new Audio(require("../../resources/sound/click.mp3"));
    click.volume = 0.2
    click.play();

    setScore(0);
    setHighscore(0);
    pokemonsArray.map((pokemon, index) => {
        pokemon.catched = false;
        return pokemon
    });
  }

  // React responding to the user selecting a pokemon
  function handleCatch(e) {
    let catchSound = new Audio(require("../../resources/sound/catch.mp3"));
    catchSound.volume = 0.25
    catchSound.play();

    let selectedPokemonIndex = pokemonsArray.findIndex(pokemon => pokemon.name === e.target.id);
    if (pokemonsArray[selectedPokemonIndex].catched === true) {
        setSelectedPokemon(pokemonsArray[selectedPokemonIndex]);
        pokemonsArray.map((pokemon, index) => {
            pokemon.catched = false;
            return pokemon
        });
        if (score > highscore) {
            setHighscore(score);
        }
        setScore(0);

    } else if (pokemonsArray[selectedPokemonIndex].catched === false) {
        setSelectedPokemon(pokemonsArray[selectedPokemonIndex]);
        setScore(score + 1);
        if (score >= highscore) {
            setHighscore(score + 1);
        }
        pokemonsArray[selectedPokemonIndex].catched = true;
    }
  }

  return (
    <div className={styles.game}>
        <div className={styles.header}>
            <h3>Pokémon Memory Game</h3>
            <h4>Click a Pokémon you haven't catched yet.</h4>
        </div>

        <div className={styles.buttons}>
            <button type="button" className="nes-btn is-primary" onClick={toggleRules}>Rules</button>
            <button type="button" className="nes-btn is-error" onClick={resetScore}>Reset</button>
            <a className="nes-btn" href="#" onClick={toggleCopyright}>Copyright</a>
            <button type="button" className="nes-btn is-warning" onClick={music ? pauseAudio : startAudio}>
                <img src={music ? require("../../resources/images/sound-off.png") : require("../../resources/images/sound-on.png")} alt="Toggle Sound" className={styles.sound} />
                Music
            </button>
        </div>

        <div className={styles.scoreboard}>
            <h1>Score: {score}</h1>
            <div className={styles.highscore}>
               <i className="nes-icon trophy is-medium"></i>
               <h2>High Score: {highscore}</h2>
            </div>
        </div>

        {score === 49 ? 
             <div className={styles.win}>
                 <h3 className={styles.congratulations}>Congratulations! You won!</h3> 
                 <p>Thank you for checking out my game. If you'd like, feel free to checkout my GitHub Profile below to take a look at some more projects of mine!</p>
            </div>
            : <div className={styles.board}>
            {renderedPokemon.map((pokemon, index) => {
                return (
                    <button key={index} className={styles.pokemon} onClick={handleCatch} id={pokemon.name}>
                        <img className={styles.pokemonImg} src={require(`../../resources/images/pokemon/${pokemon.name.toLowerCase()}.png`)} id={pokemon.name}/>
                        <div id={pokemon.name}>
                            <img src={require("../../resources/images/pokeball.PNG")} alt="Pokeball" className={styles.pokeball} id={pokemon.name} />
                            <p className={styles.pokemonDesc} id={pokemon.name}>Catch</p>
                        </div>
                        <p className={styles.pokemonDesc} id={pokemon.name}>{pokemon.name}</p>
                    </button>
                )
            })}
        </div>}

        <GithubButton />
    </div>
  );
}

export default Game;