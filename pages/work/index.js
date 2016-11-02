import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


export default class Sass extends React.Component {
  render () {

    return (
      <div className="work-container">
	
		<div id="opentable" className="project">
			<div className="project-images">
				<img src="/images/ot-web-home.png" />
			</div>
			<div className="project-details">
				<h2 className="title-name">Opentable</h2>
				<a href="http://www.opentable.com" target="_blank">Launch Project</a>
			</div>
		</div>		

		<div id="creativemarket" className="project">
			<div className="project-images">
				<img src="/images/ot-web-home.png" />
			</div>
			<div className="project-details">
				<h2 className="title-name">Creative Market</h2>
				<a href="http://www.opentable.com" target="_blank">Launch Project</a>
			</div>
		</div>		

		<div id="detour" className="project">
			<div className="project-images">
				<img src="/images/ot-web-home.png" />
			</div>
			<div className="project-details">
				<h2 className="title-name">Detour</h2>
				<a href="http://www.opentable.com" target="_blank">Launch Project</a>
			</div>
		</div>		


	</div>
    )
  }
	componentDidMount(){
		document.body.classList.add('work-page')
	}
	componentWillUnmount() {
	    document.body.classList.remove('work-page')
	}
}
