import React, { Component } from 'react';

export default class academicSection extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="academic" id="academic">
          <button class="backButtonDivices425px" id="backButtonDivices425px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.504"
              height="30.705"
              viewBox="0 0 31.504 30.705"
            >
              <path
                id="Icon_awesome-arrow-left"
                data-name="Icon awesome-arrow-left"
                d="M18.105,31.3l-1.561,1.561a1.681,1.681,0,0,1-2.384,0L.492,19.2a1.681,1.681,0,0,1,0-2.384L14.161,3.143a1.681,1.681,0,0,1,2.384,0L18.105,4.7a1.689,1.689,0,0,1-.028,2.412L9.6,15.188H29.813A1.683,1.683,0,0,1,31.5,16.875v2.25a1.683,1.683,0,0,1-1.687,1.688H9.6l8.473,8.072A1.677,1.677,0,0,1,18.105,31.3Z"
                transform="translate(0.004 -2.647)"
                fill="#fff"
              />
            </svg>
          </button>
          <div class="column1Container" id="column1Container">
            <div class="buttonsContainer">
              <a
                id="openTitle"
                onclick="showContentButtons(0)"
                class="titleAcademic"
              >
                Titulo
              </a>

              <a
                id="openStudyPlan"
                onclick="showContentButtons(1)"
                class="studyPlan"
              >
                Plan de estudio
              </a>

              <a
                id="openStudyProgram"
                onclick="showContentButtons(2)"
                class="studyProgram"
              >
                {' '}
                Programa de estudio
              </a>

              <a
                id="openTeachersInfo"
                onclick="showContentButtons(3)"
                class="infoTeachers"
              >
                Info profesores
              </a>
            </div>
          </div>

          <div class="column2Container" id="column2Container">
            <iframe
              class="titleContent"
              id="titleContent"
              src="../assets/images/academic/BOLETIN OFICIAL SALTA - DECRETO N° 561_11.pdf"
            ></iframe>

            <iframe
              class="studyPlanContent"
              id="studyPlanContent"
              src="../assets/images/academic/curriculatecnica.pdf"
            ></iframe>

            <div class="studyProgramContent" id="studyProgramContent">
              <div class="optionsStudyProgramContent">
                <button
                  type="button"
                  class="firstYearCB"
                  id="openFirstYearContentCB"
                  onclick="showContentStudyProgram(0)"
                >
                  1ºCB
                </button>

                <button
                  type="button"
                  class="secondYearCB"
                  id="openSecondYearContentCB"
                  onclick="showContentStudyProgram(1)"
                >
                  2ºCB
                </button>

                <button
                  type="button"
                  class="primerAñoCS"
                  id="openFirstYearContentCS"
                  onclick="showContentStudyProgram(2)"
                >
                  1ºCS
                </button>

                <button
                  type="button"
                  class="secondYearCS"
                  id="openSecondYearContentCS"
                  onclick="showContentStudyProgram(3)"
                >
                  2ºCS
                </button>

                <button
                  type="button"
                  class="thirdYearCS"
                  id="openThirdYearContentCS"
                  onclick="showContentStudyProgram(4)"
                >
                  3ºCS
                </button>

                <button
                  type="button"
                  class="fourthYearoCS"
                  id="openFourthYearContentCS"
                  onclick="showContentStudyProgram(5)"
                >
                  4ºCS
                </button>
              </div>

              <div class="firstYearContentCB" id="firstYearContentCB">
                <h1>Primer Año Ciclo Basico </h1>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/1CB/Dibujo%20Tecnico%20I.pdf"
                    target="blank"
                  >
                    Dibujo Tecnico I.pdf
                  </a>
                </p>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/1CB/Matematicas%20I.pdf"
                    target="blank"
                  >
                    Matematica I.pdf
                  </a>
                </p>
              </div>

              <div class="secondYearContentCB" id="secondYearContentCB">
                <h1>Segundo Año Ciclo Basico </h1>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/2CB/Matematicas%20II.pdf"
                    target="blank"
                  >
                    Matematica II.pdf
                  </a>
                </p>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/2CB/Tecnologia%20de%20la%20Informacion%20y%20la%20Comunicacion.pdf"
                    target="blank"
                  >
                    Tecnologia de la Informacion y la Comunicacion.pdf
                  </a>
                </p>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/2CB/Sistemas%20de%20Control%20y%20Automatizacion.pdf"
                    target="blank"
                  >
                    Sistemas de Control y Automatizacion.pdf
                  </a>
                </p>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/2CB/Dibujo%20T%C3%A9cnico%20II.pdf"
                    target="blank"
                  >
                    Dibujo Tecnico II.pdf
                  </a>
                </p>
              </div>

              <div class="firstYearContentCS" id="firstYearContentCS">
                <h1>Primer Año Ciclo Superior </h1>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/1CS/Matematicas%20III.pdf"
                    target="blank"
                  >
                    Matematica III.pdf
                  </a>
                </p>
              </div>

              <div class="secondYearContentCS" id="secondYearContentCS">
                <h1>Segundo Año Ciclo Superior </h1>

                <p>
                  Descargar:{' '}
                  <a
                    href="http://eet3141.ddns.net/Web3141/Archivos/2CS/Analisis%20Matematico.pdf"
                    target="blank"
                  >
                    Analisis Matematico.pdf
                  </a>
                </p>
              </div>

              <div class="thirdYearContentCS" id="thirdYearContentCS">
                <h1> Tercero Año Ciclo Superior </h1>
              </div>

              <div class="fourthYearContentCS" id="fourthYearContentCS">
                <h1>Cuarto Año Ciclo Superior </h1>
              </div>
            </div>

            <div class="infoTeachersContent" id="infoTeachersContent">
              <div class="optionInfoTeachersContent">
                <button
                  type="button"
                  class="infoTeachers1"
                  id="opentInfoTeachersContent1"
                  onclick="showContentInfoTeachers(0)"
                >
                  1
                </button>

                <button
                  type="button"
                  class="infoTeachers2"
                  id="opentInfoTeachersContent2"
                  onclick="showContentInfoTeachers(1)"
                >
                  2
                </button>
              </div>

              <div class="infoTeachersContent1" id="infoTeachersContent1">
                <h1>Jornada 28-02-2020 Descargas: </h1>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;»&nbsp;&nbsp;
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornadas/2020/28022020/PRESENTACION%20JORNADA--ULTIMO.pptx">
                    (.pptx) Presentación Jornada por Vicedirectores (Normativas,
                    Calendario)
                  </a>
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;»&nbsp;&nbsp;
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornadas/2020/28022020/IPA-3141.pdf">
                    (.pdf) IPA-3141
                  </a>
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;»&nbsp;&nbsp;
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornadas/2020/28022020/Jornada%20Institucional%2028-02.docx">
                    (.docx) Jornada Institucional 28-02
                  </a>
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;»&nbsp;&nbsp;
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornadas/2020/28022020/MOA-3141.pdf">
                    (.pdf) MOA-3141
                  </a>
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;»&nbsp;&nbsp;
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornadas/2020/28022020/Modelo%20de%20Planificacion.docx">
                    (.docx) Modelo de Planificación
                  </a>
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;»&nbsp;&nbsp;
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornadas/2020/28022020/Modelo%20de%20Programa%20EET%203141.docx">
                    (.docx) Modelo de Programa EET 3141
                  </a>
                </p>
              </div>

              <div class="infoTeachersContent2" id="infoTeachersContent2">
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Cartilla%20para%20Ingresantes%202019.pdf">
                    Cartilla para Ingresantes 2019
                  </a>
                </p>
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Graficos%20Alumnos%20Aprobados%202019.pptx">
                    Graficos Alumnos Aprobados 1° Trimestre 2019.pptx
                  </a>
                </p>
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Manual-Info-Basica.pdf">
                    Manual Curso Informatica
                  </a>
                </p>
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Cartilla_Ingresantes2019.doc">
                    Cartilla Ingresantes 2019 (.doc se lee con Word)
                  </a>
                </p>

                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Prevencion%20y%20Erradicacion%20de%20la%20Violencia%20de%20Genero.pdf">
                    Prevencion y Erradicacion de la Violencia de Genero.pdf
                  </a>
                </p>
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/PLAN%20DE%20MEJORA%20PEDAGOGICO%20TECNICO%20QUIMICO%2007-08-17.pdf">
                    PLAN DE MEJORA PEDAGOGICO 07-08-17.pdf
                  </a>
                </p>
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Guia_para_Ingresantes_%202018.pdf">
                    Guia para Ingresantes 2018
                  </a>
                </p>
                <p>
                  Descargar:{' '}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Jornada%20020318%20al%20050318.rar">
                    Material Jornada 02-03-2018 actualizado al 05-03-2018
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
