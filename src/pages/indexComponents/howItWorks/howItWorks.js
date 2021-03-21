import React from 'react';
import styles from './styles.module.css';
import { TrendingFlat, Remove } from '@material-ui/icons';


  export default function HowItWorks() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.circlesContent}>
        <div className={styles.outerCircle}>
          <h2>Metadata</h2>
        </div>
        <div className={styles.innerCircle}>
          <img src="img/herbsjs.svg" alt="logo-herbsJS"/>
          <h2>Domain</h2>
        </div>
        <div className={styles.innerInnerCircleA}>
          <h3>Entities</h3>
        </div>
        <div className={styles.innerInnerCircleB}>
          <h3>Use Cases</h3>
        </div>
      </div>
      {/* GLUES */}
      <div className={styles.gridMiddleA}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>Herbs Shelf </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div>
      <div className={styles.gridMiddleB}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>Herbs 2 GraphQL </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div>
      <div className={styles.gridMiddleC}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>Herbs 2 REST </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
      </div>
      <div className={styles.gridMiddleD}>
        <hr className={styles.line}/>
        <div className={styles.badgeMiddle}>Herbs 2 REPL </div>
        <hr className={styles.line}/>
        <div className={styles.arrowRight}/>
        </div>
      {/* GENERATED CODE */}
      <div className={styles.gridBadgeA}>Repository</div>
      <div className={styles.gridBadgeB}>GraphQL-layer</div>
      <div className={styles.gridBadgeC}>REST-layer</div>
      <div className={styles.gridBadgeD}>Shelf-project</div>
    </div>
    <div className={styles.legends}> 
      <div><span className={styles.legendA}/>Your code</div>
      <div><span className={styles.legendB}/>Metadata</div>
      <div><span className={styles.legendC}/>Glues/Plugins</div>
      <div><span className={styles.legendD}/>Generated code</div>
    </div>
    </>
  );
}