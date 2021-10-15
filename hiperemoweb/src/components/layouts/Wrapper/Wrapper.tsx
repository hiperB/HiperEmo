import styles from './Wrapper.module.scss';

const Wrapper: React.FC = ({children}) => (
    <div className={styles.component}>
        {children}
    </div>
);

export default Wrapper;