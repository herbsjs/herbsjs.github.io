import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function Features() {
  const features = [
    {
      title: `Domain that matters`,
      imageUrl: '/img/web.png',
      description: "Stop spending time with redundant and low impact code. Code your domain first using Herbs and the necessary infrastructure will be generated automatically."
    },
    {
      title: 'Keep it clean',
      imageUrl: '/img/stars.png',
      description: "Our main concern is maintainability. Evolve your code knowing your project will not become a big ball of mud. Clean Architecture and DDD are at Herbs' core."
    },
    {
      title: 'Auditable and Secure',
      imageUrl: '/img/secure-shield.png',
      description: "Enterprise grade features are standard on Herbs even for simple applications. Authorization and auditing are be available out of the box."
    },
  ];
  return (
    <section className={styles.features}>
      <div className="row">
        {features.map(feature => (
          <div className={clsx('col col--4', styles.feature)}>
            <h3 className={styles.featureTitle}><img className={styles.featureImage} src={feature.imageUrl} alt={feature.title} />{feature.title}</h3>
            <p>{feature.description}</p>
          </div>)
        )}

      </div>
    </section>
  );
}