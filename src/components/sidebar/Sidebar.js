import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    const onSubmitLogOut = () => {
        navigate('/');
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        window.location.reload();
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={images.logo} alt="" />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {localStorage.getItem('userRole') === 'admin' ? (
                    <>
                    <div className={`sidebar__menu__item ${activeIndex === 1 && 'active'}`} onClick={closeSidebar}>
                        <div className="sidebar__menu__item__icon">
                            <i className='bx bx-home-alt'></i>
                        </div>
                        <div className="sidebar__menu__item__txt">
                            Add Users
                        </div>
                    </div>
                </>
                ) : (
                localStorage.getItem('userRole') === 'manager' ? (
                    <>
                        <div className={`sidebar__menu__item ${activeIndex === 1 && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                <i className='bx bx-home-alt'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Save File and Message
                            </div>
                        </div>
                    </>
                ) : (
                    localStorage.getItem('userRole') === 'worker' ? (
                        <>
                        <div className={`sidebar__menu__item ${activeIndex === 1 && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                <i className='bx bx-home-alt'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Save Message
                            </div>
                        </div>
                    </>
                    ) : (
                        <>
                            <h1>Invalid User</h1>
                        </>
                    )
                ))}
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt" onClick={onSubmitLogOut}>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
