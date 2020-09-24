import React, {useState} from "react"

import Home from "../components/home"

const HomeContainer = ({ url, topFive, header, description }) => {
    const componentName = "Home"
    const width = "100%"
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState("")

    const showPanel = (name) => {
        setIsOpen(!isOpen)
        setName(name)
    }

    return (
        <Home url={url} topFive={topFive} isOpen={isOpen} setIsOpen={setIsOpen}
            name={name} setName={setName} showPanel={showPanel} header={header} description={description}
            componentName={componentName} width={width}></Home>
    )
}

export default HomeContainer