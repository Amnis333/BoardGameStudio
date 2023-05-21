import React from "react";
import styles from "./Lobby.module.css";
import GeisterRule from "./GeisterRule";

const Lobby: React.FC = () => {
    const [showGeisterRule, setGeisterRule] = React.useState(false);
    const handleClick = () => {
        setGeisterRule(true);
    }
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                {
                    showGeisterRule ? <GeisterRule /> : (
                        <button className={styles.button} id="single-mode-btn" onClick={handleClick}>Single Mode</button>
                    )
                }
                
            </div>
        
              
        </div>
    )
}

export default Lobby;