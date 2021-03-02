import { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'

import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/pages/index.module.css'
import Head from 'next/head'

export default function Login() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    const { push } = useRouter();
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
      e.preventDefault();
      if (username) {
        push(`/${username}`);
      }
    }

    return (
        <div className={styles.overlay}>
          <Head>
            <title>SignIn | Pomo.it</title>
          </Head>
            <img src="icons/logoBig.svg" alt="logo extended" />
            <div className={styles.loginContainer}>
                <header>
                    <img src="icons/Logotext.svg" alt="logo text" />
                </header>
                <main> 
                    <p>Faça login com o GitHub:</p>
                </main>
                <footer>
                    <form onSubmit={handleSubmit}>
                      <input type="text" onChange={(e) => setUsername(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} ref={inputRef} placeholder="Username"/>
                      <button type="submit">
                          <img src="icons/setaBTN.svg" alt=""/>
                      </button>
                    </form>
                </footer>
            </div>
        </div>
    );
}