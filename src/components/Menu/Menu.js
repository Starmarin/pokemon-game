import style from './menu.module.css'
import cn from 'classnames';

function Menu({ isOpenMenu }) {
    return (
        <div className={cn(style.menuContainer, { [style.active]: isOpenMenu, [style.deactive]: !isOpenMenu })}>
            <div className={style.overlay} />
            <div className={style.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu