import React from 'react'
import Header from '../../common/Header/Header'
import Body from '../../common/Body/Body'
import Footer from '../../common/Footer/Footer'

//Content passed into body component
var content = "<p>The Buk Sing Choy Lay Fut Kung Fu School services the Northern and Western suburbs and is located at 74 Melville Road, Brunswick West, which has immediate access to the suburbs of; Strathmore, Essendon, Pascoe Vale, Moonee Ponds, Ascot Vale, Maribyrnong, Kensington, Flemington, North Melbourne, Brunswick and Coburg.</p>" +
              "<p>Training times are Tuesday and Thursday - 6:30pm to 8:30pm.</p>" +
              "<p>Classes cater to all age groups, genders and backgrounds.</p>"+ 
              "<p><img src='/public/img/mal_small.jpg' /></p>" +
              "<p>Small class sizes provide a high degree of pastoral care and teaching is conducted in a non violent non threatening manner with particular regard to humility and respect.</p>" +
              "<p>Dress consists of: gym shoes, T Shirt (black preferable) and long Black Martial Arts pants (shorts are acceptable initially).</p>" +
              "<p>Cost to be instructed in Buk Sing Choy Lay Fut Kung Fu comprises:</p>" +
              "<ul>" +
                "<li>Joining fee which includes cost of Buk Sing Choy Lay Fut training Shirt;</li>" +
                "<li>Monthly instruction fee;</li>" +
                "<li>No grading or other ongoing fees.</li>" +
              "</ul>" +
              "<p><img src='/public/img/john_bag_small.jpg' /></p>" +
              "<p>Sifu Gary Mallia welcomes you to your Free Introductory Class and looks forward to assisting with what is considered a significant life changing experience.</p>";

/**
* About the class page component used to render the page.
*
* Props:      None
* 
* State vars: None
*/
class AboutTheClass extends React.Component {
  render () {
    return (
      <div>
        <div  className="hero-image-about"></div>
        <Body heading="About the class" content={content} />
        <Footer />
      </div>
    )
  }
}

export default AboutTheClass;
