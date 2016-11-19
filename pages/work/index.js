import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


export default class Sass extends React.Component {
  render () {

    return (
	<div className="page-container" id="content-container">

		      <div className="work-container">
		      <h2 className="work-header">Things I've made.</h2>
			
				<div id="opentable" className="project">
					<div className="project-images">
						<img src="/images/ot-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Opentable <span>—<br /> Misc Projects</span></h2>
						<a href="http://www.opentable.com" target="_blank">Learn More &rarr;</a>
					</div>
					
				</div>		

				<div id="creativemarket" className="project">
					<div className="project-images">
						<img src="/images/cm-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Creative Market <span>—<br /> Misc Projects</span></h2>
						<a href="http://www.creativemarket.com" target="_blank">Learn More &rarr;</a>
					</div>
					
				</div>		

				<div id="detour" className="project">
					<div className="project-images">
						<img src="/images/detour-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Detour <span>—<br /> Misc Brochures &amp; Guides</span></h2>
						<a href="http://www.detour.com" target="_blank">Learn More &rarr;</a>
					</div>
					
				</div>	

				<div id="landscape" className="project">
					<div className="project-images">
						<img src="/images/landscape-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Landscape <span>—<br /> Web App</span></h2>
					</div>
					
				</div>	

				<div id="sneakz" className="project">
					<div className="project-images">
						<img src="/images/sneakz-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Sneakz <span>—<br /> Design &amp; Development</span></h2>
						<a href="http://www.sneakz.com" target="_blank">Learn More &rarr;</a>
					</div>
					
				</div>	

				<div id="strongboalt" className="project">
					<div className="project-images">
						<img src="/images/strongboalt-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Strongboalt <span>—<br /> Design &amp; Development</span></h2>
						<a href="http://www.strongboalt.com" target="_blank">Learn More &rarr;</a>
					</div>
					
				</div>	

				<div id="outsite" className="project">
					<div className="project-images">
						<img src="/images/outsite-image.jpg" />
					</div>
					<div className="project-details">
					<h2 className="title-name">Outsite <span>—<br /> Mobile Booking App</span></h2>
						<a href="http://www.outsite.co" target="_blank">Learn More &rarr;</a>
					</div>
					
				</div>		


		</div>
	</div>
    )
  }
	componentDidMount(){
		var container = document.getElementById('content-container');
	    document.body.classList.add('work-page');
	    
	    setTimeout(function() {
	      container.classList.add('loaded');
	      document.body.classList.add('loaded');
	    }, 300);

	    setTimeout(function() {
	      document.body.classList.add('load-img');
	    }, 800);
	}
	componentWillUnmount() {
		var container = document.getElementById('content-container');
	    container.classList.remove('loaded');
	    document.body.classList.remove('loaded');
	    document.body.classList.remove('work-page');
	    document.body.classList.remove('load-img');
	}
}
