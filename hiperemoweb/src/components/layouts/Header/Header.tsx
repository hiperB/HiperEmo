import styles from './Header.module.scss';

const Header: React.FC = () => (
    <div className={styles.component}>
        <div className={styles.logoPanel}>
            <div className={styles.logo}>Hiper Emo</div>
        </div>
    </div>
);

export default Header;