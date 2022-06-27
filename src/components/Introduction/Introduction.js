import styles from './Introduction.module.css';
import React from 'react';
import "nes.css/css/nes.min.css";
import strings from '../../utils/strings';

const Introduction = props => {
  const {
    introState,
    handleContinue,
    startGame
  } = props;

  return (
    <div className={styles.popup}>
        <div className={styles.box}>
            <img src={require("../../resources/images/professor.png")} alt="Professor" className={styles.professor} />
            <div className={styles.textbox}>
                <p className="nes-balloon from-right nes-pointer">
                    {strings[introState].title} <br /> <br />
                    {strings[introState].text} <br /> <br />
                    {introState <= 1 && strings[introState].cta} 
                    
                    {introState === 2 &&
                    <button type="button" class="nes-btn is-success" onClick={startGame}>Start Game</button>
                    }
                </p>
        
                {introState >= 1 && 
                <button className={styles.resume} onClick={handleContinue}>
                    <img src={require("../../resources/images/resume.png")} alt="Resume" className="resume-btn"/>
                </button>}

                {introState <= 1 && 
                <button className={styles.continue} onClick={handleContinue}>
                    <img src={require("../../resources/images/continue.png")} alt="Continue" className="continue-btn"/>
                </button>}
            </div>
        </div>
    </div>
  );
}

export default Introduction;