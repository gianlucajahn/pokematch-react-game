import styles from './Game.module.css';
import React, { useEffect, useState } from 'react';
import "nes.css/css/nes.min.css";
import pokemons from '../../utils/pokemonArray';

const Game = props => {
  const {
    toggleRules,
    pauseAudio,
    startAudio,
    music
  } = props;

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [latestScore, setLatestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [pokemonsArray, setPokemonArray] = useState(pokemons);
  const [renderedPokemon, setRenderedPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  let nextPokemon;
  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < 9; i++) {
        if (score === 49) {
            return
        } else if (renderedPokemon.length == 0) {
            nextPokemon = pokemonsArray[Math.floor(Math.random() * 49)];
            newArray = [...newArray, nextPokemon];
        } else if (renderedPokemon.find(pokemon => pokemon.catched === false)) {
            nextPokemon = pokemonsArray[Math.floor(Math.random() * 49)];
            while (newArray.find(pokemon => pokemon === nextPokemon)) {
                nextPokemon = pokemonsArray[Math.floor(Math.random() * 49)];
            }
            
            newArray = [...newArray, nextPokemon];
        } else if (renderedPokemon.find(pokemon => pokemon.catched === false) === undefined) {
            let startIndex = pokemonsArray.findIndex(pokemon => pokemon.catched === false);
            nextPokemon = pokemonsArray[Math.floor(Math.random() * (49 - startIndex)) + startIndex];
            while (nextPokemon.catched === true) {
                nextPokemon = pokemonsArray[Math.floor(Math.random() * (49 - startIndex)) + startIndex]
            }

            newArray = [...newArray, nextPokemon];
        } else {
            console.log("Debugging createRenderedPokemonArray");
        }
    }

    setRenderedPokemon(newArray);
  }, [selectedPokemon, score]);

  function resetScore() {
    setScore(0);
  }

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
        setGameOver(true);
        setScore(0);
    } else if (pokemonsArray[selectedPokemonIndex].catched === false) {
        setSelectedPokemon(pokemonsArray[selectedPokemonIndex]);
        setScore(score + 1);
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
            <button type="button" className="nes-btn is-warning" onClick={music ? pauseAudio : startAudio}>
                <img src={music ? require("../../resources/images/sound-off.png") : require("../../resources/images/sound-on.png")} alt="Toggle Sound" className={styles.sound} />
                Music
            </button>
        </div>

        <div class={styles.scoreboard}>
            <h1>Score: {score}</h1>
            <div className={styles.highscore}>
               <i class="nes-icon trophy is-medium"></i>
               <h2>High Score: {highscore}</h2>
            </div>
        </div>

        <div className={styles.board}>
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
        </div>
    </div>
  );
}

export default Game;