import React, { Fragment } from 'react';

import styles from './RedSideButton.module.scss';

const RedSideButtons = () => {
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

export default RedSideButtons;