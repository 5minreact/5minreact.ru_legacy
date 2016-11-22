import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
// import ReadNext from '../ReadNext'
import './style.css'
import '../../static/css/highlight.css'

const DisqusThread = require('react-disqus-thread')

class SitePost extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        const home = (
        <div>
          <Link className='gohome' to={ prefixLink('/') }> Все эпизоды
          </Link>
        </div>
        )

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                   <div className='date-published'>
                    { moment(post.date).format('DD MMMM YYYY') }
                  </div>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                  <DisqusThread
                    shortname="5minreact"
                    title={post.title}
                    url={`https://5minreact${this.props.location.pathname}`}
                  />
                </div>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
