import React, { useEffect } from 'react';
import KakaoMapScript from "./KakaoMapScript";
import styles from "./css/Map.module.css";

function Map() {

    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div>
            <div id='myMap' className={styles.mymap} >
                
            </div>
        </div>
    );
}

export default Map;
