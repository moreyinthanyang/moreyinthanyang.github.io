import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Media from 'react-media'
import Sidebar from '../components/sidebar'

import './index.css'
import '../styles/layout-override.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
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
                  title="More Yin Than Yang"
                  description="Girl moving to Germany"
                />
                <Sidebar
                  title="About More Yin Than Yang"
                  description="Asian girl moving to Germany"
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
