import React, { useEffect } from 'react';
import styles from './01.less';
import { Cesium } from "umi";

const { SingleTileImageryProvider, Viewer } = Cesium;

export default function Page() {

  
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer');
  }, [])
  return (
    <div>
      <div className={styles.cesiumContainer} id="cesiumContainer"></div>
      test-cesuim
    </div>
  );
}
