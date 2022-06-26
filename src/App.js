import logo from './logo.svg';
import styles from './App.module.css';
import "nes.css/css/nes.min.css";
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import RulesPopup from './components/RulesPopup/RulesPopup';
import React, { useState, useRef } from 'react';
import { isClickableInput } from '@testing-library/user-event/dist/utils';

function App() {
  // State
  const [rulesDisplay, setRulesDisplay] = useState(false);
  const [game, setGame] = useState(false);
  const [music, setMusic] = useState(false);
  const soundtrackRef = useRef();

  // Functions

  // Toggle Rule visibility
  const toggleRules = () => {
    let click = new Audio(require("../src/resources/sound/click.mp3"));
    click.volume = 0.2
    click.play();

    setRulesDisplay(!rulesDisplay);
  }

  // Start soundtrack on click
  const startAudio = () => {
    soundtrackRef.current.play();
    soundtrackRef.current.volume = 0.15;

    setMusic(true);
  };

  // Pause soundtrack on click
  const pauseAudio = () => {
    soundtrackRef.current.pause();

    setMusic(false);
  };

  return (
    <div className={styles.App}>
      <audio
        ref={soundtrackRef}
        src={require("./resources/sound/soundtrack.mp3")}
      />
      {game ? null : <WelcomeScreen toggleRules={toggleRules} startAudio={startAudio} pauseAudio={pauseAudio} music={music}/>}
      {rulesDisplay ? <RulesPopup toggleRules={toggleRules} /> : ""}
    </div>
  );
}

export default App;
