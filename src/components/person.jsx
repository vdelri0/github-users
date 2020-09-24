import React from "react"


import Styles from "./styles/person.module.css"

// import axios from "axios"
import { Media } from "react-bootstrap"
import Image from "react-bootstrap/Image"

const Person = ({ user, imageSize }) => {

    return (
        <>
            <Media className={Styles.mediaBody}>
                <Image width={imageSize.width}
                    height={imageSize.height}
                    className="mr-3"
                    src={user.avatar_url}
                    roundedCircle
                />
                <Media.Body>
                    <h5>{user.name}</h5>
                    <p>
                        {!user.location ? "There is no location available." : user.location}
                    </p>
                    <hr />
                </Media.Body>
            </Media>
        </>
    )
}

export default Person
