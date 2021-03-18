import { Link } from "react-router-dom";

import style from './menu.module.css'
import cn from 'classnames';

const MENU = [
    {
        id: 'fvef',
        title: 'HOME',
        to: '/'
    },
    {
        id: 'fvdf',
        title: 'GAME',
        to: '/game'
    },
    {
        id: 'fveww',
        title: 'ABOUT',
        to: '/about'
    },
    {
        id: 'fver',
        title: 'CONTACT',
        to: '/contact'
    }
]

function Menu({ isOpenMenu, onClickMenu }) {

    return (
        <div className={cn(style.menuContainer, { [style.active]: isOpenMenu === true, [style.deactive]: isOpenMenu === false })}>
            <div className={style.overlay} />
            <div className={style.menuItems}>
                <ul>
                    {
                        MENU.map(({ id, to, title }) => (
                            <li key={id} onClick={onClickMenu}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu