import React from 'react';
import LocationMap from '../components/locationMap';

import '../styles/location.css';

class Locacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LocationMap />
      </React.Fragment>
    );
  }
}

// export default function Location() {
//   return (
//     <React.Fragment>
//       <LocationMap />
//     </React.Fragment>
//   );
// }
export default Locacion;
