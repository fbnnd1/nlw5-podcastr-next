import format from 'date-fns/format';
import {ptBR} from 'date-fns/locale'

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, MMMM yyyy',{
        locale:ptBR,
    });


    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    );
}