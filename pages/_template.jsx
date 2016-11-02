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
        <div className="row sm-row">
          <div className="column sm-column-20">
            <h2 className="logo"><Link to={prefixLink('/')} >Greg Corby</Link></h2>
          </div>
          <ul className="column sm-column-80">
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
