import styles from './Statistics.module.scss';

const Statistics: React.FC<{videoId: string}> = ({videoId}) => (
    <div className={styles.component}>
        {videoId}
    </div>
);

export default Statistics;