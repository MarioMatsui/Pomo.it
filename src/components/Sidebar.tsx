

import ReactSwitch from 'react-switch';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Sidebar.module.css'

import { useTheme } from '../contexts/ThemeContext'
import { signout } from 'next-auth/client';

export function Sidebar(props) {
    const { theme, themeName, toggleTheme } = useTheme();
    function signOutPomo() {
        signout();
    }
    return (
        <div className={styles.sidebarContainer}>
            <header className={styles.header}>
                <img src="icons/logo.svg" alt="logo"/>
            </header>
            <nav className={styles.nav}>
                <p>mode</p>
                <ReactSwitch
                    checked={themeName === 'dark'}
                    height={20}
                    width={45}
                    handleDiameter={16}
                    onChange={toggleTheme}
                    className={styles.themeSwitcher}
                    onColor={theme.text}
                    offColor={theme.text}
                    boxShadow="0px 1px 3px rgba(0, 0, 0, 0.3)"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onHandleColor={theme.orange}
                />
            </nav>
            <footer className={styles.footer}>           
                <button type="button" className={styles.logoutBTN}>
                    <a href="/">
                        <img src="/icons/close.svg" alt="fechar modal"/>
                    </a>
                </button>
            </footer>  
        </div>
    )
}