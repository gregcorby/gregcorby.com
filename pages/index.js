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
          <h2 className="intro"><span>Greg Corby is a <br />sun-drenched, <br />salty designer.</span></h2>
          </div>
          
          <div className="about">
            <div className="row sm-row">
                <div className="hero-image column sm-column-50"></div>
                <div className="about-copy column sm-column-50">
                  <p>I help brands make digital things that<br />aren't over-complicated and look nice.</p>
                  <Link to={prefixLink('/contact/')}>Let's work together</Link>
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
      container.classList.add('loaded-text')
    }, 1200);
  }
  componentWillUnmount() {
    var container = document.getElementById('content-container');
    document.body.classList.remove('home-page');
    container.classList.remove('loaded');
  }
}
