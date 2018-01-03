import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'


var instagram_link = "<span style='padding-left:10px;'><iframe src='//instagram.com/p/VID_ID/embed' width='230' height='300' frameborder='0' scrolling='no' allowtransperency='true'></iframe></span>";

//Content passed into body component.
var content="<p>Our Training comprises a variety and combination of:</p>" +
            "<ul>" +
              "<li>Practical instruction of Buk Sing philosophies and applications;</li>" + 
              "<li>Strong focus on combat techniques and tactics;</li>" + 
              "<li>Partner drills / Pad work;</li>" + 
              "<li>Sparring;</li>" + 
              "<li>Kung Fu Forms including use of weapons;</li>" + 
              "<li>Wooden dummy training.</li>" + 
            "</ul>" +
            "<p>Sifu Gary Mallia believes that effort equals reward and that the results from his instruction, will improve:</p>" + 
            "<ul>" + 
              "<li>Self Confidence and Self Esteem;</li>" + 
              "<li>Ability to comprehensively and effectively defend against a variety of opponents;</li>" + 
              "<li>Physical Fitness and Well Being;</li>" + 
              "<li>Flexibility, Balance and Co-Ordination.</li>" + 
            "</ul>" + 
            "<p>" + 
            instagram_link.replace('VID_ID', 'BZe5g8QjVyw') + 
            instagram_link.replace('VID_ID', 'BcUS3zMDONZ') + 
            instagram_link.replace('VID_ID', 'BZXa8wgjSr7') + 
            "</p>";

/**
* Our Training page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class OurTraining  extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>  
      <div className="hero-image-training"></div>
        <Body heading="Our training" content={content}/>
        <Footer />
      </div>
    )
  }
}

export default OurTraining;
