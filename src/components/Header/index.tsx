import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

interface ILocale {
  [key: string]: string
}

const LOCALES_EMOJIS: ILocale = {
  en: '/flags/gb.svg',
  'pt-BR': '/flags/br.svg',
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
        <Image src={LOCALES_EMOJIS[locale || 'en']} alt={locale} width={20} height={20} />
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