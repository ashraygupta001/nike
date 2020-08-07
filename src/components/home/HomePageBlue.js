import React, { Fragment, useState } from 'react';

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
 
import blueStyle from './HomePageBlue.module.scss'
import redStyle from './HomePageRed.module.scss'
import blackStyle from './HomePageBlack.module.scss'


const HomePageBlue = () => {
        const [blueBack, setblueBack] = useState(true);
        const [redBack, setredBack] = useState(false);
        const [blackBack, setblackBack] = useState(false);
        const blueStyles = (e) => {
            if(!blueBack){
                setblueBack(true);
                setredBack(false);
                setblackBack(false);
            }
        };
        const redStyles = (e) => {
            if(!redBack){
                setredBack(true);
                setblueBack(false);
                setblackBack(false);
            }
        };
        const blackStyles = (e) => {
            if(!blackBack){
                setblackBack(true);
                setblueBack(false);
                setredBack(false);
            }
        };        
    return(
        <Fragment>
            {
                blueBack && 
            <div className={blueStyle.page}>
                    <div className={blueStyle.logo}><NikeLogo /></div>
                    <div className={blueStyle.aboutus}><AboutUs /></div>
                    <div className={blueStyle.buynow} ><BuyNow /></div>
                    <div className={blueStyle.shoes}>
                        <img className={blueStyle.shoelogo} src={blueLogo} alt='blue Shoes' />
                        <img className={blueStyle.shoe} src={blue} alt='blue Shoes' />
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
            </div>}
            {
                redBack &&
                <div className={redStyle.page}>
                    <div className={redStyle.logo}><NikeLogo /></div>
                    <div className={redStyle.aboutus}><AboutUs /></div>
                    <div className={redStyle.buynow} ><BuyNow /></div>
                    <div className={redStyle.shoes}>
                        <img className={redStyle.shoelogo} src={redLogo} alt='blue Shoes' />
                        <img className={redStyle.shoe} src={red} alt='blue Shoes' />
                    </div>
                    <div className={redStyle.sidebuttons}>
                        <div>
                            <button onClick={blueStyles}>
                                <div className={redStyle.blueCircle}></div>
                            </button>
                        </div>
                        <div>
                            <button onClick={redStyles}>
                                <div className={redStyle.redCircle}></div>
                            </button>
                        </div>
                        <div>
                            <button onClick={blackStyles}>
                                <div className={redStyle.blackCircle}></div>
                            </button>
                        </div>
                    </div>
                    <div className={redStyle.product}  ><AllProducts /></div>
                    <div className={redStyle.nikeairmax}><NikeAirMax /> </div>
                    <div className={redStyle.social}><Social />  </div>
            </div>
            }
            {
                blackBack &&
                <div className={blackStyle.page}>
                    <div className={blackStyle.logo}><NikeLogo /></div>
                    <div className={blackStyle.aboutus}><AboutUs /></div>
                    <div className={blackStyle.buynow} ><BuyNow /></div>
                    <div className={blackStyle.shoes}>
                        <img className={blackStyle.shoelogo} src={orangeLogo} alt='blue Shoes' />
                        <img className={blackStyle.shoe} src={orange} alt='blue Shoes' />
                    </div>
                    <div className={blackStyle.sidebuttons}>
                        <div>
                            <button onClick={blueStyles}>
                                <div className={blackStyle.blueCircle}></div>
                            </button>
                        </div>
                        <div>
                            <button onClick={redStyles}>
                                <div className={blackStyle.redCircle}></div>
                            </button>
                        </div>
                        <div>
                            <button onClick={blackStyles}>
                                <div className={blackStyle.blackCircle}></div>
                            </button>
                        </div>
                    </div>
                    <div className={blackStyle.product}  ><AllProducts /></div>
                    <div className={blackStyle.nikeairmax}><NikeAirMax /> </div>
                    <div className={blackStyle.social}><Social />  </div>
            </div>
            }
        </Fragment>
    )
}

export default HomePageBlue;