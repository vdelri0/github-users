import React from "react"
import Style from "./styles/nav.module.css"

import { Navbar } from "react-bootstrap"
import { ChevronLeft } from 'react-bootstrap-icons';

const Nav = ({ name, handleOpenState }) => {


    return (
        <>
            <Navbar bg="dark" variant="dark">
                {
                    name === "Person" && <span onClick={handleOpenState}
                        className={
                            Style.span
                        }><ChevronLeft color="white" />Back</span>
                }
                <Navbar.Brand className={
                    Style.name
                }
                    href="#home">
                    {name} </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Nav
