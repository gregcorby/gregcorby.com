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
      <header id="header">
        <div className="header-content">
          <div className="logo">
            <Link to={prefixLink('/')}>gregcorby.com</Link>
          </div>
          <ul>
            <li id="work-link"><Link to={prefixLink('/work/')}>Work</Link></li>
            <li id="contact-link"><Link to={prefixLink('/contact/')}>Contact</Link></li>
          </ul>
        </div>
 
      </header> 
      
      <div id="main-container">
        {this.props.children}
      </div>
      <div className="border"></div>
    </div>
    )
  },
  componentDidMount(){
    var toggle = document.getElementById('toggle'),
        logo = document.getElementById('logo-link'),
        workLink = document.getElementById('work-link'),
        contactLink = document.getElementById('contact-link'),
        container = document.getElementById('main-container'),
        header = document.getElementById('header');
    
    logo.addEventListener("click",function(){
      header.classList.remove('open');
      toggle.classList.remove('open');
      container.classList.remove('open');
    },false);
    workLink.addEventListener("click",function(){
      header.classList.remove('open');
      toggle.classList.remove('open');
      container.classList.remove('open');
    },false);
    contactLink.addEventListener("click",function(){
      header.classList.remove('open');
      toggle.classList.remove('open');
      container.classList.remove('open');
    },false);

    toggle.addEventListener("click",function() {
      if (header.classList.contains('open')) {
        header.classList.remove('open');
        toggle.classList.remove('open');
        container.classList.remove('open');
      } else {
        header.classList.add('open');  
        toggle.classList.add('open');  
        container.classList.add('open');  
      }
    },false);
  },
  componentWillUnmount() {
    
  }
})
