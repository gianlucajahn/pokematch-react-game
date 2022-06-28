import styles from './Game.module.css';
import React, { useState } from 'react';
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
  const [catchedPokemon, setCatchedPokemon] = useState(null);
  const [catchedPokemonIsWrong, setcatchedPokemonIsWrong] = useState(false);

  let pokemonArray = pokemons;
  let renderedPokemonArray = [];
  const createRenderedPokemonArray = () => {
    for (let i = 0; i < 9; i++) {
        let newPokemon = {};

        if (score === 49) {
            return
        }

        if (renderedPokemonArray.find(pokemon => pokemon.catched === false)) {
            newPokemon = pokemonArray[Math.floor(Math.random() * 50)];
            while (renderedPokemonArray.find(pokemon => pokemon === newPokemon)) {
                newPokemon = pokemonArray[Math.floor(Math.random() * 50)];
            }

            renderedPokemonArray.push(newPokemon);
        } else if ((renderedPokemonArray.find(pokemon => pokemon.catched === false)) === undefined) {
            let startIndex = renderedPokemonArray.findIndex(pokemon => pokemon.catched === false);
            newPokemon = pokemonArray[Math.floor(Math.random() * (50 - startIndex)) + startIndex]
            while (newPokemon.catched === true) {
                newPokemon = pokemonArray[Math.floor(Math.random() * (50 - startIndex)) + startIndex]
            }

            renderedPokemonArray.push(newPokemon);
        } else if (score === 49) {
            return;
        } else {
            console.log("Debugging createRenderedPokemonArray");
        }
    }
  }

  createRenderedPokemonArray();
  console.log(renderedPokemonArray);

  function resetScore() {
    setScore(0);
  }

  function handleCatch() {
    let catchSound = new Audio(require("../../resources/sound/catch.mp3"));
    catchSound.volume = 0.25
    catchSound.play();
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
            {renderedPokemonArray.map((pokemon, index) => {
                return (
                    <button key={index} className={styles.pokemon} onClick={handleCatch} id={pokemon.name}>
                        <img className={styles.pokemonImg} alt={pokemon.name} src={require(`../../resources/images/pokemon/${pokemon.name.toLowerCase()}.png`)} />
                        <div>
                            <img src={require("../../resources/images/pokeball.PNG")} alt="Pokeball" className={styles.pokeball} />
                            <p className={styles.pokemonDesc}>Catch</p>
                        </div>
                        <p className={styles.pokemonDesc}>{pokemon.name}</p>
                    </button>
                )
            })}
        </div>
    </div>
  );
}

export default Game;