import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Features() {
  const features = [
    {
      title: `Domain-first Development`,
      imageUrl: "/img/web.svg",
      description:
        `HerbsJS is a domain-first development framework (non-MVC approach), that allows you to build maintainable applications by using the same language and terms as your stakeholders.`
    },
    {
      title: "Low-code Infrastructure",
      imageUrl: "/img/secure-shield.svg",
      description:
        `REST and GraphQL endpoints running on the same project. 
        Move your data transport layer without changing your code. 
        That's the magic of a domain-first development.`
    },
    {
      title: "AI-Assisted",
      imageUrl: "/img/stars.svg",
      description:
        "With HerbsJS, developers can create code for their domain faster with the help of built-in AI.",
    },
  ];
  return (
    <section className={styles.features}>
      <div className="row">
        {features.map((feature) => (
          <div className={clsx("col col--4", styles.feature)}>
            <h3 className={styles.featureTitle}>
              <img
                className={styles.featureImage}
                src={feature.imageUrl}
                alt={feature.title}
              />
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
