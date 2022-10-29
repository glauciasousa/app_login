import React from 'react'
import * as C from "./style"
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <C.Container>
        <C.Content><Link to="/SignIn">&nbsp;Entrar</Link>
        </C.Content>
        </C.Container>
  )
}

export default NavBar