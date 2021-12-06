// IMPORTS // ______________________________________________________________

import React from 'react'
import { Link } from 'react-router-dom'
// styles imports
import { NavStyled, StyledLink, Title1 } from '../../styles/components/header'

// JSX // _________________________________________________________________

/**
 * Header component to display website's header
 * @name Header
 * @returns {?JSX}
 */

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

// EXPORT // ______________________________________________________________

export default Header
