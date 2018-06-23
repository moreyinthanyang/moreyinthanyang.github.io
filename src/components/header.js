import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#F5F5F5',
      marginBottom: '3rem',
      borderBottom: '2px solid #E6E6E6'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center', fontSize: '18px' }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
