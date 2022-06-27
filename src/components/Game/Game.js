import styles from './Game.module.css';
import React, { useState } from 'react';
import "nes.css/css/nes.min.css";

const Game = props => {
  const {
    toggleRules,
    pauseAudio,
    startAudio,
    music
  } = props;

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  function resetScore() {
    setScore(0);
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

        <div className={styles.footer}>
            <button className={styles.footerBtn}>
                <img className={styles.icon} src={require("../../resources/images/github.gif")} alt="GitHub Logo"></img>
                Gianluca Jahn
            </button>
        </div>
    </div>
  );
}

export default Game;