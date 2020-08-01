import React, { Fragment } from 'react';

import instagram from './../../assests/instagram.png';
import linkdin from './../../assests/linkdin.png';
import twitter from './../../assests/twitter.png';

import styles from './Social.module.scss';

const Social = () => {
    return(
        <Fragment>
            <div className={styles.social}>
                <img className = {styles.instagram} src={instagram} alt = "istagram" />
                <img className={styles.linkdin} src ={linkdin} alt="linkdin" />
                <img className={styles.twitter} src = {twitter} alt = "twitter" />
            </div>
        </Fragment>
    )
}

export default Social;