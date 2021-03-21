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
     {/* LINE */}
      <div className={styles.gridLineA}><Remove fontSize="large"/></div>
      <div className={styles.gridLineB}><Remove fontSize="large"/></div>
      <div className={styles.gridLineC}><Remove fontSize="large"/></div>
      <div className={styles.gridLineD}><Remove fontSize="large"/></div>
      {/* GLUES */}
      <div className={styles.gridMiddleA}><span className={styles.badgeMiddle}>Herbs Shelf </span></div>
      <div className={styles.gridMiddleB}><span className={styles.badgeMiddle}>Herbs 2 GraphQL </span></div>
      <div className={styles.gridMiddleC}><span className={styles.badgeMiddle}>Herbs 2 REST </span></div>
      <div className={styles.gridMiddleD}><span className={styles.badgeMiddle}>Herbs 2 REPL </span></div>
     {/* ARROWS */}
      <div className={styles.gridArrowA}><TrendingFlat fontSize="large"/></div>
      <div className={styles.gridArrowB}><TrendingFlat fontSize="large"/></div>
      <div className={styles.gridArrowC}><TrendingFlat fontSize="large"/></div>
      <div className={styles.gridArrowD}><TrendingFlat fontSize="large"/></div>
      {/* GENERATED CODE */}
      <span className={styles.gridBadgeA}>Repository</span>
      <span className={styles.gridBadgeB}>GraphQL-layer</span>
      <span className={styles.gridBadgeC}>REST-layer</span>
      <span className={styles.gridBadgeD}>Shelf-project</span>
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