import styles from './Title.module.scss';

interface ITitleProps {
    title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}<div className={styles.underline} /></h1>
    </div>
  );
};

export default Title;