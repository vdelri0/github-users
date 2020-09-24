import React from "react"

import NavContainer from "../containers/navContainer"
import PersonContainer from "../containers/personContainer"
import styles from "./styles/panel.module.css"

import {slide as Menu} from 'react-burger-menu'

const Panel = ({
    url,
    name,
    width,
    componentName,
    openState,
    setOpenState
}) => {

    return (
        <Menu right
            width={width}
            isOpen={openState}
            className={
                styles.body
        }>
            <NavContainer name={componentName}
                setOpenState={setOpenState} state={false}></NavContainer>
            <PersonContainer url={url} name={name}
                openState={openState}></PersonContainer>
        </Menu>
    )
}

export default Panel
