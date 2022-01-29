import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import urch from '../../assets/urch.jpg'
import { BiMessage } from 'react-icons/bi'
import { GrNotification } from 'react-icons/gr'
import { FiSettings } from 'react-icons/fi'
import { IoIosAnalytics } from 'react-icons/io'
import { BiAnalyse } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { BiBitcoin } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaOsi } from 'react-icons/fa'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { BiPlanet } from 'react-icons/bi'
import { Fa500Px } from 'react-icons/fa'
import { SiAuth0 } from 'react-icons/si'
import { useState } from 'react'





function Navbar() {

    //Hook for Navmenu
    const [menu, setMenu] = useState(false)

    // Hooks for menu items links

    const [click, setClick] = useState(false)
    const [crypto, setCrypto] = useState(false)
    const [proj, setProj] = useState(false)
    const [ecomm, setEcomm] = useState(false)
    const [email, setEmail] = useState(false)
    const [element, setElement] = useState(false)
    const [advance, setAdvance] = useState(false)
    const [chart, setChart] = useState(false)
    const [pages, setPages] = useState(false)
    const [auth, setAuth] = useState(false)
    const [btn ,setBtn] = useState (false)




    const showAuth = () => {

        setAuth(!auth)

    }


    const changeBtn = () => {

        setBtn(!btn)


    }
    const showPages = () => {

        setPages(!pages)
    }
    const showAdvance = () => {

        setAdvance(!advance)
    }
    const showChart = () => {

        setChart(!chart)
    }
    const showMenu = () => {

        setMenu(!menu)
    }
    const showUI = () => {

        setElement(!element)
    }
    const showEmail = () => {
        setEmail(!email)
    }
    const showEcomm = () => {
        setEcomm(!ecomm)
    }
    const showBitcoin = () => {
        setCrypto(!crypto)
    }

    const showProj = () => {
        setProj(!proj)
    }

    const showLink = () => {
        setClick(!click)
    }

    return (
        <div className="navbar">


            <div className='navbar__wrapper'>
                <div className="navbar__left">
                    <div className="navbar__bars" onClick={showMenu}>
                        <FaBars size='20' />
                    </div>
                </div>

                <div className="navbar__right">
                    <div className="navbar__flag">

                    </div>
                    <div className="navbar__message">
                        <BiMessage size='20' />
                    </div>
                    <div className="navbar__notification">
                        <GrNotification size='20' />
                        <span className='note'> 3 </span>
                    </div>
                    <div className="navbar__profile__pix">
                        <img src={urch} alt="" className='navbar__img' />
                    </div>
                    <div className="navbar__settings">
                        <FiSettings size='20' />
                    </div>
                </div>
            </div>

            <div className={menu ? "menu__bar__wrapper__active" : 'menu__bar__wrapper'}>
                <div className="menu__bar">
                    <div className="menu__header">
                        <p className="header">
                            Baba Lu
                        </p>
                    </div>

                    <div className="menu__user__details">
                        <img src={urch} alt="" className="menu__img" />
                        <div className="user__details">
                            <p className='user__name'>  Mr.Unegbu Clinton</p>
                            <p className='user__email'>UnegbuKingsley@gmail.com</p>
                        </div>
                    </div>
                    <div className="menu__btns">
                        <button className={btn ? 'menu__btn' : "menu__btn__nostyle"} onClick={changeBtn} >
                            Main
                        </button>

                        <button className={btn ? 'menu__btn__nostyle' : "menu__btn"} onClick={changeBtn}>
                            Extra
                        </button>
                    </div>

                </div>

                <div className="menu__bar__second">
                    <div className="menu__unique">
                        <p className='menu__unique__1'>MAIN</p>
                        <p className='menu__unique__2'>UNIQUE DASHBOARD</p>
                    </div>

                    <div className={click ? "analytics__wrapper__active" : "analytics__wrapper"} >
                        <span className="analytics__icon">
                            < BiAnalyse />
                        </span>
                        <div className="analytics" onClick={showLink} >

                            <p className='analytic__ana'> Analytics</p>
                        </div>

                    </div>

                    <ul className={click ? 'analytic__links__active' : 'analytic__links'}>
                        <li className='analytic__link__item'>
                            <a href="#" className='analytic__link'> DashBoard</a>
                        </li>

                        <li className='analytic__link__item'>
                            <a href="#" className='analytic__link'> Customer</a>
                        </li>

                        <li className='analytic__link__item'>
                            <a href="#" className='analytic__link'> Report</a>
                        </li>
                    </ul>


                    <div className={crypto ? "crypto__wrapper__active" : "crypto__wrapper"}>
                        <span className="crypto__icon"> <BiBitcoin size='20' /> </span>
                        <div className="crypto" onClick={showBitcoin}>
                            <p className='crypto__coin'> Crypto</p>
                        </div>
                    </div>

                    <ul className={crypto ? 'crypto__links__active' : 'crypto__links'}>
                        <li className='crypto__link__item'>
                            <a href="#" className='crypto__link'> DashBoard</a>
                        </li>

                        <li className='crypto__link__item'>
                            <a href="#" className='crypto__link'> Exchange </a>
                        </li>

                        <li className='crypto__link__item'>
                            <a href="#" className='crypto__link'> Wallet</a>
                        </li>

                        <li className='crypto__link__item'>
                            <a href="#" className='crypto__link'> Crypto news</a>
                        </li>

                        <li className='crypto__link__item'>
                            <a href="#" className='crypto__link'> ICO List</a>
                        </li>

                        <li className='crypto__link__item'>
                            <a href="#" className='crypto__link'> settings</a>
                        </li>
                    </ul>
                </div>

                <div className={proj ? "projects__wrapper__active" : "projects__wrapper"}>

                    <span className='project__icon'>  <IoIosAnalytics /> </span>
                    <div className="projects__active" onClick={showProj}>

                        <p className='projects__coin'> Projects</p>
                    </div>

                </div>

                <ul className={proj ? 'projects__links__active' : 'projects__links'}>
                    <li className='projects__link__item'>
                        <a href="#" className='projects__link'> DashBoard</a>
                    </li>

                    <li className='projects__link__item'>
                        <a href="#" className='projects__link'> Client </a>
                    </li>

                    <li className='projects__link__item'>
                        <a href="#" className='projects__link'> Team</a>
                    </li>

                    <li className='projects__link__item'>
                        <a href="#" className='projects__link'> Task</a>
                    </li>

                    <li className='projects__link__item'>
                        <a href="#" className='projects__link'> Projects</a>
                    </li>

                    <li className='projects__link__item'>
                        <a href="#" className='projects__link'> settings</a>
                    </li>
                </ul>

                <div className={ecomm ? "ecommerce__wrapper__active" : "ecommerce__wrapper"}>
                    <span className="ecommerce__icon">
                        <AiOutlineShoppingCart size='20' />
                    </span>
                    <div className="ecommerce" onClick={showEcomm}>
                        <p className='ecommerce__coin'> E-commerce</p>
                    </div>
                </div>

                <ul className={ecomm ? 'ecommerce__links__active' : 'ecommerce__links'}>
                    <li className='ecommerce__link__item'>
                        <a href="#" className='ecommerce__link'> DashBoard</a>
                    </li>

                    <li className='ecommerce__link__item'>
                        <a href="#" className='ecommerce__link'> Products </a>
                    </li>

                    <li className='ecommerce__link__item'>
                        <a href="#" className='ecommerce__link'> Product List</a>
                    </li>

                    <li className='ecommerce__link__item'>
                        <a href="#" className='ecommerce__link'> Productt Details</a>
                    </li>

                    <li className='ecommerce__link__item'>
                        <a href="#" className='ecommerce__link'> Cart</a>
                    </li>

                    <li className='ecommerce__link__item'>
                        <a href="#" className='ecommerce__link'> Checkout</a>
                    </li>
                </ul>


                <div className="menu__bar__third">
                    <div className="menu__unique">
                        <p className='menu__unique__1'>APPS</p>
                        <p className='menu__unique__2'>MORDER APPLICATIONS</p>
                    </div>

                    <div className={email ? "email__wrapper__active" : "email__wrapper"}>

                        <div className="Email" onClick={showEmail}>
                            <span className="email__icon">
                                <HiOutlineMail />
                            </span>
                            <p className='email__box'> E-mail</p>
                        </div>

                        <ul className={email ? "email__links__active" : 'email__links'}>
                            <li className="email__link__box">
                                <a href="#" className='email__link'> Inbox</a>
                            </li>

                            <li className="email__link__box">
                                <a href="#" className='email__link'> Read Email</a>
                            </li>
                        </ul>

                        <ul className='app__links'>
                            <li className="app__link__box">
                                <a href="#" className='app__link'>Chat</a>
                            </li>

                            <li className="app__link__box">
                                <a href="#" className='app__link'>Contact List</a>
                            </li>

                            <li className="app__link__box">
                                <a href="#" className='app__link'> Calendar</a>
                            </li>

                            <li className="app__link__box">
                                <a href="#" className='app__link'> Invoice </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menu__bar__forth">
                    <div className="menu__unique">
                        <p className='menu__unique__1'>COMPONENTS</p>
                        <p className='menu__unique__2'>BOOTSTRAPS AND CUSTOM</p>
                    </div>
                </div>


                <div className={element ? "ui__wrapper__active" : "ui__wrapper"}>
                    <span className="ui__icon">
                        <BiPlanet />
                    </span>
                    <div className="ui" onClick={showUI}>
                        <p className='ui__box'> UI Element</p>
                    </div>
                </div>

                <ul className={element ? "ui__links__active" : "ui__links"}>
                    <li className="ui__link__box">
                        <a href="#" className='ui__link'> Alert </a>
                    </li>

                    <li className="ui__link__box">
                        <a href="#" className='ui__link'> Avartar</a>
                    </li>

                    <li className="ui__link__box">
                        <a href="#" className='ui__link'> Button</a>
                    </li>

                    <li className="ui__link__box">
                        <a href="#" className='ui__link'> Badge</a>
                    </li>
                </ul>

                <div className={advance ? "advance__wrapper__active" : "advance__wrapper"}>
                    <span className="advance__icon">
                        <FaOsi />
                    </span>
                    <div className="advance" onClick={showAdvance}>
                        <p className='advance__box'> Advance UI</p>
                    </div>

                </div>

                <ul className={advance ? "advance__links__active" : "advance__links"}>
                    <li className="advance__link__box">
                        <a href="#" className='advance__link'> Animation </a>
                    </li>

                    <li className="advance__link__box">
                        <a href="#" className='advance__link'> Clip Board</a>
                    </li>

                    <li className="advance__link__box">
                        <a href="#" className='advance__link'> Dragular </a>
                    </li>

                    <li className="advance__link__box">
                        <a href="#" className='advance__link'> File Manager </a>
                    </li>
                </ul>

                <div className={chart ? "chart__wrapper__active" : "chart__wrapper"}>
                    <span className='chart__icon'>
                        <AiOutlineAreaChart size='20' />
                    </span>
                    <div className="chart" onClick={showChart}>
                        <p className='chart__box'> Chart </p>
                    </div>
                </div>


                <ul className={chart ? "chart__links__active" : "chart__links"}>
                    <li className="chart__link__box">
                        <a href="#" className='charGiConcentrationOrbt__link'> Apex</a>
                    </li>

                    <li className="chart__link__box">
                        <a href="#" className='chart__link'> Chartjs</a>
                    </li>

                    <li className="chart__link__box">
                        <a href="#" className='chart__link'> JustGage</a>
                    </li>
                </ul>

                <div className="menu__bar__fifth">
                    <div className="menu__unique">
                        <p className='menu__unique__1'>CRAFTED</p>
                        <p className='menu__unique__2'>UNIQUE EXTRA PAGES</p>
                    </div>
                </div>

                <div className={pages ? "pages__wrapper__active" : "pages__wrapper"}>
                    <span className="pages__icon">
                        <Fa500Px />
                    </span>
                    <div className="pages" onClick={showPages}>
                        <p className="pages__box">
                            Pages
                        </p>
                    </div>
                </div>


                <ul className={pages ? "pages__links__active" : "pages__links"}>
                    <li className="pages__link__box">
                        <a href="#" className='pages__link'> Apex</a>
                    </li>

                    <li className="pages__link__box">
                        <a href="#" className='pages__link'> Chartjs</a>
                    </li>

                    <li className="pages__link__box">
                        <a href="#" className='pages__link'> JustGage</a>
                    </li>
                </ul>

                    <div className={auth ? "auth__wrapper__active" : "auth__wrapper"}>
                        <span className="auth__icon">
                            <SiAuth0 />
                        </span>
                        <div className="auth" onClick={showAuth}>
                            <p className="auth__box">
                                Authentic
                            </p>
                        </div>
                    </div>
                


                <ul className={auth ? "auth__links__active" : "auth__links"}>
                    <li className="auth__link__box">
                        <a href="#" className='auth__link'> Login</a>
                    </li>

                    <li className="auth__link__box">
                        <a href="#" className='auth__link'> Register</a>
                    </li>

                    <li className="auth__link__box">
                        <a href="#" className='auth__link'> Error 500</a>
                    </li>
                </ul>


            </div>


        </div>


    )
}

export default Navbar
