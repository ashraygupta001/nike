import React, { Fragment, useState } from 'react';
import {motion} from 'framer-motion';

import NikeLogo from './../nikeLogo/nikeLogo';
import AboutUs from './../about/AboutUs';
import blue from './../../assests/blue.png'
import blueLogo from './../../assests/blue-nike.png'
import orange from './../../assests/orange.png'
import orangeLogo from './../../assests/orange-logo.png'
import red from './../../assests/red.png'
import redLogo from './../../assests/RED-NIKE.png'
import BuyNow from './../buy/BuyNow';
import AllProducts from '../allProducts/AllProducts';
import NikeAirMax from '../nikeAirMax/NikeAirMax';
import Social from '../social/Soical';
 
import blueStyle from './HomePageBlue.module.scss';

const HomePageBlue = () => {
        const [blueBack, setblueBack] = useState(true);
        const [redBack, setredBack] = useState(false);
        const [blackBack, setblackBack] = useState(false);
        const [backState, setbackState] = useState('1')
        const blueStyles = (e) => {
            if(!blueBack){
                setblueBack(true);
                setredBack(false);
                setblackBack(false);
                setbackState('1');
            }
        };
        const redStyles = (e) => {
            if(!redBack){
                setredBack(true);
                setblueBack(false);
                setblackBack(false);
                setbackState('2');
            }
        };
        const blackStyles = (e) => {
            if(!blackBack){
                setblackBack(true);
                setblueBack(false);
                setredBack(false);
                setbackState('3');
            }
        };  
        const getClass = (backState) => {
            switch(backState){
                case '1': {
                    return blueStyle.pageBlue
                }
                case '2': {
                    return blueStyle.pageRed
                }
                case '3': {
                    return blueStyle.pageBlack
                }
                default:{
                    return blueStyle.pageBlue
                }
            }
        }

        const getLogo = (backState) => {
            switch(backState){
                case '1': {
                    return blueLogo
                }
                case '2': {
                    return redLogo
                }
                case '3': {
                    return orangeLogo
                }
                default: {
                    return blueLogo
                }
            }
        }

        const getShoe = (backState) => {
            switch(backState){
                case '1':{
                    return blue
                }
                case '2': {
                    return red
                }
                case '3': {
                    return orange
                }
                default: {
                    return blue
                }
            }
        }

        const blueNikeLogoVariants = {
            hidden: {
                opacity: 0,
                x: "-100vw"
            },
            visible: {
                opacity: 1,
                x: 0,
                    transition: {
                        type: "spring",
                        mass: .6,
                        stiffness: 70,
                        damping: 11
                    }
            }
        }
        const blueAboutUsVariants = {
            hidden: {
                opacity: 0,
                x: "100vw"
            },
            visible: {
                opacity: 1,
                x: 1, 
                    transition: {
                        type: "spring",
                        mass: .6,
                        stiffness: 70,
                        damping: 11
                    } 
            }
        }
        

    return(
        <Fragment>
            <div className={getClass(backState)}>
                    <motion.div 
                    className={blueStyle.logo}  
                    variants = {blueNikeLogoVariants}
                    initial = "hidden"
                    animate = "visible"
                    >
                    <NikeLogo />
                    </motion.div>
                    <motion.div 
                    className={blueStyle.aboutus}
                    variants = {blueAboutUsVariants}
                    initial = "hidden"
                    animate = "visible"
                    >
                    <AboutUs />
                    </motion.div>
                    <div className={blueStyle.buynow} ><BuyNow /></div>
                    <div className={blueStyle.shoes}>
                        <img className={blueStyle.shoelogo} src={getLogo(backState)} alt='blue Shoes' />
                        <img className={blueStyle.shoe} src={getShoe(backState)} alt='blue Shoes' />
                    </div>
                    <div className={blueStyle.sidebuttons}>
                        <div>
                            <button onClick={blueStyles}>
                                <div className={blueStyle.blueCircle}></div>
                            </button>
                        </div>
                        <div>
                            <button onClick={redStyles}>
                                <div className={blueStyle.redCircle}></div>
                            </button>
                        </div>
                        <div>
                            <button onClick={blackStyles}>
                                <div className={blueStyle.blackCircle}></div>
                            </button>
                        </div>
                    </div>
                    <div className={blueStyle.product}  ><AllProducts /></div>
                    <div className={blueStyle.nikeairmax}><NikeAirMax /> </div>
                    <div className={blueStyle.social}><Social />  </div>
            </div>
        </Fragment>
    )
}

export default HomePageBlue;