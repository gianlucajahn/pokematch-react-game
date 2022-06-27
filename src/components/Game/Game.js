import styles from './Game.module.css';
import React from 'react';
import "nes.css/css/nes.min.css";

const Game = props => {
  const {

  } = props;

  return (
    <div className={styles.game}>
        <h3>Pokémon Memory Game</h3>
        <h4>Click a Pokémon you haven't catched yet.</h4>
    </div>
  );
}

export default Game;