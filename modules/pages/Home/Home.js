import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

//content passed into body component
var content = "<p>Home page content</p>";

/**
* Home page component used to render the page.
* This is the default route for the site.
*
* Props:      None
* 
* State vars: None
*/
class Home extends React.Component {
  render() {
    return (
      <div> 
        <Body content={content}/>
        <Footer />
      </div>
    )
  }
}

export default Home;
