import Image from 'next/image'
import styles from './SocialMediaItem.module.scss'

const SocialMediaItem: React.FC<Maybe<ComponentUtilsSocialMediaItem>> = ({ icon, title, url }) => {
  return (
    <div className="social-media-item">
      <a href={url} target="_blank" rel="noreferrer noopener" >
        <Image src={icon.data?.attributes?.url || ''} alt={title} width={40} height={40} className={styles.icon} />
      </a>
    </div>
  )
}

export default SocialMediaItem