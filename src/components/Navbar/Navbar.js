import style from './navbar.module.css'
import cn from 'classnames'

function Navbar({ isOpenMenu, bgActive, onClickMenu }) {
    const handlerClickMenu = () => {
        onClickMenu && onClickMenu()
    }
    return (
        <nav id={style.navbar} className={cn({ [style.bgActive]: bgActive })}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <div className={cn(style.menuButton, { [style.active]: isOpenMenu })}>
                    <span onClick={handlerClickMenu} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar