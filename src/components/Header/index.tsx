import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export function Header(){

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/images/logo.svg" alt="LogoPodcast" />

            <p>Qualquer texto aqui para mostrar como exemplo</p>

            <span>{currentDate}</span>
        </header>
    );
}