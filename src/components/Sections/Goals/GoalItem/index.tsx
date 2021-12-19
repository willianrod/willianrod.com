import Markdown from '../../Markdown'
import styles from './GoalItem.module.scss'

const Goal: React.FC<ComponentUtilsGoalItem> = ({ description, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <Markdown source={description || ''} />
      </div>
    </div>
  )
}

export default Goal
