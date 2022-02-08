// header component

import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderBox } from './styles'

const Header = () => {
  return (
    <>
      <HeaderBox>
        <header>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <NavLink to="/todo">Todo</NavLink>
          </div>
        </header>
      </HeaderBox>
    </>
  )
}

export default Header
