import styles from './Loader.module.scss';

const Loader: React.FC = () => (
    <div className={styles.component}>
        <div className={styles.buttonPanel}>
            <button className={styles.activeButton}>YOUTUBE</button>
            <button>FILE</button>
            <button>WEBCAM</button>
        </div>
        <div className={styles.inputPanel}>
            <input type="text" placeholder={'Put URL Youtube videos for analize...'}/>
        </div>
    </div>
);

export default Loader;