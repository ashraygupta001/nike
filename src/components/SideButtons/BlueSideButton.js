import React, { Fragment } from 'react';

import styles from './BlueSideButton.module.scss';

const BlueSideButtons = () => {
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

export default BlueSideButtons;