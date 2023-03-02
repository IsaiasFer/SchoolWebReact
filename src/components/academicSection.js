import React, { Component, createRef } from "react";
import Titulo from "../files/BOLETIN OFICIAL SALTA - DECRETO N° 561_11.pdf";
import PlandeEstudio from "../files/curriculatecnica.pdf";
import Asignatura from "./asignatura";

export default class academicSection extends Component {
  constructor(props) {
    super(props);
    // --------SECTIONS----------
    this.academic = createRef();
    this.column1Container = createRef();
    this.column2Container = createRef();
    // --------SECTIONS----------
    // --------BUTTONS-OPEN----------
    this.backButtonDivices425px = createRef();
    this.openTitle = createRef();
    this.openStudyPlan = createRef();
    this.openStudyProgram = createRef();
    this.openTeachersInfo = createRef();
    // --------BUTTONS-OPEN----------
    // --------BUTTONS-CONTENTS----------
    this.titleContent = createRef();
    this.studyPlanContent = createRef();
    this.studyProgramContent = createRef();
    this.infoTeachersContent = createRef();
    // --------BUTTONS-CONTENTS----------
    // --------BUTTONS-CONTENT-STUDY-PROGRAM----------
    this.firstYearContentCB = createRef();
    this.secondYearContentCB = createRef();
    this.firstYearContentCS = createRef();
    this.secondYearContentCS = createRef();
    this.thirdYearContentCS = createRef();
    this.fourthYearContentCS = createRef();
    // --------BUTTONS-CONTENT-STUDY-PROGRAM----------
    // --------BUTTONS-CONTENT-INFO-TEACHERS----------
    this.infoTeachersContent1 = createRef();
    this.infoTeachersContent2 = createRef();
    // --------BUTTONS-CONTENT-INFO-TEACHERS----------
  }
  render() {
    this.handleClickContents = (e, numberContent) => {
      const titleContent = this.titleContent;
      const studyPlanContent = this.studyPlanContent;
      const studyProgramContent = this.studyProgramContent;
      const infoTeachersContent = this.infoTeachersContent;
      let contents = [
        titleContent,
        studyPlanContent,
        studyProgramContent,
        infoTeachersContent,
      ];

      for (let i = 0; i < contents.length; i++) {
        contents[i].current.style.display = "none";
      }
      contents[numberContent].current.style.display = "inline-block";
    };
    this.handleClickTeachers = (e, numberLinks) => {
      const infoTeachersContent1 = this.infoTeachersContent1;
      const infoTeachersContent2 = this.infoTeachersContent2;

      let infoTeachersContents = [infoTeachersContent1, infoTeachersContent2];

      for (let i = 0; i < infoTeachersContents.length; i++) {
        infoTeachersContents[i].current.style.display = "none";
      }
      infoTeachersContents[numberLinks].current.style.display = "inline-block";
    };
    this.handleClickStudy = (e, numberLinks) => {
      const firstYearContentCB = this.firstYearContentCB;
      const secondYearContentCB = this.secondYearContentCB;
      const firstYearContentCS = this.firstYearContentCS;
      const secondYearContentCS = this.secondYearContentCS;
      const thirdYearContentCS = this.thirdYearContentCS;
      const fourthYearContentCS = this.fourthYearContentCS;

      let programContent = [
        firstYearContentCB,
        secondYearContentCB,
        firstYearContentCS,
        secondYearContentCS,
        thirdYearContentCS,
        fourthYearContentCS,
      ];

      for (let i = 0; i < programContent.length; i++) {
        programContent[i].current.style.display = "none";
      }
      programContent[numberLinks].current.style.display = "inline-block";
    };

    if (window.screen.width < 426) {
      const openTitle = this.openTitle;
      const openStudyPlan = this.openStudyPlan;
      const openStudyProgram = this.openStudyProgram;
      const openTeachersInfo = this.openTeachersInfo;
      const backButton425px = this.backButtonDivices425px;
      const column2Container = this.column2Container;

      const studyProgramContent = this.studyProgramContent;
      const infoTeachersContent = this.infoTeachersContent;

      let academicContent425px = [
        openTitle,
        openStudyPlan,
        openStudyProgram,
        openTeachersInfo,
      ];
      this.handleClickContents = (e, numberButton) => {
        const studyProgramContent = this.studyProgramContent;
        const infoTeachersContent = this.infoTeachersContent;

        if (numberButton === 0) {
          openTitle.current.href = Titulo;
          openTitle.current.target = "blank";
          openTitle.current.style.textDecoration = "none";
        }

        if (numberButton === 1) {
          openStudyPlan.current.href = PlandeEstudio;
          openStudyPlan.current.target = "blank";
          openStudyPlan.current.style.textDecoration = "none";
        }

        if (numberButton === 2) {
          for (let i = 0; i < academicContent425px.length; i++) {
            academicContent425px[i].current.style.display = "none";
          }
          column2Container.current.className = "column1Container";
          studyProgramContent.current.style.display = "grid";
          backButton425px.current.style.display = "inline-block";
        }
        if (numberButton === 3) {
          for (let i = 0; i < academicContent425px.length; i++) {
            academicContent425px[i].current.style.display = "none";
          }
          column2Container.current.className = "column1Container";
          infoTeachersContent.current.style.display = "grid";
          backButton425px.current.style.display = "inline-block";
        }
      };
      this.comeBack425px = () => {
        for (let i = 0; i < academicContent425px.length; i++) {
          academicContent425px[i].current.style.display = "flex";
        }
        studyProgramContent.current.style.display = "none";
        infoTeachersContent.current.style.display = "none";
        column2Container.current.className = "column2Container";
        backButton425px.current.style.display = "none";
      };
    }

    return (
      <React.Fragment>
        <section className="academic" id="academic">
          <button
            className="backButtonDivices425px"
            id="backButtonDivices425px"
            ref={this.backButtonDivices425px}
            onClick={this.comeBack425px}
          >
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

          <div
            className="column1Container"
            id="column1Container"
            ref={this.column1Container}
          >
            <div className="buttonsContainer">
              <button
                id="openTitle "
                onClick={(e) => this.handleClickContents(e, 0)}
                className="titleAcademic btna"
                ref={this.openTitle}
              >
                Titulo
              </button>

              <button
                id="openStudyPlan"
                onClick={(e) => this.handleClickContents(e, 1)}
                className="studyPlan btna"
                ref={this.openStudyPlan}
              >
                Plan de estudio
              </button>

              <button
                id="openStudyProgram"
                onClick={(e) => this.handleClickContents(e, 2)}
                className="studyProgram"
                ref={this.openStudyProgram}
              >
                {" "}
                Programa de estudio
              </button>

              <button
                id="openTeachersInfo"
                onClick={(e) => this.handleClickContents(e, 3)}
                className="infoTeachers"
                ref={this.openTeachersInfo}
              >
                Info profesores
              </button>
            </div>
          </div>

          <div
            className="column2Container"
            id="column2Container"
            ref={this.column2Container}
          >
            <iframe
              className="titleContent"
              id="titleContent"
              ref={this.titleContent}
              src={Titulo}
              title="PDF"
            ></iframe>

            <iframe
              className="studyPlanContent"
              id="studyPlanContent"
              ref={this.studyPlanContent}
              src={PlandeEstudio}
              title="PDF"
            ></iframe>

            <div
              className="studyProgramContent"
              id="studyProgramContent"
              ref={this.studyProgramContent}
            >
              <div className="optionsStudyProgramContent">
                <button
                  type="button"
                  className="firstYearCB"
                  id="openFirstYearContentCB"
                  onClick={(e) => this.handleClickStudy(e, 0)}
                >
                  1ºCB
                </button>

                <button
                  type="button"
                  className="secondYearCB"
                  id="openSecondYearContentCB"
                  onClick={(e) => this.handleClickStudy(e, 1)}
                >
                  2ºCB
                </button>

                <button
                  type="button"
                  className="primerAñoCS"
                  id="openFirstYearContentCS"
                  onClick={(e) => this.handleClickStudy(e, 2)}
                >
                  1ºCS
                </button>

                <button
                  type="button"
                  className="secondYearCS"
                  id="openSecondYearContentCS"
                  onClick={(e) => this.handleClickStudy(e, 3)}
                >
                  2ºCS
                </button>

                <button
                  type="button"
                  className="thirdYearCS"
                  id="openThirdYearContentCS"
                  onClick={(e) => this.handleClickStudy(e, 4)}
                >
                  3ºCS
                </button>

                <button
                  type="button"
                  className="fourthYearoCS"
                  id="openFourthYearContentCS"
                  onClick={(e) => this.handleClickStudy(e, 5)}
                >
                  4ºCS
                </button>
              </div>

              <div
                className="firstYearContentCB"
                id="firstYearContentCB"
                ref={this.firstYearContentCB}
              >
                <h1>Primer Año Ciclo Basico </h1>

                <Asignatura
                  nombre="Matematica I"
                  programa="../documentos/programas/MATEMATICAI2020.pdf"
                />
                <Asignatura
                  nombre="Dibujo Técnico I"
                  programa="../documentos/programas/DIBUJOTECNICOI2020.pdf"
                />
                <Asignatura
                  nombre="Ciencias Biologicas I"
                  programa="../documentos/programas/CIENCIASBIOLOGICASI2020.pdf"
                />
                <Asignatura
                  nombre="Educación Física I"
                  programa="../documentos/programas/EDUCACIONFISICAI2020.pdf"
                />
                <Asignatura
                  nombre="Fisicoquímica"
                  programa="../documentos/programas/FISICOQUIMICA2020.pdf"
                />
                <Asignatura
                  nombre="Geografía I"
                  programa="../documentos/programas/GEOGRAFIAI2020.pdf"
                />
                <Asignatura
                  nombre="Lengua Extranjera I (Ingles)"
                  programa="../documentos/programas/LENGUAEXTRANJERAI-INGLES2020.pdf"
                />
                <Asignatura
                  nombre="Lengua I"
                  programa="../documentos/programas/LENGUAI2020.pdf"
                />
                <Asignatura
                  nombre="Tecnología I"
                  programa="../documentos/programas/TECNOLOGIAI2020.pdf"
                />
                <Asignatura
                  nombre="Educación Artística I"
                  programa="../documentos/programas/ARTISTICAI2020.docx"
                />
                <Asignatura
                  nombre="Formación Ética y Ciudadana I"
                  programa="../documentos/programas/feyc1cb2021.pdf"
                />
                <Asignatura
                  nombre="Taller Preprofesional I: Ajuste y Hojalatería "
                  programa="../documentos/programas/TPI-AJUSTEYHOJALATERIA2020.pdf"
                />
                <Asignatura
                  nombre="Taller Preprofesional I: Carpintería"
                  programa="../documentos/programas/TPI-CARPINTERIA2020.pdf"
                />
                <Asignatura
                  nombre="Taller Preprofesional I: Electricidad"
                  programa="../documentos/programas/TPI-ELECTRICIDAD2020.pdf"
                />
                <Asignatura
                  nombre="Historia I"
                  programa="../documentos/programas/historiaI2021.pdf"
                />
              </div>

              <div
                className="secondYearContentCB"
                id="secondYearContentCB"
                ref={this.secondYearContentCB}
              >
                <h1>Segundo Año Ciclo Basico </h1>

                <Asignatura nombre="Ciencias Biológicas" programa="../documentos/programas/CIENCIASBIOLOGICASII2020.pdf" />
                <Asignatura nombre="Educación Física" programa="../documentos/programas/EDUCACIONFISICAII2020.pdf" />
                <Asignatura nombre="Física I" programa="../documentos/programas/FISICAI2020.pdf" />
                <Asignatura nombre="Lengua Extranjera II (Inglés)" programa="../documentos/programas/LENGUAEXTRANJERAII-INGLES2020.pdf" />
                <Asignatura nombre="Lengua II" programa="../documentos/programas/LENGUAII2020.pdf" />
                <Asignatura nombre="Dibujo Técnico II" programa="../documentos/programas/DIBUJOTECNICOII2020.pdf" />
                <Asignatura nombre="Química" programa="../documentos/programas/QUIMICA2020.pdf" />
                <Asignatura nombre="Taller Preprofesional II: Métodos y Técnicas de Laboratorio" programa="../documentos/programas/MyTL2021.docx" />
                <Asignatura nombre="Educación Artística II" programa="../documentos/programas/ARTISTICAII2020.docx" />
                <Asignatura nombre="Formación Ética y Ciudadana II" programa="../documentos/programas/feyc2cb2021.pdf" />
                <Asignatura nombre="Tecnología de la Comunicación y de la Información" programa="../documentos/programas/TIC2021.docx" />
                <Asignatura nombre="Geografía II" programa="../documentos/programas/geografiaII2021.pdf" />
                <Asignatura nombre="Taller Preprofesional II: Herrería" programa="../documentos/programas/TPII-HERRERIA2020.docx" />
                <Asignatura nombre="Historia II" programa="../documentos/programas/historiaII2021.pdf" />
                <Asignatura nombre="Taller Preprofesional: Electricidad y Electrónica" programa="../documentos/programas/TPIIEE2021.pdf" />
                <Asignatura nombre="Matemática" programa="" />
              </div>

              <div
                className="firstYearContentCS"
                id="firstYearContentCS"
                ref={this.firstYearContentCS}
              >
                <h1>Primer Año Ciclo Superior </h1>

                <Asignatura nombre="Biología Celular" programa="../documentos/programas/BIOLOGIACELULAR2020.pdf" />
                <Asignatura nombre="Educación Física III" programa="../documentos/programas/EDUCACIONFISICAIII2020.pdf" />
                <Asignatura nombre="Física II" programa="../documentos/programas/FISICAII2020.pdf" />
                <Asignatura nombre="Formación Ética y Ciudadana III" programa="../documentos/programas/FORMACIONETICAYCIUDADANAIII.pdf" />
                <Asignatura nombre="Lengua Extranjera III (Inglés)" programa="../documentos/programas/LENGUAEXTRANJERAIII-INGLES2020.pdf" />
                <Asignatura nombre="Lengua III" programa="../documentos/programas/LENGUAIII2020.pdf" />
                <Asignatura nombre="Química General I" programa="../documentos/programas/QUIMICAGENERALI2020.pdf" />
                <Asignatura nombre="Representación Gráfica e Interpretaciónn de Planos Industriales" programa="../documentos/programas/REPRESENTACIONGRAFICAEINTERPRETACIONDEPLANOSINDUSTRIALES2020.pdf" />
                <Asignatura nombre="Matemática III" programa="../documentos/programas/MATEMATICAIII2020.docx" />
                <Asignatura nombre="Taller Preprofesional III: Técnicas y Ensayos de Laboratorio y Física Experimental" programa="../documentos/programas/tyedlfe1cs2021.pdf" />
                <Asignatura nombre="Historia III" programa="../documentos/programas/historiaIII2021.pdf" />
                <Asignatura nombre="Tecnología de los Materiales I" programa="../documentos/programas/TDLMI2019.pdf" />
                <Asignatura nombre="Geografía III" programa="../documentos/programas/GEOGRAFIAIII2019.pdf" />
                <Asignatura nombre="Métodos y Técnicas de laboratorio" programa="../documentos/programas/MYTDL2019.pdf" />
              </div>

              <div
                className="secondYearContentCS"
                id="secondYearContentCS"
                ref={this.secondYearContentCS}
              >
                <h1>Segundo Año Ciclo Superior </h1>
                <Asignatura nombre="Educación Física IV" programa="../documentos/programas/EDUCACIONFISICAIV2020.pdf" />
                <Asignatura nombre="Filosofía" programa="../documentos/programas/FILOSOFIA2020.pdf" />
                <Asignatura nombre="Física III" programa="../documentos/programas/FISICAIII2020.pdf" />
                <Asignatura nombre="Lengua Extranjera III (Inglés Técnico I)" programa="../documentos/programas/LENGUAEXTRANJERAIII-INGLES2020.pdf" />
                <Asignatura nombre="Lengua y Literatura I" programa="../documentos/programas/LENGUAYLITERATURAI2020.pdf" />
                <Asignatura nombre="Microbiología" programa="../documentos/programas/MICROBIOLOGIA2020.pdf" />
                <Asignatura nombre="Química General II" programa="../documentos/programas/QUIMICAGENERALII2020.pdf" />
                <Asignatura nombre="Química Inorgánica" programa="../documentos/programas/QUIMICAINORGANICA2020.pdf" />
                <Asignatura nombre="Tecnología de los Materiales II" programa="../documentos/programas/TECNOLOGIADELOSMATERIALESII2020.pdf" />
                <Asignatura nombre="Teoría del Diseño y Sistemas" programa="../documentos/programas/TEORIADELDISENOYSISTEMAS2020.pdf" />
                <Asignatura nombre="Termodinámica" programa="../documentos/programas/TERMODINAMICA2020.pdf" />
                <Asignatura nombre="Análisis Matemático" programa="../documentos/programas/ANALISIS%20MATEMATICO2CS.pdf" />
              </div>

              <div
                className="thirdYearContentCS"
                id="thirdYearContentCS"
                ref={this.thirdYearContentCS}
              >
                <h1> Tercero Año Ciclo Superior </h1>
                <Asignatura nombre="Bromatología" programa="../documentos/programas/BROMATOLOGIA2020.pdf" />
                <Asignatura nombre="Educación Física V" programa="../documentos/programas/EDUCACIONFISICAV2020.pdf" />
                <Asignatura nombre="Fundamentos de los Procesos Químicos" programa="../documentos/programas/FUNDAMENTOSDELOSPROCESOSQUIMICOS2020.pdf" />
                <Asignatura nombre="Lengua Extranjera IV (Inglés Técnico II)" programa="../documentos/programas/LENGUAEXTRANJERAIV-INGLESTECNICOI2020.pdf" />
                <Asignatura nombre="Lengua y Literatura II" programa="../documentos/programas/LENGUAYLITERATURAII2020.pdf" />
                <Asignatura nombre="Probabilidad y Estadistica" programa="../documentos/programas/PROBAILIDADYESTADISTICA2020.pdf" />
                <Asignatura nombre="Química Analítica I" programa="../documentos/programas/QUIMICAANALITICAI2020.pdf" />
                <Asignatura nombre="Química Orgánica I" programa="../documentos/programas/QUIMICAORGANICAI2020.pdf" />
                <Asignatura nombre="Operaciones Unitarias" programa="../documentos/programas/OperacionesUnitarias2021.pdf" />
                <Asignatura nombre="Ética y Deontología" programa="../documentos/programas/eydp3cs2021.pdf" />
                <Asignatura nombre="Química Industrial II" programa="../documentos/programas/QuimicaIndustrial2021.docx" />
                <Asignatura nombre="Prácticas Profesionalizantes I" programa="" />
              </div>

              <div
                className="fourthYearContentCS"
                id="fourthYearContentCS"
                ref={this.fourthYearContentCS}
              >
                <h1>Cuarto Año Ciclo Superior </h1>
                <Asignatura nombre="Higiene y seguridad Industrial" programa="../documentos/programas/HIGIENEYSEGURIDADINDUSTRIAL2020.pdf" />
                <Asignatura nombre="Química Ambiental" programa="../documentos/programas/QUIMICAAMBIENTAL2020.pdf" />
                <Asignatura nombre="Química Analítica II" programa="../documentos/programas/QUIMICAANALITICAII2020.pdf" />
                <Asignatura nombre="Química Orgánica II" programa="../documentos/programas/QUIMICAORGANICAII2020.pdf" />
                <Asignatura nombre="Química Industrial II" programa="../documentos/programas/QcaIndII2021.docx" />
                <Asignatura nombre="Procesos Productivos" programa="../documentos/programas/PROCESOS%20PRODUCTVOS%204CS.pdf" />
                <Asignatura nombre="Marco Jurídico de los procesos productivos" programa="" />
                <Asignatura nombre="Organización y Gestión de la producción" programa="" />
                <Asignatura nombre="Prácticas Profesionalizantes II" programa="" />
              </div>
            </div>

            <div
              className="infoTeachersContent"
              id="infoTeachersContent"
              ref={this.infoTeachersContent}
            >
              <div className="optionInfoTeachersContent">
                <button
                  type="button"
                  className="infoTeachers1"
                  id="opentInfoTeachersContent1"
                  onClick={(e) => this.handleClickTeachers(e, 0)}
                >
                  1
                </button>

                <button
                  type="button"
                  className="infoTeachers2"
                  id="opentInfoTeachersContent2"
                  onClick={(e) => this.handleClickTeachers(e, 1)}
                >
                  2
                </button>
              </div>

              <div
                className="infoTeachersContent1"
                id="infoTeachersContent1"
                ref={this.infoTeachersContent1}
              >
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

              <div
                className="infoTeachersContent2"
                id="infoTeachersContent2"
                ref={this.infoTeachersContent2}
              >
                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Cartilla%20para%20Ingresantes%202019.pdf">
                    Cartilla para Ingresantes 2019
                  </a>
                </p>
                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Graficos%20Alumnos%20Aprobados%202019.pptx">
                    Graficos Alumnos Aprobados 1° Trimestre 2019.pptx
                  </a>
                </p>
                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Manual-Info-Basica.pdf">
                    Manual Curso Informatica
                  </a>
                </p>
                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Cartilla_Ingresantes2019.doc" download>
                    Cartilla Ingresantes 2019 (.doc se lee con Word)
                  </a>
                </p>

                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Prevencion%20y%20Erradicacion%20de%20la%20Violencia%20de%20Genero.pdf">
                    Prevencion y Erradicacion de la Violencia de Genero.pdf
                  </a>
                </p>
                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/PLAN%20DE%20MEJORA%20PEDAGOGICO%20TECNICO%20QUIMICO%2007-08-17.pdf">
                    PLAN DE MEJORA PEDAGOGICO 07-08-17.pdf
                  </a>
                </p>
                <p>
                  Descargar:{" "}
                  <a href="http://eet3141.ddns.net/Web3141/Prensa/Profesores/Guia_para_Ingresantes_%202018.pdf">
                    Guia para Ingresantes 2018
                  </a>
                </p>
                <p>
                  Descargar:{" "}
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
