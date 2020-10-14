import React, { Fragment } from 'react';
import {motion} from 'framer-motion';
import instagram from './../../assests/instagram.png';
import linkdin from './../../assests/linkdin.png';
import twitter from './../../assests/twitter.png';

import styles from './Social.module.scss';

const Social = () => {
    return(
        <Fragment>
            <div className={styles.social}>
                <motion.img className = {styles.instagram} src={instagram} alt = "istagram" />
                <motion.img className={styles.linkdin} src ={linkdin} alt="linkdin" />
                <motion.img className={styles.twitter} src = {twitter} alt = "twitter" />
            </div>
        </Fragment>
    )
}

export default Social;