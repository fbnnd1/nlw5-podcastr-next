import { useContext } from 'react';
import format from 'date-fns/format';
import {ptBR} from 'date-fns/locale'

import {DarkModeContext} from '../../contexts/DarkModeContext';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, MMMM yyyy',{
        locale:ptBR,
    });

    const {isActiveDarkMode, toggleDarkMode} = useContext(DarkModeContext);

    function handleToggleDarkMode() {
        toggleDarkMode();
    }

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

            {
                isActiveDarkMode ? (
                    <button onClick={handleToggleDarkMode} data-dark-mode={isActiveDarkMode} >
                        Modo Claro
                    </button>
                ) : (
                    <button onClick={handleToggleDarkMode}>
                        Modo Escuro
                    </button>
                )
            }
        </header>
    );
}