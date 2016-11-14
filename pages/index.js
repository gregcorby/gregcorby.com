import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import '../css/main.scss'

export default class Sass extends React.Component {
  render () {


    return (
      <div className="page-container" id="content-container">
        <div className="home-container">
          <DocumentTitle title={ 'Greg Corby' }></DocumentTitle>

          <div className="row sm-row hero-text">
            <h2 className="intro"><span>Greg is a designer in Southern California. Sun-drenched, salty, and super stoked.</span></h2>
          </div>

          <div className="row sm-row about">
            <div className="column sm-column-50">
              <p>I help brands make awesome digital experiences. I've enjoyed working with Airbnb, Facebook, Opentable, Creative Market, Shyp, to name a few.</p>
            </div>
            <div className="column sm-column-50">
              <p>If you're interested in working together, <Link to={prefixLink('/contact/')}>shoot me a message,</Link> or find me on <a href="http://www.dribbble.com/gregcorby" target="_blank">Dribbble</a>, <a href="http://www.instagram.com/gregcorby" target="_blank">Instagram</a>, <a href="http://www.twitter.com/gregcorby" target="_blank">Twitter</a>, & <a href="http://www.facebook.com/gregcorby" target="_blank">Facebook</a>.</p>
            </div>
            </div>      
        </div>
      </div>
    )
  }
  componentDidMount(){
    var container = document.getElementById('content-container');
    document.body.classList.add('home-page');
    setTimeout(function() {
      container.classList.add('loaded')
    }, 300);
  }
  componentWillUnmount() {
    var container = document.getElementById('content-container');
    document.body.classList.remove('home-page');
    container.classList.remove('loaded');
  }
}
