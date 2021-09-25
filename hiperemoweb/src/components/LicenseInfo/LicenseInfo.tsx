import styles from './LicenseInfo.module.scss';

const LicenseInfo: React.FC = () => (
    <div className={styles.component}>
        <div className={styles.infoRow}>Всчкая дребень про лицензии и соглашения</div>
        <div className={styles.infoRow}>Ссылка на потенциальное API</div>
    </div>
);

export default LicenseInfo;