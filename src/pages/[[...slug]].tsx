import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Welcome from '../components/Sections/Welcome'
import About from '../components/Sections/About'
import { queryPageBySlug, queryPages } from '../services/graphql/pages.query'
import WorkExperience from '../components/Sections/WorkExperience'
import Goals from '../components/Sections/Goals'
import Skills from '../components/Sections/Skills'

const SECTION_COMPONENTS = {
  'ComponentSectionsWelcome': Welcome,
  'ComponentSectionsAboutMe': About,
  'ComponentSectionsWorkExperience': WorkExperience,
  'ComponentSectionsGoals': Goals,
  'ComponentSectionsSkills': Skills,
  'Error': () => <div>Error</div>,
}

const Home: NextPage<IHome> = ({ page }) => {
  const renderSections = () => {
    return page?.sections?.map((section) => {
      // @ts-ignore
      const Component = SECTION_COMPONENTS[section?.__typename]
      if (Component) {
        // @ts-ignore
        return <Component key={`${section.__typename}-${section.id}`} {...section} />
      }

      return
    })
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>{page?.title}</title>
        <meta name="description" content={page?.description || ''} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {renderSections()}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await queryPages()

  const paths = pages.reduce((accPages: any, page: PageEntity) => {
    const newPages = [...accPages]

    newPages.push({ params: { slug: String(page.attributes?.slug).split('/') }, locale: page.attributes?.locale })

    const pageLocalizations = page.attributes?.localizations?.data || []

    if (pageLocalizations.length) {
      pageLocalizations.forEach(p => {
        newPages.push({ params: { slug: String(p.attributes?.slug).split('/') }, locale: p.attributes?.locale })
      })
    }

    return newPages
  }, [])

  return {
    paths: [...paths, { params: { slug: [] } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug as Array<string>
  const [page] = await queryPageBySlug(slug?.join('/') || 'home', context.locale || 'en')

  if (!page) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
      revalidate: 10,
    }
  }

  return {
    props: {
      page: page?.attributes,
    },
    revalidate: 60,
  }
}

export default Home
