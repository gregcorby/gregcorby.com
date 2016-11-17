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
          <h2 className="intro"><span>Greg Corby is a <br />sun-drenched, <br />salty designer</span></h2>
          </div>
          
          <div className="about">
            <div className="row sm-row">
                <div className="hero-image column sm-column-50"></div>
                <div className="about-copy column sm-column-50">
                  <p>I’m Greg Corby, a designer working in Southern California. I help brands & startups create digital stuff that’s not overly-complicated and looks nice, too.</p>
                  <p>If you're interested in working together, <Link to={prefixLink('/contact/')}>shoot me a message,</Link> or find me on <a href="http://www.dribbble.com/gregcorby" target="_blank">Dribbble</a>, <a href="http://www.instagram.com/gregcorby" target="_blank">Instagram</a>, <a href="http://www.twitter.com/gregcorby" target="_blank">Twitter</a>, & <a href="http://www.facebook.com/gregcorby" target="_blank">Facebook</a>.</p>            
                </div>
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
    setTimeout(function() {
      container.classList.add('loaded-two')
    }, 3000);
  }
  componentWillUnmount() {
    var container = document.getElementById('content-container');
    document.body.classList.remove('home-page');
    container.classList.remove('loaded');
  }
}
