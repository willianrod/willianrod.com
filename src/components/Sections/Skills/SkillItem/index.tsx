import Image from 'next/image'
import dayjs from 'dayjs'
import styles from './SkillItem.module.scss'

const SkillItem: React.FC<ComponentUtilsSkillItem> = ({ name, since, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bean}/>
      {icon && (
        <Image
          className={styles.icon}
          src={icon.data?.attributes?.url || ''} alt={name || ''}
          width={300}
          height={100}
          objectFit="contain"
        />
      )}
      <div className={styles.since}>{dayjs(since).format('MMM YYYY')}</div>
    </div>
  )
}

export default SkillItem