import style from './layout.module.css';

function Layout({ title, descr, colorBg, urlBg }) {
    const background = colorBg ? { backgroundColor: colorBg } : { background: `url(${urlBg})`, backgroundSize: 'cover' };
    return (
        <section className={style.root}
            style={background}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {title && <h3>{title}</h3>}
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;