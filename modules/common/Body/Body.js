import React from 'react'
import PropTypes from 'prop-types'
import HtmlToReact from 'html-to-react'

var HtmlToReactParser = HtmlToReact.Parser;
var htmlToReactParser = new HtmlToReactParser();

/**
* Body component which takes in a content prop and parses it to render the content.
*
* Props: 
* @String content A content string which is rendered in the body of the page
*
* State vars: None
*/
class Body extends React.Component {
  render() {

  var reactElement = htmlToReactParser.parse(this.props.content.toString());

    return (
      <div class="main">
        <h1>
        Buk Sing Choy Lay Fut
        </h1>

        {reactElement}
      </div>
    )
  }
}

Body.defaultProps = {
  content: '<p>Defualt body content</p>'
}

Body.propTypes = {
  content: PropTypes.string
}

export default Body;
