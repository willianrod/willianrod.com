import { useMemo } from 'react'
import Title from '../Title'
import styles from './Card.module.scss'

interface ICardProps {
  title: string;
  backgroundImagePath: string;
}

const Card: React.FC<ICardProps> = ({ children, title, backgroundImagePath }) => {

  const style = useMemo(() => ({
    backgroundImage: `url(${backgroundImagePath})`,
  }), [backgroundImagePath])

  return (
    <div className={styles.card} >
      <div className={styles.content} style={style}>
        <Title title={title} />
        {children}
      </div>
    </div>
  )
}

export default Card
