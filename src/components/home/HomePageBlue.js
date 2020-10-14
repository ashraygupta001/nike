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
        const nikeLogoVariants = {
            hidden: {
                opacity: 0,
                x: "-100vw",
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
            },
            hover: {
                scale: 1.1,
            },
            tap: {
                scale: .9,
            }
        }
        const aboutUsVariants = {
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
            },
            hover: {
                scale: 1.1,
            },
            tap: {
                scale: .9,
            }
        }
        const buyNowVariants = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeIn"
                    }
            }
        }
        
        const allProductVariants = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeIn"
                    }
            },
            hover: {
                scale: 1.1,
            },
            tap: {
                scale: .9
            }
        }
        const nikeMaxVariants = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                    transition: {
                        type: "tween",
                        duration: 1,
                        ease: "easeIn"
                    }
            },
            hover: {
                scale: 1.1,
            },
            tap: {
                scale: .9
            }
        }
    return(
        <Fragment>
            <div className={getClass(backState)}>
                    <motion.div 
                    className={blueStyle.logo}  
                    variants = {nikeLogoVariants}
                    initial = "hidden"
                    animate = "visible"
                    whileHover = "hover"
                    whileTap = "tap"
                    >
                    <NikeLogo />
                    </motion.div>
                    <motion.div 
                    className={blueStyle.aboutus}
                    variants = {aboutUsVariants}
                    initial = "hidden"
                    animate = "visible"
                    whileHover = "hover"
                    whileTap = "tap"
                    >
                    <AboutUs />
                    </motion.div>
                    <motion.div
                    className={blueStyle.buynow}
                    variants = {buyNowVariants}  
                    initial = "hidden"
                    animate = "visible"
                    >
                     <BuyNow />
                     </motion.div>
                    <div className={blueStyle.shoes}>
                        {blueBack && 
                            <div>
                                <img className={blueStyle.shoelogo} src={blueLogo} alt='blue Shoes' />
                                <img className={blueStyle.shoe} src={blue} alt='blue Shoes' />
                            </div>
                        }
                        {redBack && 
                        <div>
                            <img className={blueStyle.shoelogo} src={redLogo} alt='blue Shoes' />
                            <img className={blueStyle.shoe} src={red} alt='blue Shoes' />
                        </div>
                        }
                        {blackBack && 
                        <div>
                            <img className={blueStyle.shoelogo} src={orangeLogo} alt='blue Shoes' />
                            <img className={blueStyle.shoe} src={orange} alt='blue Shoes' />
                        </div>
                        }
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
                    <motion.div className={blueStyle.product}
                    variants = {allProductVariants}
                    initial = "hidden"
                    animate = "visible"
                    whileHover = "hover"
                    whileTap = "tap"
                    >
                    <AllProducts />
                    </motion.div>
                    <motion.div className={blueStyle.nikeairmax}
                    variants = {nikeMaxVariants}
                    initial = "hidden"
                    animate = "visible"
                    whileHover = "hover"
                    whileTap = "tap"
                    >
                    <NikeAirMax /> 
                    </motion.div>
                    <motion.div className={blueStyle.social}
                    variants = {nikeMaxVariants}
                    initial = "hidden"
                    animate = "visible"
                    >
                    <Social />  
                    </motion.div>
            </div>
        </Fragment>
    )
}

export default HomePageBlue;