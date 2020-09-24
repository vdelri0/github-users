import React from "react"
import Nav from "./nav"
import PanelContainer from "../containers/panelContainer"
import styles from "./styles/home.module.css"

import { Container, Row, Col, Button } from "react-bootstrap"

const Home = ({
    url,
    topFive,
    isOpen,
    setIsOpen,
    name,
    setName,
    showPanel,
    componentName,
    width
}) => {

    return (
        <>
            <Container fluid
                className={
                    styles.body
                }>
                {
                    name !== "" &&
                    <PanelContainer
                        width={width}
                        name={name}
                        openState={isOpen}
                        url={url}
                        setOpenState={setIsOpen}>
                    </PanelContainer>
                }
                <Nav name={componentName}></Nav>
                <div className={
                    styles.content
                }>
                    <Row>
                        <Col>
                            <h3>Top 5 GitHub Users</h3>
                            <p>Tap the username to see more information</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col> {
                            topFive.map((item, i) => <Button className={
                                styles.button
                            }
                                key={i}
                                onClick={
                                    () => showPanel(item)
                                }>
                                {item}</Button>)
                        } </Col>

                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Home
