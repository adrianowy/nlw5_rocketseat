import styles from './styles.module.scss'

export function Player(){
    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/images/playing.svg" alt="Tocando Agora" />
                <strong>Tocando Agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selecione um Podcast para ouvir.</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/images/shuffle.svg" alt="Embaralhar" />
                    </button>

                    <button type="button" className={styles.playButton}>
                        <img src="/images/play-previous.svg" alt="Tocar Anterior" />
                    </button>

                    <button type="button">
                        <img src="/images/play.svg" alt="Tocar" />
                    </button>

                    <button type="button">
                        <img src="/images/play-next.svg" alt="Tocar Próxima" />
                    </button>

                    <button type="button">
                        <img src="/images/repeat.svg" alt="Repetir" />
                    </button>
                </div>
            </footer>
        </div>
    );
}