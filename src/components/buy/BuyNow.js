import React, { Fragment } from 'react';
import cart from './../../assests/shopping-cart.png'

import styles from './BuyNow.module.scss';

const BuyNow = () => {
    return(
        <Fragment>
            <div className={styles.container}>
                <p className={styles.buynow}>Buy now</p>
                <img className={styles.cart} src ={cart} alt= "shopping cart" />
            </div>
        </Fragment>
    )
}

export default BuyNow;
