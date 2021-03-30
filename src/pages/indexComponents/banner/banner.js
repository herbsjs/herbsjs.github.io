import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";
import { GitHub } from "@material-ui/icons";

const Banner = () => {
  const { isDarkTheme } = useThemeContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          src={
            isDarkTheme
              ? "img/logo-herbsjs-douradoebranco.png"
              : "img/logo-herbsjs.png"
          }
          alt="logo-HerbsJS"
        />
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--outline button--primary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/")}
          >
            Get started
          </Link>{" "}
          <Link
            className={clsx(
              "button button--primary button--md",
              styles.getStarted
            )}
            to="https://github.com/herbsjs"
          >
            <GitHub fontSize="small" /> Start
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Banner;
