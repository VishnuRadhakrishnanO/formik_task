import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
export default function UserDelete(props) {

    useEffect(async (e) => {
        await fetch(`https://5ff9537617386d0017b51c4a.mockapi.io/test/users/${props.match.params.id}`

            , {

                method: "DELETE",

            }

        )



    }, []


    )
    return <>
        <h1> User {props.match.params.id} is deleted</h1>
    </>
}