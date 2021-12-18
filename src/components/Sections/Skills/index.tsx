import Title from "../Title"
import SkillItem from "./SkillItem";
import styles from "./Skills.module.scss"

const Skills: React.FC<ComponentSectionsSkills> = ({ title, items }) => {
  return (
    <div className={styles.container}>
      <Title title={title} />
      <div className={styles.content}>
        {items.map((item) => <SkillItem key={item?.id} {...item} />)}
      </div>
    </div>
  )
}

export default Skills;
