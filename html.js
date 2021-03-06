import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <!-- D1A7D7C3-3A2C-471F-8C7C-FA5121A07A64 -->
          <DocumentTitle title={ 'ThatsPretty.Cool' }></DocumentTitle>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href="/favicon.ico"/>
          {cssLink}
        </head>
        <body className="min-viewport-height">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
})
