import Title from '../Title'
import SkillItem from './SkillItem'
import styles from './Skills.module.scss'

const Skills: React.FC<ComponentSectionsSkills> = ({ title, skills, since_label }) => {
  return (
    <div className={styles.container}>
      <Title title={title} />
      <div className={styles.content}>
        {skills.map((item) => <SkillItem key={item?.id} {...item} since_label={since_label} />)}
      </div>
    </div>
  )
}

export default Skills
