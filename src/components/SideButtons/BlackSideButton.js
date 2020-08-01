import React, { Fragment } from 'react';

import styles from './BlackSideButton.module.scss';

const BlackSideButtons = () => {
    return(
        <Fragment>
            <div>
                <button>
                    <div className={styles.circle}></div>
                </button>
            </div>
        </Fragment>
    )
}

export default BlackSideButtons;