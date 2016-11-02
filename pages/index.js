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
            <h2 className="intro"><span>A sun-drenched designer on the</span><br /><span>salty coast of Southern California.</span></h2>
          </div>
          <div className="row sm-row about">
            <div className="column sm-column-75">
              <p>I focus on creating and refining meaningful digital experiences for great brands including Airbnb, Facebook, Creative Market, Detour, Shyp, Teespring.</p>
              <p>I’m currently available for work, so <Link to={prefixLink('/contact/')}>send me a message</Link> or find me on<br /><a href="http://www.dribbble.com/gregcorby" target="_blank">Dribbble</a>, <a href="http://www.instagram.com/gregcorby" target="_blank">Instagram</a>, <a href="http://www.twitter.com/gregcorby" target="_blank">Twitter</a>, & <a href="http://www.facebook.com/gregcorby" target="_blank">Facebook</a>.</p>
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
