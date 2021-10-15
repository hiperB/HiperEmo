import styles from './Content.module.scss';

const Content: React.FC = ({children}) => (
    <div className={styles.component}>
        {children}
    </div>
);

export default Content;