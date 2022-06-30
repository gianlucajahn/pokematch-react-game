import logo from './logo.svg';
import styles from './App.module.css';
import "nes.css/css/nes.min.css";
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import RulesPopup from './components/RulesPopup/RulesPopup';
import Introduction from './components/Introduction/Introduction';
import Game from './components/Game/Game';
import strings from './utils/strings';
import React, { useState, useRef } from 'react';
import { isClickableInput } from '@testing-library/user-event/dist/utils';
import GithubButton from './components/GithubButton/GithubButton';
import CopyrightPopup from './components/copyr/copyr';

function App() {
  // State
  const [rulesDisplay, setRulesDisplay] = useState(false);
  const [copyrightDisplay, setCopyrightDisplay] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [gameState, setGameState] = useState("start");
  const [introState, setIntroState] = useState(0);
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

  // Switches from WelcomeScreen to Introduction
  const startIntroduction = () => {
    let click = new Audio(require("../src/resources/sound/click.mp3"));
    click.volume = 0.2
    click.play();

    setIsStarted(true);
    setGameState("intro");
  }

  // Switches from Introduction to Game
  const startGame = () => {
    let click = new Audio(require("../src/resources/sound/click.mp3"));
    click.volume = 0.2
    click.play();

    setGameState("game");
  }

  // Switch textbox content on click of the Continue-Button in Introduction
  const handleContinue = (e) => {
    let click = new Audio(require("../src/resources/sound/click.mp3"));
    click.volume = 0.2
    click.play();
    
    if (e.target.classList.contains("continue-btn")) {
      setIntroState(introState + 1);
    } else {
      setIntroState(introState - 1);
    }
  }

  // Toggle visibility of the copyright info popup
  const toggleCopyright = () => {
    let click = new Audio(require("../src/resources/sound/click.mp3"));
    click.volume = 0.2
    click.play();

    setCopyrightDisplay(!copyrightDisplay);
  }

  // Decides which component to show, based on game state
  let displayedComponent = "";
  let AppBG = document.getElementById('app');
  switch (gameState) {
    case "start":
      displayedComponent = <WelcomeScreen 
        startIntroduction={startIntroduction}
        toggleRules={toggleRules} 
        startAudio={startAudio} 
        pauseAudio={pauseAudio} 
        toggleCopyright={toggleCopyright}
        music={music}
      />;
      break;
    case "intro":
      displayedComponent = <Introduction 
        introState={introState} 
        handleContinue={handleContinue}
        startGame={startGame} />;
      break;
    case "game":
      displayedComponent = <Game 
        toggleRules={toggleRules}
        pauseAudio={pauseAudio}
        startAudio={startAudio}
        toggleCopyright={toggleCopyright}
        music={music}
      />;
  }

  return (
    <div className={isStarted ? styles.game : styles.App} id="app">
      <audio
        ref={soundtrackRef}
        src={require("./resources/sound/soundtrack.mp3")}
      />
      {displayedComponent}
      {rulesDisplay ? <RulesPopup 
        toggleRules={toggleRules} /> : ""}

      {copyrightDisplay ? <CopyrightPopup 
        toggleCopyright={toggleCopyright} /> : ""}
    </div>
  );
}

export default App;
