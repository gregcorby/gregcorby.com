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

          <div className="hero-text">
          <h2 className="intro"><span>A sun-drenched<br />&amp; salty designer.</span></h2>
          </div>
          
          <div className="about">
            

                <div className="about-copy">
                  <p>I help brands make digital stuff that<br />looks nice and isn't overly-complicated.</p>
                  <Link to={prefixLink('/work/')}>View work &rarr;</Link>
                </div>
                <div className="hero-image-container">
                  <div className="img-left"></div>
                  <div className="img-right"></div>
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
      container.classList.add('loaded');
      document.body.classList.add('loaded');
    }, 300);
    
    setTimeout(function() {
      container.classList.add('loaded-text')
    }, 600);

    setTimeout(function() {
      document.body.classList.add('loaded-img')
    }, 700);
  }
  componentWillUnmount() {
    var container = document.getElementById('content-container');
    document.body.classList.remove('home-page');
    container.classList.remove('loaded-text');
    document.body.classList.remove('loaded-img');
    container.classList.remove('loaded');
    document.body.classList.remove('loaded');
  }
}
