import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="contactSchool">
          <div className="titleContactSchool">
            <h2>CONTACTO</h2>
          </div>

          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 36"
            >
              <path
                id="Icon_material-location-on"
                data-name="Icon material-location-on"
                d="M19.5,3c-6.634,0-12,5.634-12,12.6,0,9.45,12,23.4,12,23.4s12-13.95,12-23.4C31.5,8.634,26.134,3,19.5,3Zm0,17.1a4.4,4.4,0,0,1-4.286-4.5A4.4,4.4,0,0,1,19.5,11.1a4.4,4.4,0,0,1,4.286,4.5A4.4,4.4,0,0,1,19.5,20.1Z"
                transform="translate(-7.5 -3)"
                fill="#16162d"
              />
            </svg>
            <p>esq, Calle Quezada Cnel. & Cap. Miguel Paiva, Salta</p>
          </div>

          <div className="phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path
                id="Icon_awesome-phone-alt"
                data-name="Icon awesome-phone-alt"
                d="M34.973,25.439,27.1,22.064a1.687,1.687,0,0,0-1.969.485L21.641,26.81A26.062,26.062,0,0,1,9.183,14.351l4.261-3.488A1.683,1.683,0,0,0,13.929,8.9L10.554,1.02A1.7,1.7,0,0,0,8.62.043L1.308,1.73A1.688,1.688,0,0,0,0,3.375,32.621,32.621,0,0,0,32.625,36a1.687,1.687,0,0,0,1.645-1.308l1.687-7.313a1.708,1.708,0,0,0-.985-1.941Z"
                transform="translate(0 0)"
                fill="#16162d"
              />
            </svg>
            <p>0387 425 1033</p>
          </div>

          <div className="mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="24"
              viewBox="0 0 36 24"
            >
              <path
                id="Icon_material-email"
                data-name="Icon material-email"
                d="M35.4,6H6.6A3.334,3.334,0,0,0,3.018,9L3,27c0,1.65,1.62,3,3.6,3H35.4c1.98,0,3.6-1.35,3.6-3V9C39,7.35,37.38,6,35.4,6Zm0,6L21,19.5,6.6,12V9L21,16.5,35.4,9Z"
                transform="translate(-3 -6)"
                fill="#16162d"
              />
            </svg>
            <p>tecnica3141@gmail.com</p>
          </div>

          <div className="facebook">
            <p>Horario de atención: 07:45 a 12:05</p>
          </div>
        </section>

        <section className="contactFafe">
          <div className="logotypeFafe">
            <svg
              id="Componente_2_1"
              data-name="Componente 2 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="128"
              viewBox="0 0 103 128"
            >
              <g id="Componente_1_1" data-name="Componente 1 – 1">
                <circle
                  id="Elipse_1"
                  data-name="Elipse 1"
                  cx="51.5"
                  cy="51.5"
                  r="51.5"
                  transform="translate(0 0)"
                  fill="#b4be2c"
                />
                <path
                  id="Icon_awesome-coffee"
                  data-name="Icon awesome-coffee"
                  d="M23.528,41.34H47.049A11.528,11.528,0,0,0,58.81,30.065h3.92c8.649,0,15.681-6.741,15.681-15.033S71.379,0,62.73,0H14.708a2.874,2.874,0,0,0-2.94,2.819V30.065A11.528,11.528,0,0,0,23.528,41.34ZM62.73,7.516a7.691,7.691,0,0,1,7.84,7.516,7.691,7.691,0,0,1-7.84,7.516H58.81V7.516Zm5.844,45.1H5.924c-5.831,0-7.473-7.516-4.41-7.516H72.972c3.063,0,1.446,7.516-4.4,7.516Z"
                  transform="matrix(0.995, 0.105, -0.105, 0.995, 18.722, 21.239)"
                  fill="#575252"
                />
              </g>
              <text
                id="FAFE"
                transform="translate(0 86)"
                fill="#fff"
                fontSize="36"
                fontFamily="Rockwell-Bold, Rockwell"
                fontWeight="700"
              >
                <tspan x="0" y="34">
                  FAFE
                </tspan>
              </text>
            </svg>
            <div className="buttonContactFafe">
              <a
                href="mailto:fafedevelop@gmail.com?subject=Me%20gustar%C3%ADa%20contactar%20con%20FAFE"
                target="blank"
              >
                <button>Contactanos</button>
              </a>
            </div>
          </div>

          <div className="socialNetworks">
            <a
              href="https://www.facebook.com/FAFE-Desarrollo-Web-Salta-105478241592908"
              target="blank"
              className="facebookFafe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.281"
                height="36"
                viewBox="0 0 19.281 36"
              >
                <path
                  id="Icon_awesome-facebook-f"
                  data-name="Icon awesome-facebook-f"
                  d="M19.627,20.25l1-6.515H14.375V9.507c0-1.782.873-3.52,3.673-3.52h2.842V.44A34.658,34.658,0,0,0,15.846,0C10.7,0,7.332,3.12,7.332,8.769v4.965H1.609V20.25H7.332V36h7.043V20.25Z"
                  transform="translate(-1.609)"
                  fill="#16162d"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/FAFEdevelop"
              target="blank"
              className="twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  id="Icon_awesome-twitter"
                  data-name="Icon awesome-twitter"
                  d="M32.3,12.353c.023.394.023.788.023,1.181,0,12.009-7.424,25.847-20.992,25.847A18.129,18.129,0,0,1,0,35.3a12.427,12.427,0,0,0,1.782.112,13.131,13.131,0,0,0,9.16-3.881c-3.244-.084-5.962-2.7-6.9-6.3a7.6,7.6,0,0,0,1.393.141,6.432,6.432,0,0,0,1.942-.309c-3.381-.844-5.916-4.5-5.916-8.916v-.112A6.417,6.417,0,0,0,4.8,17.19,9.773,9.773,0,0,1,1.508,9.624,10.654,10.654,0,0,1,2.513,5.04c3.632,5.512,9.091,9.112,15.213,9.506a12.541,12.541,0,0,1-.183-2.081c0-5.006,3.289-9.084,7.378-9.084A6.8,6.8,0,0,1,30.312,6.25a13,13,0,0,0,4.683-2.194,8.968,8.968,0,0,1-3.244,5.006A12.675,12.675,0,0,0,36,7.656a18.334,18.334,0,0,1-3.7,4.7Z"
                  transform="translate(0 -3.381)"
                  fill="#16162d"
                />
              </svg>
            </a>
            <a href="/" className="instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.518"
                height="36"
                viewBox="0 0 31.518 36"
              >
                <path
                  id="Icon_awesome-instagram"
                  data-name="Icon awesome-instagram"
                  d="M15.757,11.008c-4.472,0-8.079,4.121-8.079,9.23s3.607,9.23,8.079,9.23,8.079-4.121,8.079-9.23S20.229,11.008,15.757,11.008Zm0,15.231c-2.89,0-5.252-2.691-5.252-6s2.355-6,5.252-6,5.252,2.691,5.252,6-2.362,6-5.252,6ZM26.051,10.63a2.027,2.027,0,0,1-1.884,2.153,2.028,2.028,0,0,1-1.884-2.153,2.032,2.032,0,0,1,1.884-2.153A2.032,2.032,0,0,1,26.051,10.63ZM31.4,12.815c-.12-2.884-.7-5.438-2.545-7.543a8.772,8.772,0,0,0-6.6-2.908c-2.6-.169-10.4-.169-13,0a8.757,8.757,0,0,0-6.6,2.9C.8,7.369.232,9.923.105,12.807c-.148,2.972-.148,11.881,0,14.853C.225,30.544.8,33.1,2.651,35.2a8.783,8.783,0,0,0,6.6,2.908c2.6.169,10.4.169,13,0a8.716,8.716,0,0,0,6.6-2.908c1.842-2.1,2.419-4.659,2.545-7.543.148-2.972.148-11.873,0-14.845ZM28.041,30.849a5.752,5.752,0,0,1-3,3.422c-2.074.94-7,.723-9.288.723s-7.221.209-9.288-.723a5.751,5.751,0,0,1-3-3.422c-.823-2.37-.633-7.993-.633-10.612s-.183-8.25.633-10.612a5.752,5.752,0,0,1,3-3.422c2.074-.94,7-.723,9.288-.723s7.221-.209,9.288.723a5.751,5.751,0,0,1,3,3.422c.823,2.37.633,7.993.633,10.612S28.863,28.488,28.041,30.849Z"
                  transform="translate(0.005 -2.238)"
                  fill="#16162d"
                />
              </svg>
            </a>
            <a href="/" className="github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34.875"
                height="36"
                viewBox="0 0 34.875 36"
              >
                <path
                  id="Icon_awesome-github"
                  data-name="Icon awesome-github"
                  d="M11.665,29.55c0,.149-.162.268-.366.268-.232.022-.394-.1-.394-.268,0-.149.162-.268.366-.268C11.482,29.259,11.665,29.378,11.665,29.55Zm-2.187-.335c-.049.149.091.32.3.365a.322.322,0,0,0,.436-.149c.042-.149-.091-.32-.3-.387A.353.353,0,0,0,9.478,29.215Zm3.108-.127c-.2.052-.345.194-.323.365.021.149.2.246.415.194s.345-.194.323-.342S12.79,29.066,12.586,29.088ZM17.212.563C7.46.563,0,8.4,0,18.726c0,8.255,4.908,15.32,11.918,17.806a.907.907,0,0,0,1.216-.9c0-.462-.021-3.007-.021-4.571,0,0-4.922,1.117-5.955-2.218,0,0-.8-2.166-1.955-2.725,0,0-1.61-1.169.113-1.146A3.681,3.681,0,0,1,8.03,26.892a3.6,3.6,0,0,0,5.126,1.556,4.234,4.234,0,0,1,1.125-2.509c-3.93-.462-7.9-1.064-7.9-8.226a5.815,5.815,0,0,1,1.659-4.385,7.418,7.418,0,0,1,.183-5.055c1.47-.484,4.852,2.01,4.852,2.01a15.724,15.724,0,0,1,8.831,0s3.382-2.5,4.852-2.01a7.415,7.415,0,0,1,.183,5.055,5.944,5.944,0,0,1,1.814,4.385c0,7.184-4.141,7.757-8.072,8.226a4.543,4.543,0,0,1,1.2,3.454c0,2.509-.021,5.613-.021,6.223a.91.91,0,0,0,1.216.9c7.031-2.471,11.8-9.536,11.8-17.791C34.875,8.4,26.965.563,17.212.563ZM6.834,26.237c-.091.074-.07.246.049.387.113.119.274.171.366.074.091-.074.07-.246-.049-.387C7.087,26.192,6.926,26.14,6.834,26.237Zm-.759-.6c-.049.1.021.216.162.29a.2.2,0,0,0,.3-.052c.049-.1-.021-.216-.162-.29C6.237,25.537,6.124,25.56,6.075,25.634Zm2.278,2.65c-.113.1-.07.32.091.462.162.171.366.194.457.074.091-.1.049-.32-.091-.462C8.655,28.187,8.445,28.165,8.353,28.284Zm-.8-1.094c-.113.074-.113.268,0,.439s.3.246.394.171a.354.354,0,0,0,0-.462C7.847,27.168,7.664,27.093,7.552,27.19Z"
                  transform="translate(0 -0.563)"
                  fill="#16162d"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="copyright">
          <p>
            Todos los derechos reservados FAFE<sup>®</sup> 2021
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
