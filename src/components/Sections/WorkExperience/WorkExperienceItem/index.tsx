import Markdown from '../../Markdown';
import styles from './WorkExperienceItem.module.scss';
import dayjs from 'dayjs';

const WorkExperienceItem: React.FC<ComponentUtilsWorkExperienceItem> = ({ present_label, company_name, description, position, start_date, end_date }) => {
  const renderDate = (date: string) => {
    return date ? dayjs(date).format('MMM YYYY') : present_label;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{company_name}</h2>
      <h3 className={styles.position}>{position}</h3>

      <div className={styles.dates}>
        {renderDate(start_date)} ~ {renderDate(end_date)}
      </div>
      <div className={styles.content}>
        <Markdown source={description || ''} />
      </div>
    </div>
  );
}

export default WorkExperienceItem;
