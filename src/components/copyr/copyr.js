import styles from './copyr.module.css';
import "nes.css/css/nes.min.css";

const CopyrightPopup = ({ toggleCopyright }) => {
  return (
    <div className={styles.popup}>
        <div className={styles.box}>
            <img src={require("../../resources/images/pelipper.gif")} alt="Pelipper" className={styles.pelipper} />
            <div>
                <p className="nes-balloon from-right nes-pointer">
                    Copyright Info <br /><br />
    
                    All rights to all pictures, music and names on this website belong to Nintendo/Creatures Inc. and GAME FREAK. I only used them to build an environment for myself to learn coding in React with. If you are an owner of the copyrighted material, please let me know if you have any issues with this and I'll take the page down immediately.
                </p>
                <button className={styles.close} onClick={toggleCopyright}>
                    <img src={require("../../resources/images/close.png")} alt="Close" />
                </button>
            </div>
        </div>
    </div>
  );
}

export default CopyrightPopup;