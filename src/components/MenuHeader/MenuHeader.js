import { useState } from 'react'
import Menu from "../Menu";
import Navbar from "../Navbar";

function MenuHeader() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const onClickMenu = () => {
        setOpenMenu(!isOpenMenu)
    }

    return (
        <>
            <Menu isOpenMenu={isOpenMenu} />
            <Navbar isOpenMenu={isOpenMenu} onClickMenu={onClickMenu} />
        </>
    )
}

export default MenuHeader