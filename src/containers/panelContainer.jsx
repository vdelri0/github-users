import React from "react"

import Panel from "../components/panel"

const PanelContainer = ({
    url,
    name,
    width,
    openState,
    setOpenState
}) => {
    const componentName = "Person"

    return (
        <Panel url={url}
            name={name}
            componentName={componentName}
            width={width}
            openState={openState}
            setOpenState={setOpenState}></Panel>
    )
}

export default PanelContainer
