import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
    <div className="container">
      <header>
        <div className="row">
          <div className="column column-40">
            <h2 className="logo"><Link to={prefixLink('/')} >Greg Corby</Link></h2>
          </div>
          <ul className="column column-60">
            <li><Link to={prefixLink('/work/')}>Work</Link></li>
            <li><Link to={prefixLink('/contact/')}>Contact</Link></li>
          </ul>
        </div>
      </header>
      <div className="page-container">
        {this.props.children}
      </div>
    </div>
    )
  }
})
