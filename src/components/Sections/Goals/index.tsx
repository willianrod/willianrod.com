import Card from '../Card'
import styles from './Goal.module.scss'
import GoalItem from './GoalItem'

const Goals: React.FC<ComponentSectionsGoals> = ({ items, title,  }) => {
  return (
    <Card title={title} backgroundImagePath="/blue-rocket.svg">
      <div className={styles.items}>
        {items.map((item) => <GoalItem key={item?.id} {...item} />)}
      </div>
    </Card>
  )
}

export default Goals
