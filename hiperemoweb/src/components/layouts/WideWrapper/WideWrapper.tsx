import styles from './WideWrapper.module.scss';

const WideWrapper: React.FC = ({children}) => (
    <div className={styles.component}>
        {children}
    </div>
);

export default WideWrapper;