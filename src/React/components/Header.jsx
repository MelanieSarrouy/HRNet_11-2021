import React from 'react'
import { Link } from 'react-router-dom'
import { NavStyled, StyledLink, Title1 } from '../../styles/components/header'

const Header = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <Title1>HRnet</Title1>
        </Link>
      </div>
      <NavStyled>
        <StyledLink to="/">Create Employee</StyledLink>
        <StyledLink to="/employees-list">Current Employees</StyledLink>
      </NavStyled>
    </div>
  )
}

export default Header
