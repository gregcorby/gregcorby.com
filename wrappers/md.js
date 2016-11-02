import React from 'react'
import DocumentTitle from 'react-document-title'
import moment from 'moment'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <div className="content">
          <div className="container">
            <DocumentTitle title={ `PrettyCool  - ${ post.title }` || 'PrettyCool' }></DocumentTitle>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    )
  },
})
