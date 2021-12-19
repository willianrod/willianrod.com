import Card from '../Card'
import styles from './WorkExperience.module.scss'
import WorkExperienceItem from './WorkExperienceItem'

const WorkExperience: React.FC<ComponentSectionsWorkExperience> = ({ items, title, present_label }) => {
  return (
    <Card title={title} backgroundImagePath="/earth.svg">
      <div className={styles.items}>
        {items.map((item) => <WorkExperienceItem present_label={present_label} key={item?.id} {...item} />)}
      </div>
    </Card>
  )
}

export default WorkExperience
