import styles from './WelcomeScreen.module.css';
import "nes.css/css/nes.min.css";

const WelcomeScreen = ({ toggleRules,
                         startAudio,
                         pauseAudio,
                         music
                        }) => {
  return (
    <div className={styles.WelcomeScreen}>
        <img src={require("../../resources/images/pokemon-logo.png")} alt="Pokemon Logo" className={styles.logo}/>
        <div className={styles.buttons}>
            <button type="button" className="nes-btn is-primary" onClick={toggleRules}>Rules</button>
            <button type="button" className="nes-btn is-success">Start</button>
            <button type="button" className="nes-btn is-warning" onClick={music ? pauseAudio : startAudio}>
                <img src={music ? require("../../resources/images/sound-off.png") : require("../../resources/images/sound-on.png")} alt="Toggle Sound" className={styles.sound} />
                Music
            </button>
        </div>
    </div>
  );
}

export default WelcomeScreen;