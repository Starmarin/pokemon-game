import style from './game.module.css';
function GamePage({ onChangePage }) {
    const handlerClickButton = () => {
        onChangePage && onChangePage('app')
    }
    return (
        <div className={style.text}>
            <p>This is Game Page</p>
            <button onClick={handlerClickButton}>Back to App</button>
        </div>
    )
}

export default GamePage