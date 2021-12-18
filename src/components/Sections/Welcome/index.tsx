import styles from './Welcome.module.scss';

const Welcome: React.FC<ComponentSectionsWelcome> = ({ primary_text, main_text, secondary_text }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>{primary_text}</p>
        <h1>{main_text}</h1>
        <p className={styles.secondaryText}>{secondary_text}</p>
      </div>
    </div>
  )
}

export default Welcome
