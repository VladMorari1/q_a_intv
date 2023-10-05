import React from 'react';
import styles from './styles.module.css'
import {cursesType} from "../../Questions";

function CursType({setCursType}) {
    return (
        <div className={styles.cursWrapper}>
            <div style={{color: '#e0c409'}} className={styles.curs}
                 onClick={() => setCursType(cursesType.JAVASCRIPT)}>Javascript
            </div>
            <div style={{color: '#136cc5'}} className={styles.curs}
                 onClick={() => setCursType(cursesType.TYPESCRIPT)}>TypeScript
            </div>
            <div style={{color: '#13c5b0'}} className={styles.curs}
                 onClick={() => setCursType(cursesType.REACT)}>React
            </div>
        </div>
    );
}

export default CursType;