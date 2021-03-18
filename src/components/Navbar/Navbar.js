import style from './navbar.module.css'
import cn from 'classnames'

function Navbar({ isOpenMenu, onClickMenu }) {
    const handlerClickMenu = () => {
        onClickMenu && onClickMenu()
    }
    return (
        <nav id={style.navbar}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <a className={cn(style.menuButton, { [style.active]: isOpenMenu })}>
                    <span onClick={handlerClickMenu} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar