import React from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'

function newButton(){
    return(
    <button onClick={clearCookie}>Clear Button</button>
    )
}

function clearCookie(){
console.log("log")
}

export default newButton;