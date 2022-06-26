import styles from './RulesPopup.module.css';
import "nes.css/css/nes.min.css";

const RulesPopup = ({ toggleRules }) => {
  return (
    <div className={styles.popup}>
        <div className={styles.box}>
            <img src={require("../../resources/images/misty.png")} alt="Misty" className={styles.misty} />
            <div>
                <p className="nes-balloon from-left nes-pointer">
                    Rules <br /><br />
    
                    1. Select a Pokemon you haven't selected before. You get 1 point per such pokemon. <br /> <br />
                    2. If you select a Pokemon you already selected before, your score gets reset to 0. <br /> <br />
                    3. If your score gets reset, you lose. You can select all Pokemon again and start from scratch.
                </p>
                <button className={styles.close} onClick={toggleRules}>
                    <img src={require("../../resources/images/close.png")} alt="Close" />
                </button>
            </div>
        </div>
    </div>
  );
}

export default RulesPopup;