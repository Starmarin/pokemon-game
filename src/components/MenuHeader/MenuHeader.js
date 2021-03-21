import { useState } from 'react'
import Menu from "../Menu";
import Navbar from "../Navbar";

function MenuHeader({ bgActive }) {
    const [isOpenMenu, setOpenMenu] = useState(null);

    const onClickMenu = () => {
        setOpenMenu(prevState => !prevState);
    }

    return (
        <>
            <Menu isOpenMenu={isOpenMenu} onClickMenu={onClickMenu} />
            <Navbar isOpenMenu={isOpenMenu} bgActive={bgActive} onClickMenu={onClickMenu} />
        </>
    )
}

export default MenuHeader