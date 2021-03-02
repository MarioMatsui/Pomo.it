import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span className={styles.doisPontos}>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                disabled
                className={styles.countdownButton}
            >
                <p className={styles.checkText}>Ciclo encerrado</p>
                <img src="icons/check.svg" alt="check icon" className={styles.iconCheck}/>
            </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            <p className={styles.closeText}>Abandonar ciclo</p>
                            <img src="icons/close.svg" alt="close icon" className={styles.iconClose} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img src="icons/play.svg" alt="Play icon" className={styles.iconPlay} />
                        </button>
                    ) }
                </>
            ) }            
        </div>
    );
}