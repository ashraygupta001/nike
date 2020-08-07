import React, { Fragment } from 'react';

import NikeLogo from './../nikeLogo/nikeLogo';
import AboutUs from './../about/AboutUs';
import blue from './../../assests/orange.png'
import blueLogo from './../../assests/orange-logo.png'
import BuyNow from './../buy/BuyNow';
import AllProducts from '../allProducts/AllProducts';
import NikeAirMax from '../nikeAirMax/NikeAirMax';
import Social from '../social/Soical';
 
import styles from './HomePageBlack.module.scss'
import BlueSideButtons from '../SideButtons/BlueSideButton';
import RedSideButtons from '../SideButtons/RedSideButton';
import BlackSideButtons from '../SideButtons/BlackSideButton';

const HomePageBlack = () => {
    return(
        <Fragment>
            <div className={styles.page}>
                    <div className={styles.logo}><NikeLogo /></div>
                    <div className={styles.aboutus}><AboutUs /></div>
                    <div className={styles.buynow} ><BuyNow /></div>
                    <div className={styles.shoes}>
                        <img className={styles.shoelogo} src={blueLogo} alt='blue Shoes' />
                        <img className={styles.shoe} src={blue} alt='blue Shoes' />
                    </div>
                    <div className={styles.sidebuttons}>
                    <div><BlueSideButtons /></div>
                    <div> <RedSideButtons /> </div>
                    <div> <BlackSideButtons /> </div>
                    </div>
                    <div className={styles.product}  ><AllProducts /></div>
                    <div className={styles.nikeairmax}><NikeAirMax /> </div>
                    <div className={styles.social}><Social />  </div>
            </div>
        </Fragment>
    )
}

export default HomePageBlack;