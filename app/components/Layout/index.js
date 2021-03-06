import React from 'react'
import Helmet from 'react-helmet'
import NavBar from '../NavBar'
import Footer from '../Footer'

require('./index.scss')

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Helmet
          titleTemplate='%s  - Optonaut'
          meta={[
            {'name': 'description', 'content': 'Discover, capture and share unique moments and beautiful places just using your phone'},
            {'property': 'og:type', 'content': 'website'},
            {'property': 'og:title', 'content': 'Optonaut - Instagram for Virtual Reality'},
            {'property': 'og:description', 'content': 'Discover, capture and share unique moments and beautiful places just using your smartphone. Get it for free on iPhone or Android.'},
            {'property': 'og:image', 'content': 'http://static.optonaut.co/social/facebook/optonaut.co.jpg'},
            {'property': 'og:site_name', 'content': 'OPTONAUT'},
          ]}
        />
        <NavBar />
        <div id='content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired
}
