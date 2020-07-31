import React, { Fragment } from 'react';
import styles from './nikeLogo.module.scss';

const NikeLogo = (props) => {
    return (
        <Fragment>
            <div>
                <p className={styles.nike}>
                   NIKE
                </p>
            </div>
        </Fragment>
    )
}
export default NikeLogo;