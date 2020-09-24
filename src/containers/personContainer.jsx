import React, { useState, useEffect } from "react"

import Person from "../components/person"

import axios from "axios"

const PersonContainer = ({ name, openState, url }) => {

    const imageSize = {
        width: 64,
        height: 64
    }

    const [user, setUser] = useState({ name: "", location: "", avatar_url: "" })

    const api = axios.create({ baseURL: url.concat(name) });

    const getUsers = async () => {
        let data = await api.get().then(({ data }) => data);
        console.log(data)
        setUser(data)
    };

    useEffect(() => {
        getUsers()
    }, [openState])

    return (
        <>
            <Person user={user} imageSize={imageSize}></Person>
        </>
    )

}

export default PersonContainer
