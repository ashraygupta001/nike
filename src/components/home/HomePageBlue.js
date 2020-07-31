import React, { Fragment } from 'react';

import NikeLogo from './../nikeLogo/nikeLogo';
import AboutUs from './../about/AboutUs';
import blue from './../../assests/blue.png'
import blueLogo from './../../assests/blue-nike.png'
import BuyNow from './../buy/BuyNow';
 
import styles from './HomePageBlue.module.scss'
import AllProducts from '../allProducts/AllProducts';


const HomePageBlue = () => {
    return(
        <Fragment>
            <div className={styles.page}>
                    <div className={styles.logo}><NikeLogo /></div>
                    <div className={styles.aboutus}><AboutUs /></div>
                    <p className={styles.buynow} ><BuyNow /></p>
                    <img className={styles.shoelogo} src={blueLogo} alt='blue Shoes' />
                    <img className={styles.shoe} src={blue} alt='blue Shoes' />
                    <div className={styles.product}  ><AllProducts /></div>
            </div>
                
            
        </Fragment>
    )
}

export default HomePageBlue;