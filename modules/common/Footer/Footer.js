import React from 'react'

//const date object used
const dt = new Date();

/**
* Footer class used by all page components.
* It has a copyright symbol along with the year
*
* Props:      None
*
* State vars: None
*/
class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>&copy; {dt.getFullYear()} Bussiness Name</p>
      </div>
    )
  }
}

export default Footer;
