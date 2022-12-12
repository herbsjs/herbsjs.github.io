import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Banner from './indexComponents/banner/banner'
import Features from './indexComponents/features/features'
import HowItWorks from './indexComponents/howItWorks/howItWorks'
import packageVersion from '../services/package-version'
import HerbsShelf from './indexComponents/herbsShelf/herbsShelf'
import HerbsCli from './indexComponents/herbsCli/herbsCli'
import clsx from 'clsx'
import LogRocket from 'logrocket'
import environment from '../config/environment'
import Assist from './indexComponents/assist/assist'

function Home() {
  const context = useDocusaurusContext()
  const [version, setVersion] = useState(null)

  const userZoom =
    typeof window !== 'undefined' && window.devicePixelRatio > 1
      ? `${100 / (window.devicePixelRatio * 0.9)}%`
      : `normal`

  useEffect(async () => {
    const npmMeta = await packageVersion('@herbsjs/herbs')
    if (npmMeta.package) setVersion(npmMeta.package.version)
  }, [])

  const { siteConfig = {} } = context
  LogRocket.init(environment.logRocketKey)

  return (
    <Layout description={`${siteConfig.customFields.description}`}>
      <Banner version={version} />
      <main style={{ zoom: userZoom }}>
        <Features />
        <div className={styles.section}>
          <h2 className={styles.h2big}>Build Node.js Microservices Faster and Future Proof</h2>
          <HowItWorks />
        </div>
        <div className={styles.section}>
          <h2 className={clsx([styles.h2big, styles.textRight])}>
            Herbs Assist, the AI Assistant for Herbs JS
          </h2>
          <Assist />
        </div>
        <div className={styles.section}>
          <h2 className={clsx([styles.h2big, styles.textLeft])}>
            Generate documentation based on your domain
          </h2>
          <HerbsShelf />
        </div>
        <div className={styles.section}>
          <h2 className={clsx([styles.h2big, styles.textRight])}>
            Use Herbs CLI to speed up your development
          </h2>
          <HerbsCli />
        </div>
      </main>
    </Layout>
  )
}

export default Home
