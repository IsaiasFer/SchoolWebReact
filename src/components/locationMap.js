import React from 'react';

class testing1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="mapToSchool">
          <div className="mapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.349665488747!2d-65.40904648535397!3d-24.714873111081033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc11f1adeb30b%3A0xa490e1e89fc38f89!2sEscuela%20de%20Educacion%20Tecnica%20N%C2%B0%203141!5e0!3m2!1ses-419!2sar!4v1613515476112!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="map"
            ></iframe>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default testing1;
