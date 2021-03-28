import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GitHub } from '@material-ui/icons';
import Features from './indexComponents/features/features'
import Examples from './indexComponents/examples/examples'
import HowItWorks from './indexComponents/howItWorks/howItWorks'

function Home() {
  const context = useDocusaurusContext();

  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="HerbsJS is an evolutionary and open source library, focused in Domain layers">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          {/* <img src={isDarkTheme ? "img/logo-herbsjs-douradoebranco.png" : "img/logo-herbsjs.png"}  alt="logo-HerbsJS"/> */}
          <img src={"img/logo-herbsjs.png"}  alt="logo-HerbsJS"/>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--primary button--lg',styles.getStarted)}
              to={useBaseUrl('docs/')}>
              Get started
            </Link> 
            {' '}
            <Link
              className={clsx('button button--primary button--md', styles.getStarted)}
              to='https://github.com/herbsjs'>
              <GitHub fontSize="small"/> Start
            </Link>
          </div>
        </div>
      </header>
      <main>

        <Features />
        
        <div className={styles.section}>
          <h1>Add major features, with minimal code.</h1>
          <Examples />
          <h1>Dynamically generate.</h1>
          <div className={styles.badges}>
            <span className="badge badge--primary">Repository</span>
            <span className="badge badge--primary">GraphQL-layer</span>
            <span className="badge badge--primary">REST-layer</span>
            <span className="badge badge--primary">Shelf-project</span>
          </div>
        </div>
        
        <div className={styles.section}>
          <h1>How it works?</h1>
          <HowItWorks/>
        </div>

        <div className={styles.section}>
          <h1>Who is using HerbsJS?</h1>
          <div className={styles.logos}>
            <a href='https://vortx.com.br/'><img src='img/logo-vortx.png' alt='logo-Vórtx' className={styles.logosImage}/></a>
            <a href='https://vizir.com.br/'><img src='img/logo-vizir.png' alt='logo-Vizir' className={styles.logosImage}/></a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
