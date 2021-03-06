'use strict'

import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import styles from './index.scss'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      shrink: window.scrollY > 40,
      navToggled: false
    }

    this._toggleNav = this._toggleNav.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll)
  }

  _onScroll() {
    const shrink = window.scrollY > 40
    if (shrink !== this.state.shrink) {
      this.setState({ shrink })
    }
  }

  _toggleNav() {
    this.setState({ navToggled: !this.state.navToggled })
  }

  _scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    const cx = classnames({
      shrink: this.state.shrink,
      toggled: this.state.navToggled
    }, styles.root)

    return (
      <div className={cx}>
        <div className={`${styles.wrapper} container`}>
          <div className={`${styles.logo} icon`}><Link to='/' onClick={this._scrollToTop} /></div>
          <div className={styles.nav}>
            <Link to='/about' activeClassName="active" className='navbar-nav-default'>About</Link>
            <Link to='/vr-glasses' activeClassName="active" className='navbar-nav-default'>VR</Link>
            <a className='navbar-nav-default' href='https://medium.com/@optonaut'>Blog</a>
            <a className='navbar-nav-special' href='https://itunes.apple.com/app/apple-store/id1013817652?pt=117831029&ct=website&mt=8'>Try out now</a>
          </div>
          <div onClick={this._toggleNav} className={`${styles.menu} show-small icon`}/>
        </div>
      </div>
    )
  }

}

//<Link to='login' className='navbar-nav-default'>Login</Link>
