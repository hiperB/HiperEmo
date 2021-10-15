import styles from './MainInfo.module.scss';

const MainInfo: React.FC = () => (
    <div className={styles.component}>
        <div className={styles.title}>Hiper Emo</div>
        <div className={styles.info}>
            <div className={styles.infoRow}>Hiper emo - сервис для распознавания эмоций в реальном времени</div>
            <div className={styles.infoRow}>Наша миссия: Наделить людей возможностями гиперэффективной коммуникации</div>
        </div>
    </div>
);

export default MainInfo;