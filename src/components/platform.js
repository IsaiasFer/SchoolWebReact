import React from "react";
import Curso from "./curso";
import Division from "./division";

class Plataforma extends React.Component {
  componentDidMount(props) {
    var cerrar = this.props.onClose;
    function divisiones(props) {
      //VARIABLES
      const MENU = document.querySelector(".menu");
      // -----------SECTIONS-------------
      let cursos = document.getElementById("curses");
      let divisions = document.getElementById("divisions");
      let asignsContainer = document.getElementById("asignsContainer");

      // -----------SECTIONS-------------
      let VOLVER = document.querySelector(".volverButton");
      //VARIABLES
      // ----------------GO-BACK-BUTTON--------------

      VOLVER.addEventListener("click", function goBack() {
        if (VOLVER.className === "volverButton") {
          MENU.classList.remove("isActive");
          VOLVER.onClick = cerrar();
        }
        if (VOLVER.className === "volverButton inDivisions") {
          divisions.style.display = "none";
          cursos.style.display = "flex";
          VOLVER.classList.remove("inDivisions");
        }
        if (VOLVER.className === "volverButton inDivisions inAsign") {
          asignsContainer.style.display = "none";
          divisions.style.display = "flex";
          VOLVER.classList.remove("inAsign");
        }
      });
      // ----------------GO-BACK-BUTTON--------------
    }
    divisiones();
  }
  render(props) {
    return (
      <section className="menuPlatform">
        <button className="volverButton" /* onClick={this.props.onClose} */>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="27"
            viewBox="0 0 31.5 27"
          >
            <path
              id="Icon_ionic-md-school"
              data-name="Icon ionic-md-school"
              d="M7.98,19.772v6L18,31.5l10.02-5.73v-6L18,25.5ZM18,4.5l-15.75,9L18,22.5l12.888-7.362V25.5H33.75v-12Z"
              transform="translate(-2.25 -4.5)"
              fill="#fff"
            />
          </svg>
          <span href="/">Volver</span>
        </button>
        <div className="curses" id="curses">
          <h1>Elige tu curso</h1>
          <div className="cursesgrill">
            <Curso id={1} año={1} ciclo="b" />
            <Curso id={2} año={2} ciclo="b" />
            <Curso id={3} año={1} ciclo="s" />
            <Curso id={4} año={2} ciclo="s" />
            <Curso id={5} año={3} ciclo="s" />
            <Curso id={6} año={4} ciclo="s" />
          </div>
        </div>
        <section className="divisions" id="divisions">
          <div id="division1">
            <Division id={1} año={1} division={1} ciclo="b" />
            <Division id={2} año={1} division={2} ciclo="b" />
            <Division id={3} año={1} division={3} ciclo="b" />
            <Division id={4} año={1} division={4} ciclo="b" />
            <Division id={5} año={1} division={5} ciclo="b" />
          </div>
          <div id="division2">
            <Division id={6} año={2} division={1} ciclo="b" />
            <Division id={7} año={2} division={2} ciclo="b" />
            <Division id={8} año={2} division={3} ciclo="b" />
            <Division id={9} año={2} division={4} ciclo="b" />
          </div>
          <div id="division3">
            <Division id={10} año={1} division={1} ciclo="s" />
            <Division id={11} año={1} division={2} ciclo="s" />
            <Division id={12} año={1} division={3} ciclo="s" />
            <Division id={13} año={1} division={4} ciclo="s" />
          </div>
          <div id="division4">
            <Division id={14} año={2} division={1} ciclo="s" />
            <Division id={15} año={2} division={2} ciclo="s" />
            <Division id={16} año={2} division={3} ciclo="s" />
            <Division id={17} año={2} division={4} ciclo="s" />
          </div>
          <div id="division5">
            <Division id={18} año={3} division={1} ciclo="s" />
            <Division id={19} año={3} division={2} ciclo="s" />
            <Division id={20} año={3} division={3} ciclo="s" />
          </div>
          <div id="division6">
            <Division id={21} año={4} division={1} ciclo="s" />
            <Division id={22} año={4} division={2} ciclo="s" />
          </div>
        </section>

        {/* <!-- Seccion de asignaturas, o materias, dividida por cada curso de la tecnica, la forma de leer las clases se encuentra comentada
        en el archivo JS--> */}
        <section className="asignaturas" id="asignsContainer">
          <div className="asign" id="asign11b">
            <ul>
              <li>
                <a href="/">Lengua</a>
              </li>
              <li>
                <a href="/">Ingles</a>
              </li>
              <li>
                <a href="/">Educacion fisica</a>
              </li>
              <li>
                <a href="/">Educacion Artistica</a>
              </li>
              <li>
                <a href="/">Geografia</a>
              </li>
              <li>
                <a href="/">Historia</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana</a>
              </li>
              <li>
                <a href="/">Matematica</a>
              </li>
              <li>
                <a href="/">Biologia</a>
              </li>
              <li>
                <a href="/">Fisicoquimica</a>
              </li>
              <li>
                <a href="/">Tecnologia</a>
              </li>
              <li>
                <a href="/">Dibujo tecnico</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign12b">
            <ul>
              <li>
                <a href="/">Lengua</a>
              </li>
              <li>
                <a href="/">Ingles</a>
              </li>
              <li>
                <a href="/">Educacion fisica</a>
              </li>
              <li>
                <a href="/">Educacion Artistica</a>
              </li>
              <li>
                <a href="/">Geografia</a>
              </li>
              <li>
                <a href="/">Historia</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana</a>
              </li>
              <li>
                <a href="/">Matematica</a>
              </li>
              <li>
                <a href="/">Biologia</a>
              </li>
              <li>
                <a href="/">Fisicoquimica</a>
              </li>
              <li>
                <a href="/">Tecnologia</a>
              </li>
              <li>
                <a href="/">Dibujo tecnico</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign13b">
            <ul>
              <li>
                <a href="/">Lengua</a>
              </li>
              <li>
                <a href="/">Ingles</a>
              </li>
              <li>
                <a href="/">Educacion fisica</a>
              </li>
              <li>
                <a href="/">Educacion Artistica</a>
              </li>
              <li>
                <a href="/">Geografia</a>
              </li>
              <li>
                <a href="/">Historia</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana</a>
              </li>
              <li>
                <a href="/">Matematica</a>
              </li>
              <li>
                <a href="/">Biologia</a>
              </li>
              <li>
                <a href="/">Fisicoquimica</a>
              </li>
              <li>
                <a href="/">Tecnologia</a>
              </li>
              <li>
                <a href="/">Dibujo tecnico</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign14b">
            <ul>
              <li>
                <a href="/">Lengua</a>
              </li>
              <li>
                <a href="/">Ingles</a>
              </li>
              <li>
                <a href="/">Educacion fisica</a>
              </li>
              <li>
                <a href="/">Educacion Artistica</a>
              </li>
              <li>
                <a href="/">Geografia</a>
              </li>
              <li>
                <a href="/">Historia</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana</a>
              </li>
              <li>
                <a href="/">Matematica</a>
              </li>
              <li>
                <a href="/">Biologia</a>
              </li>
              <li>
                <a href="/">Fisicoquimica</a>
              </li>
              <li>
                <a href="/">Tecnologia</a>
              </li>
              <li>
                <a href="/">Dibujo tecnico</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign15b">
            <ul>
              <li>
                <a href="/">Lengua</a>
              </li>
              <li>
                <a href="/">Ingles</a>
              </li>
              <li>
                <a href="https://classroom.google.com/u/1/c/MzI0MzYzMzEyNTkw">Educacion fisica</a>
              </li>
              <li>
                <a href="/">Educacion Artistica</a>
              </li>
              <li>
                <a href="/">Geografia</a>
              </li>
              <li>
                <a href="/">Historia</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana</a>
              </li>
              <li>
                <a href="/">Matematica</a>
              </li>
              <li>
                <a href="/">Biologia</a>
              </li>
              <li>
                <a href="/">Fisicoquimica</a>
              </li>
              <li>
                <a href="/">Tecnologia</a>
              </li>
              <li>
                <a href="/">Dibujo tecnico</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign21b">
            <ul>
              <li>
                <a href="/">Lengua II</a>
              </li>
              <li>
                <a href="/">Ingles II</a>
              </li>
              <li>
                <a href="/">Educacion fisica II</a>
              </li>
              <li>
                <a href="/">Educacion Artistica II</a>
              </li>
              <li>
                <a href="/">Geografia II</a>
              </li>
              <li>
                <a href="/">Historia II</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana II</a>
              </li>
              <li>
                <a href="/">Matematica II</a>
              </li>
              <li>
                <a href="/">Biologia II</a>
              </li>
              <li>
                <a href="/">Fisica I</a>
              </li>
              <li>
                <a href="/">Tecnologia de la información y la comunicación</a>
              </li>
              <li>
                <a href="/">Dibujo tecnico II</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign22b">
            <ul>
              <ul>
                <li>
                  <a href="/">Lengua II</a>
                </li>
                <li>
                  <a href="/">Ingles II</a>
                </li>
                <li>
                  <a href="/">Educacion fisica II</a>
                </li>
                <li>
                  <a href="/">Educacion Artistica II</a>
                </li>
                <li>
                  <a href="/">Geografia II</a>
                </li>
                <li>
                  <a href="/">Historia II</a>
                </li>
                <li>
                  <a href="/">Formacion etica y ciudadana II</a>
                </li>
                <li>
                  <a href="/">Matematica II</a>
                </li>
                <li>
                  <a href="/">Biologia II</a>
                </li>
                <li>
                  <a href="/">Fisica I</a>
                </li>
                <li>
                  <a href="/">Tecnologia de la información y la comunicación</a>
                </li>
                <li>
                  <a href="/">Dibujo tecnico II</a>
                </li>
              </ul>{" "}
            </ul>
          </div>
          <div className="asign" id="asign23b">
            <ul>
              <ul>
                <li>
                  <a href="/">Lengua II</a>
                </li>
                <li>
                  <a href="/">Ingles II</a>
                </li>
                <li>
                  <a href="/">Educacion fisica II</a>
                </li>
                <li>
                  <a href="/">Educacion Artistica II</a>
                </li>
                <li>
                  <a href="/">Geografia II</a>
                </li>
                <li>
                  <a href="/">Historia II</a>
                </li>
                <li>
                  <a href="/">Formacion etica y ciudadana II</a>
                </li>
                <li>
                  <a href="/">Matematica II</a>
                </li>
                <li>
                  <a href="/">Biologia II</a>
                </li>
                <li>
                  <a href="/">Fisica I</a>
                </li>
                <li>
                  <a href="/">Tecnologia de la información y la comunicación</a>
                </li>
                <li>
                  <a href="/">Dibujo tecnico II</a>
                </li>
              </ul>{" "}
            </ul>
          </div>
          <div className="asign" id="asign24b">
            <ul>
              <ul>
                <li>
                  <a href="/">Lengua II</a>
                </li>
                <li>
                  <a href="/">Ingles II</a>
                </li>
                <li>
                  <a href="/">Educacion fisica II</a>
                </li>
                <li>
                  <a href="/">Educacion Artistica II</a>
                </li>
                <li>
                  <a href="/">Geografia II</a>
                </li>
                <li>
                  <a href="/">Historia II</a>
                </li>
                <li>
                  <a href="/">Formacion etica y ciudadana II</a>
                </li>
                <li>
                  <a href="/">Matematica II</a>
                </li>
                <li>
                  <a href="/">Biologia II</a>
                </li>
                <li>
                  <a href="/">Fisica I</a>
                </li>
                <li>
                  <a href="/">Tecnologia de la información y la comunicación</a>
                </li>
                <li>
                  <a href="/">Dibujo tecnico II</a>
                </li>
              </ul>{" "}
            </ul>
          </div>
          <div className="asign" id="asign11">
            <ul>
              <li>
                <a href="/">Lengua III</a>
              </li>
              <li>
                <a href="/">Ingles III</a>
              </li>
              <li>
                <a href="/">Educacion fisica III</a>
              </li>
              <li>
                <a href="/">Educacion Artistica III</a>
              </li>
              <li>
                <a href="/">Geografia III</a>
              </li>
              <li>
                <a href="/">Historia III</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana III</a>
              </li>
              <li>
                <a href="/">Matematica III</a>
              </li>
              <li>
                <a href="/">Biologia Celular</a>
              </li>
              <li>
                <a href="/">Fisica II</a>
              </li>
              <li>
                <a href="/">Química general I</a>
              </li>
              <li>
                <a href="/">Tecnologia de los materiales</a>
              </li>
              <li>
                <a href="/">
                  Representacion gráfica e interpretacion de planos industriales
                </a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign12">
            <ul>
              <li>
                <a href="/">Lengua III</a>
              </li>
              <li>
                <a href="/">Ingles III</a>
              </li>
              <li>
                <a href="/">Educacion fisica III</a>
              </li>
              <li>
                <a href="/">Educacion Química general II</a>
              </li>
              <li>
                <a href="/">Educacion Artistica III</a>
              </li>
              <li>
                <a href="/">Geografia III</a>
              </li>
              <li>
                <a href="/">Historia III</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana III</a>
              </li>
              <li>
                <a href="/">Matematica III</a>
              </li>
              <li>
                <a href="/">Biologia Celular</a>
              </li>
              <li>
                <a href="/">Fisica II</a>
              </li>
              <li>
                <a href="/">Química general I</a>
              </li>
              <li>
                <a href="/">Tecnologia de los materiales</a>
              </li>
              <li>
                <a href="/">
                  Representacion gráfica e interpretacion de planos industriales
                </a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign13">
            <ul>
              <li>
                <a href="/">Lengua III</a>
              </li>
              <li>
                <a href="/">Ingles III</a>
              </li>
              <li>
                <a href="/">Educacion fisica III</a>
              </li>
              <li>
                <a href="/">Educacion Química general II</a>
              </li>
              <li>
                <a href="/">Educacion Artistica III</a>
              </li>
              <li>
                <a href="/">Geografia III</a>
              </li>
              <li>
                <a href="/">Historia III</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana III</a>
              </li>
              <li>
                <a href="/">Matematica III</a>
              </li>
              <li>
                <a href="/">Biologia Celular</a>
              </li>
              <li>
                <a href="/">Fisica II</a>
              </li>
              <li>
                <a href="/">Química general I</a>
              </li>
              <li>
                <a href="/">Tecnologia de los materiales</a>
              </li>
              <li>
                <a href="/">
                  Representacion gráfica e interpretacion de planos industriales
                </a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign14">
            <ul>
              <li>
                <a href="/">Lengua III</a>
              </li>
              <li>
                <a href="/">Ingles III</a>
              </li>
              <li>
                <a href="/">Educacion fisica III</a>
              </li>
              <li>
                <a href="/">Educacion Química general II</a>
              </li>
              <li>
                <a href="/">Educacion Artistica III</a>
              </li>
              <li>
                <a href="/">Geografia III</a>
              </li>
              <li>
                <a href="/">Historia III</a>
              </li>
              <li>
                <a href="/">Formacion etica y ciudadana III</a>
              </li>
              <li>
                <a href="/">Matematica III</a>
              </li>
              <li>
                <a href="/">Biologia Celular</a>
              </li>
              <li>
                <a href="/">Fisica II</a>
              </li>
              <li>
                <a href="/">Tecnologia de los materiales</a>
              </li>
              <li>
                <a href="/">
                  Representacion gráfica e interpretacion de planos industriales
                </a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign21">
            <ul>
              <li>
                <a href="/">Lengua y literatura I</a>
              </li>
              <li>
                <a href="/">Ingles técnico</a>
              </li>
              <li>
                <a href="/">Educacion fisica IV</a>
              </li>
              <li>
                <a href="/">Filosofía</a>
              </li>
              <li>
                <a href="/">Análisis matemático</a>
              </li>
              <li>
                <a href="/">Fisica III</a>
              </li>
              <li>
                <a href="/">Teoría del diseño y sistemas</a>
              </li>
              <li>
                <a href="/">Tecnología de los materiales II</a>
              </li>
              <li>
                <a href="/">Química general II</a>
              </li>
              <li>
                <a href="/">Química inorgánica</a>
              </li>
              <li>
                <a href="/">Microbiología</a>
              </li>
              <li>
                <a href="/">Termodinámica</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign22">
            <ul>
              <li>
                <a href="/">Lengua y literatura I</a>
              </li>
              <li>
                <a href="/">Ingles técnico</a>
              </li>
              <li>
                <a href="/">Educacion fisica IV</a>
              </li>
              <li>
                <a href="/">Filosofía</a>
              </li>
              <li>
                <a href="/">Análisis matemático</a>
              </li>
              <li>
                <a href="/">Fisica III</a>
              </li>
              <li>
                <a href="/">Teoría del diseño y sistemas</a>
              </li>
              <li>
                <a href="/">Tecnología de los materiales II</a>
              </li>
              <li>
                <a href="/">Química general II</a>
              </li>
              <li>
                <a href="/">Química inorgánica</a>
              </li>
              <li>
                <a href="/">Microbiología</a>
              </li>
              <li>
                <a href="/">Termodinámica</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign23">
            <ul>
              <li>
                <a href="/">Lengua y literatura I</a>
              </li>
              <li>
                <a href="/">Ingles técnico</a>
              </li>
              <li>
                <a href="/">Educacion fisica IV</a>
              </li>
              <li>
                <a href="/">Filosofía</a>
              </li>
              <li>
                <a href="/">Análisis matemático</a>
              </li>
              <li>
                <a href="/">Fisica III</a>
              </li>
              <li>
                <a href="/">Teoría del diseño y sistemas</a>
              </li>
              <li>
                <a href="/">Tecnología de los materiales II</a>
              </li>
              <li>
                <a href="/">Química general II</a>
              </li>
              <li>
                <a href="/">Química inorgánica</a>
              </li>
              <li>
                <a href="/">Microbiología</a>
              </li>
              <li>
                <a href="/">Termodinámica</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign24">
            <ul>
              <li>
                <a href="/">Lengua y literatura I</a>
              </li>
              <li>
                <a href="/">Ingles técnico</a>
              </li>
              <li>
                <a href="/">Educacion fisica IV</a>
              </li>
              <li>
                <a href="/">Filosofía</a>
              </li>
              <li>
                <a href="/">Análisis matemático</a>
              </li>
              <li>
                <a href="/">Fisica III</a>
              </li>
              <li>
                <a href="/">Teoría del diseño y sistemas</a>
              </li>
              <li>
                <a href="/">Tecnología de los materiales II</a>
              </li>
              <li>
                <a href="/">Química general II</a>
              </li>
              <li>
                <a href="/">Química inorgánica</a>
              </li>
              <li>
                <a href="/">Microbiología</a>
              </li>
              <li>
                <a href="/">Termodinámica</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign31">
            <ul>
              <li>
                <a href="/">Lengua y literatura II</a>
              </li>
              <li>
                <a href="/">Ingles Tecnico II</a>
              </li>
              <li>
                <a href="/">Educacion fisica V</a>
              </li>
              <li>
                <a href="/">Ética y deontología</a>
              </li>
              <li>
                <a href="/">Probabilidad y Estadistica</a>
              </li>
              <li>
                <a href="/">Química Analítica I</a>
              </li>
              <li>
                <a href="/">Química orgánica I</a>
              </li>
              <li>
                <a href="/">Bromatología</a>
              </li>
              <li>
                <a href="/">Operaciones unitarias</a>
              </li>
              <li>
                <a href="https://classroom.google.com/c/MjkyMDQyNjcyMDA5?cjc=f22wvg3">
                  Fundamentos de los procesos químicos
                </a>
              </li>
              <li>
                <a href="https://classroom.google.com/c/Mjk1ODcxNjIxOTAx?cjc=z3z46a7">Química industrial</a>
              </li>
              <li>
                <a href="/">Practicas profesionalizantes I</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign32">
            <ul>
              <li>
                <a href="/">Lengua y literatura II</a>
              </li>
              <li>
                <a href="/">Ingles Tecnico II</a>
              </li>
              <li>
                <a href="/">Educacion fisica V</a>
              </li>
              <li>
                <a href="/">Ética y deontología</a>
              </li>
              <li>
                <a href="/">Probabilidad y Estadistica</a>
              </li>
              <li>
                <a href="/">Química Analítica I</a>
              </li>
              <li>
                <a href="/">Química orgánica I</a>
              </li>
              <li>
                <a href="/">Bromatología</a>
              </li>
              <li>
                <a href="/">Operaciones unitarias</a>
              </li>
              <li>
                <a href="/">Fundamentos de los procesos químicos</a>
              </li>
              <li>
                <a href="/">Química industrial</a>
              </li>
              <li>
                <a href="/">Practicas profesionalizantes I</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign33">
            <ul>
              <li>
                <a href="/">Lengua y literatura II</a>
              </li>
              <li>
                <a href="/">Ingles Tecnico II</a>
              </li>
              <li>
                <a href="/">Educacion fisica V</a>
              </li>
              <li>
                <a href="/">Ética y deontología</a>
              </li>
              <li>
                <a href="/">Probabilidad y Estadistica</a>
              </li>
              <li>
                <a href="/">Química Analítica I</a>
              </li>
              <li>
                <a href="/">Química orgánica I</a>
              </li>
              <li>
                <a href="/">Bromatología</a>
              </li>
              <li>
                <a href="/">Operaciones unitarias</a>
              </li>
              <li>
                <a href="/">Fundamentos de los procesos químicos</a>
              </li>
              <li>
                <a href="/">Química industrial</a>
              </li>
              <li>
                <a href="/">Practicas profesionalizantes I</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign41">
            <ul>
              <li>
                <a href="/">Procesos Productivos</a>
              </li>
              <li>
                <a href="/">Marco Juridico de los procesos productivos</a>
              </li>
              <li>
                <a href="/">Organización y gestión de la producción</a>
              </li>
              <li>
                <a href="/">Química análitica II</a>
              </li>
              <li>
                <a href="/">Química orgánica II</a>
              </li>
              <li>
                <a href="/">Química ambiental</a>
              </li>
              <li>
                <a href="/">Seguridad e higiene industrial</a>
              </li>
              <li>
                <a href="/">Química industrial II</a>
              </li>
              <li>
                <a href="/">Practicas profesionalizantes II</a>
              </li>
            </ul>
          </div>
          <div className="asign" id="asign42">
            <ul>
              <li>
                <a href="/">Procesos Productivos</a>
              </li>
              <li>
                <a href="/">Marco Juridico de los procesos productivos</a>
              </li>
              <li>
                <a href="/">Organización y gestión de la producción</a>
              </li>
              <li>
                <a href="/">Química análitica II</a>
              </li>
              <li>
                <a href="/">Química orgánica II</a>
              </li>
              <li>
                <a href="/">Química ambiental</a>
              </li>
              <li>
                <a href="/">Seguridad e higiene industrial</a>
              </li>
              <li>
                <a href="/">Química industrial II</a>
              </li>
              <li>
                <a href="/">Practicas profesionalizantes II</a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    );
  }
}

export default Plataforma;
