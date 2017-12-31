import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

class Home extends React.Component {
  render() {
    return (
			<div> 
				<Header />
				<Body content="Home page content" />
				<Footer />
			</div>
		)
  }
}

export default Home;
