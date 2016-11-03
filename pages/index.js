import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import '../css/main.scss'

export default class Sass extends React.Component {
  render () {


    return (
      <div className="home-container">
          <DocumentTitle title={ 'Greg Corby' }></DocumentTitle>

          <div className="row sm-row hero-text">
            <h2 className="intro"><span>A sun-drenched designer </span><br /><span>living on the salty coast </span><br /><span>of Southern California.</span></h2>

          </div>
          <div className="row sm-row about">
            <div className="column sm-column-75">
              <p>I help brands create &amp; refine meaningful digital experiences. <br />Previously, I've had the pleasure of working with Airbnb, Facebook, Opentable, Creative Market, Detour, Shyp, Teespring and many others.</p>
              <p>If you're interested in working together, <Link to={prefixLink('/contact/')}>shoot me a message,</Link> <br />or find me on <a href="http://www.dribbble.com/gregcorby" target="_blank">Dribbble</a>, <a href="http://www.instagram.com/gregcorby" target="_blank">Instagram</a>, <a href="http://www.twitter.com/gregcorby" target="_blank">Twitter</a>, & <a href="http://www.facebook.com/gregcorby" target="_blank">Facebook</a>.</p>
            </div>
          </div>      
      </div>
    )
  }
  componentDidMount(){
    document.body.classList.add('home-page')
  }
  componentWillUnmount() {
      document.body.classList.remove('home-page')
  }
}
