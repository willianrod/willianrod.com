import { useRouter } from 'next/router'
import styles from './Header.module.scss'

interface ILocale {
  [key: string]: string
}

const LOCALES_EMOJIS: ILocale = {
  en: '🇬🇧',
  'pt-BR': '🇧🇷',
}

const Header: React.FC = () => {
  const { locale: currentLocale, locales } = useRouter()

  const renderLocale = () => {
    if (locales?.length === 1) return null

    return locales?.map((locale) => (
      <a
        key={locale}
        href={`/${locale}`}
        className={currentLocale === locale ? styles.localeLinkActive : styles.localeLink}
      >
        {LOCALES_EMOJIS[locale]}
      </a>
    ))
  }

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.localeSelector}>
          {renderLocale()}
        </div>
      </div>
    </div>
  )
}

export default Header