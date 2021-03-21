import { useHistory } from 'react-router-dom';

import style from './header.module.css'

const Header = ({ title, descr }) => {
    const history = useHistory();
    const handlerClickStartGame = () => {
        history.push('/game')
    }
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.silhouette}></div>
            <div className={style.moon}></div>
            <div className={style.container}>
                {
                    title && <h1>{title}</h1>
                }
                {
                    descr && <p>{descr}</p>
                }
                <button onClick={handlerClickStartGame}>Start Game</button>
            </div>
        </header>
    )
}
export default Header;