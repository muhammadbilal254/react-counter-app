import React from "react"

export function Dinner(props) {
    return (
        <>
            <h1>Dinner</h1>
            <p>we are serving {props.dinnerDish} in dinner</p>
            <p>we are serving {props.sweetDish} in sweets</p>
        </>
    )
}

