import style from './header.module.css'

function Header({ title, descr, onClickButton }) {
    const handlerClickStartGame = () => {
        onClickButton && onClickButton('game')
    }
    return (

        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <button onClick={handlerClickStartGame}>Start Game</button>
            </div>
        </header>
    )
}
export default Header;