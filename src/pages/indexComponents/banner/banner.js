import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { GitHub } from "@material-ui/icons";
import BrowserOnly from '@docusaurus/BrowserOnly';
import useThemeContext from '@theme/hooks/useThemeContext';

const ImageSwitcher = () => {
  return (
    <BrowserOnly fallback={<img src="img/logo-herbsjs-douradoebranco.png"/>}>
      {() => {
        const { isDarkTheme } = useThemeContext();
        const imgSrc = isDarkTheme ? "img/logo-herbsjs-douradoebranco.png" : "img/logo-herbsjs.png";
        const fullImgSrc = useBaseUrl(imgSrc);
        return (
          <img src={fullImgSrc} />
        )
      }}
    </BrowserOnly>
  )
}

const Banner = () => {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
				<ImageSwitcher/>
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
