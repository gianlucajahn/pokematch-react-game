import React, { useState, useEffect } from "react";
import styles from './GithubButton.module.css';

const GithubButton = props => {
    return (
        <button className={styles.githubBtn}>
            <img class={styles.githubImg} alt="GitHub Logo" src={require("../../resources/images/github.PNG")} />
            <h3>Gianluca Jahn</h3>
        </button>
    )
}

export default GithubButton;