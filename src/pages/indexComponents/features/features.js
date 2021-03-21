import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import theme from 'prism-react-renderer/themes/nightOwlLight';
import clsx from 'clsx';

export default function Features() {
  const features = [
    {
      title: `Domain that matters`,
      imageUrl: '/website/img/web.png',
      description: "Code your domain first using Herbs and the infrastructure will follow so stop to spend time with redundant code. At same time we are flexible, for advanced scenarios you can provide your own code and change the behaviour."
    },
    {
      title: 'Keep it clean',
      imageUrl: '/website/img/stars.png',
      description: "Our main concern is maintainability. Create and evolve your code knowing your project will not become a big ball of mud even on a multi year project. Concepts like Clean Architecture and Clean Code are at its core."
    },
    {
      title: 'Auditable and Secure',
      imageUrl: '/website/img/secure-shield.png',
      description: "Enterprise grade features are standard on Herbs even for simple applications. Authorization and auditing are be available out of the box. You can still opt-out if needed."
    },
  ];
  return (
    <section className={styles.features}>
        <div className="row">
          {features.map(feature => (
            <div className={clsx('col col--4', styles.feature)}>
              <h3><img className={styles.featureImage} src={feature.imageUrl} alt={feature.title} />{feature.title}</h3>
              <p>{feature.description}</p>
            </div>)
          )}
        </div>
    </section>
  );
}