import React from "react"

import Nav from "../components/nav"

const NavContainer = ({name, setOpenState, state}) => {
    const handleOpenState = () => {
        setOpenState(state)
    }

    return(
        <Nav name={name} handleOpenState={handleOpenState}></Nav>
    )
}

export default NavContainer