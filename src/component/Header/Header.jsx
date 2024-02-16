import { Link } from  'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { FaBars } from 'react-icons/fa'

import './Header.scss'
import logo from '../../assest/tmovie.png'


const menus = [
    {
        display: 'Home',
        path:'/homeMovie'
    },
    {
        display: 'Movies',
        path:'/movies'
    },
    {
        display: 'TV Series',
        path:'/tv'
    }
]



function Header() {
    const [active, setActive ] = useState(false)
    useEffect(
        () => {
            const toggleHeader = () => {
                const w = window.scrollY || document.documentElement.scrollTop
                w  < 100 ? setActive(true) : setActive(false)
            } 
            const activeHeader = () => {
                window.addEventListener('scroll', toggleHeader)
            }
            activeHeader()

            return () => {
                window.removeEventListener('scroll', toggleHeader)
            } 
        },[active]
    )

    const handleVisibleMenu = useCallback(() => {
        document.querySelector('.submenu-mb').classList.toggle('active')
    }, [])


    

    return (
        <div className={active ? 'header' : 'header active'}>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h2>dMovies</h2>
                </div>
                <div className="menu">
                    {menus.map((menu, i) => (
                        <Link to={menu.path} key={i}>
                            <li className={'menu-item'}>
                                <p>{menu.display}</p>
                            </li>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="cotainer-mb">
                <div className="logo-mb">
                    <img src={logo} alt="" />
                    <h2>dMovies</h2>
                </div>
                <div className="menu-mb" onClick={handleVisibleMenu}>
                    <FaBars className='iconBars-mb'/>

                    <div className='submenu-mb'>
                        <div className="submenu-mb-inner">
                            {/* <div className="menuClose-mb" onClick={() => document.querySelector('.submenu-mb').classList.remove('active')}>X</div> */}
                            {menus.map((menu, i) => (
                                <Link to={menu.path} key={i} >
                                    <li className={'menu-item__mb'}>
                                        <p>{menu.display}</p>
                                    </li>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;