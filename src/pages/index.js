import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Code what matters',
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo-herbsjs.png"></img>
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
