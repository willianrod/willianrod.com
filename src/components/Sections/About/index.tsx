import Image from 'next/image';
import Markdown from '../Markdown';
import Title from '../Title';
import styles from './About.module.scss';
import SocialMediaItem from './SocialMediaItem';


const About: React.FC<ComponentSectionsAboutMe> = ({ title, social_media, social_media_title, description, avatar }) => {
  return (
    <div className={styles.about}>
      <Title title={title} />
      <div className={styles.content}>
        <div>
          <div className={styles.bar} />
          <Image
            className={styles.image}
            src={process.env.NEXT_PUBLIC_API_URL + avatar.data?.attributes?.formats?.medium?.url}
            layout='fixed'
            width={300}
            height={400}
            objectFit='cover'
            alt="profile-picture"
          />
        </div>
        <div className={styles.description}>
          <Markdown source={description} />
          <div>
            <h2 className={styles.socialMediaTitle}>{social_media_title}</h2>
            <div className={styles.socialMediaItems}>
              {social_media.map(item => (
                // @ts-ignore
                <SocialMediaItem
                  key={item?.id}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;