import { useState } from "react";

export default function User() {
    let [name, setName] = useState('')
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}