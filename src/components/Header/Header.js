import React from 'react'
import { Link } from "gatsby"
import {
  HeaderHolder,
  LogoWrapper,
  Nav,
  NavList,
  NavItem,
  NavButtonWrapper,
  NavButton,
  Pipe
} from './Header.style'

const Header = () => {
  return (
    <HeaderHolder>
      <LogoWrapper>
        <Link to="/">
          <a>
            a
          </a>
        </Link>
      </LogoWrapper>
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/">
              <a>O que é Hive?</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              <a>Ferramentas</a>
            </Link>
          </NavItem>
        </NavList>
      </Nav>
      <NavButtonWrapper>
        <Link to="/">
          <a>Entrar</a>
        </Link>
        <Pipe></Pipe>
        <Link to="/">
          <a>Cadastre-se</a>
        </Link>
      </NavButtonWrapper>
    </HeaderHolder>
  )
}

export default Header