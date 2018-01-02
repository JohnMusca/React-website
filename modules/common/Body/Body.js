import React from 'react'
import PropTypes from 'prop-types'
import HtmlToReact from 'html-to-react'

var HtmlToReactParser = HtmlToReact.Parser;
var htmlToReactParser = new HtmlToReactParser();

class Body extends React.Component {
  render() {

  var reactElement = htmlToReactParser.parse(this.props.content.toString());

    return (
      <div>
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
