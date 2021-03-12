import style from './layout.module.css';

function Layout({ title, colorBg, urlBg, children }) {

    const s = {};
    if (urlBg) { s.backgroundImage = `url(${urlBg})`; s.backgroundSize = 'cover'; }
    if (colorBg) { s.backgroundColor = colorBg }
    return (
        <section className={style.root}
            style={s}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {title && <h3>{title}</h3>}
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children && children}
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;