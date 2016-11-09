import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


export default class Sass extends React.Component {
  render () {

    return (
		<div className="thanks-container">
			<div className="thanks">
				<h2>Thanks! I&#39;ll be in touch.</h2>
				<p><Link to={prefixLink('/')}>Back to the home page &#10548;</Link></p>
			</div>
		</div>
    )
  }
	componentDidMount(){
		document.body.classList.add('thanks-page')
	}
	componentWillUnmount() {
	    document.body.classList.remove('thanks-page')
	}
}
