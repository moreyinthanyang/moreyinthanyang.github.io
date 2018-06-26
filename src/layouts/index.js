import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Media from 'react-media'
import Sidebar from '../components/sidebar'

import './index.css'
import '../styles/layout-override.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title='More Yin Than Yang'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header title='More Yin Than Yang'/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        { matches => 
          matches ? (
            <div 
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px'
              }}
            >
              <div style={{ flex:1 }}>{children()}</div> 
            </div>

          ) : (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px'
              }}
            >
              <div style={{ flex: 2.5, paddingRight: '30px' }}>
                {children()}
              </div>

              <div style={{ flex:1 }}>
                <Sidebar
                  title='More Yin Than Yang '
                  description='  is a YouTube channel and website about moving to Germany.'
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
