import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {
  LiveProvider,
  LiveEditor
} from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwlLight';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GitHub, Language} from '@material-ui/icons';
import Examples from './indexComponents/examples/examples'
import Features from './indexComponents/features/features'
import HowItWorks from './indexComponents/howItWorks/howItWorks'

const features = [
  {
    title: `Domain that matters`,
    imageUrl: '',
    description: (
      <>
        Code your domain first using Herbs and the infrastructure will follow so. 
        stop to spend time with redundant code. 
        At same time we are flexible, for advanced scenarios you can provide your 
        own code and change the behaviour. 
      </>
    ),
  },
  {
    title: 'Keep it clean',
    imageUrl: '',
    description: (
      <>
        Our main concern is maintainability. Create and evolve your code knowing your
        project will not become a big ball of mud even on a multi year project. Concepts
        like Clean Architecture and Clean Code are at its core. 
      </>
    ),
  },
  {
    title: 'Auditable and Secure',
    imageUrl: '',
    description: (
      <>
        Enterprise grade features are standard on Herbs even for simple applications.
        Authorization and auditing are be available out of the box.
        You can still opt-out if needed. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo-herbsjs.png"></img>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get started
            </Link> 
            {' '}
            <Link
              className={clsx(
                'button button--primary button--md',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <GitHub fontSize="small"/> Start
            </Link>
          </div>
        </div>
      </header>
      <main>

        <Features />
        
        <div className={styles.section} style={{backgroundColor: '#FBFBFB'}}>
          <h1>Add major features, with minimal code.</h1>
          <Examples />
          <h1>Dynamically generate.</h1>
          <div id="badges">
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

        <div className={styles.section} style={{backgroundColor: '#FBFBFB'}}>
          <h1>Who is using HerbsJS?</h1>
          <img src='img/logo-vortx.png' alt='logo-Vórtx' className={styles.logosImage}/>
          <img src='img/logo-vizir.png' alt='logo-Vizir' className={styles.logosImage}/>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
