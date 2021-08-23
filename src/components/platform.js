import React from "react";
import { showContentAsign, showContentDivisions } from "../scripts/functions";
import Curso from "./curso";

class Plataforma extends React.Component {
  render() {
    return (
      <section className="menuPlatform">
        <button className="plataformasButton">
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
          <a href="/">Volver</a>
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
            <div
              onClick={() => {
                showContentAsign(1);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/45ysIEL.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 1<sup>ra</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(2);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/45ysIEL.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 2 <sup>da</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(3);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/45ysIEL.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 3 <sup>ra</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(4);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/45ysIEL.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 4 <sup>ta</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(5);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/45ysIEL.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 5 <sup>ta</sup> ciclo basico
              </h3>
            </div>
          </div>
          <div id="division2">
            <div
              onClick={() => {
                showContentAsign(6);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/klOmYMF.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 1 <sup>ra</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(7);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/klOmYMF.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 2 <sup>da</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(8);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/klOmYMF.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 3 <sup>ra</sup> ciclo basico
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(9);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/klOmYMF.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 4 <sup>ta</sup> ciclo basico
              </h3>
            </div>
          </div>
          <div id="division3">
            <div
              onClick={() => {
                showContentAsign(10);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/dJHRV95.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 1 <sup>ra</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(11);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/dJHRV95.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 2 <sup>da</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(12);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/dJHRV95.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 3 <sup>ra</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(13);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/dJHRV95.png" alt="" />
              </figure>
              <h3>
                1<sup>ro</sup> 4 <sup>ta</sup> ciclo superior
              </h3>
            </div>
          </div>
          <div id="division4">
            <div
              onClick={() => {
                showContentAsign(14);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/OKDZFLC.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 1 <sup>ra</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(15);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/OKDZFLC.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 2 <sup>da</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(16);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/OKDZFLC.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 3 <sup>ra</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(17);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/OKDZFLC.png" alt="" />
              </figure>
              <h3>
                2<sup>do</sup> 4 <sup>ta</sup> ciclo superior
              </h3>
            </div>
          </div>
          <div id="division5">
            <div
              onClick={() => {
                showContentAsign(18);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/IEdUyGC.png" alt="" />
              </figure>
              <h3>
                3<sup>ro</sup> 1 <sup>ra</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(19);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/IEdUyGC.png" alt="" />
              </figure>
              <h3>
                3<sup>ro</sup> 2 <sup>da</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(20);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/IEdUyGC.png" alt="" />
              </figure>
              <h3>
                3<sup>ro</sup> 3 <sup>ra</sup> ciclo superior
              </h3>
            </div>
          </div>
          <div id="division6">
            <div
              onClick={() => {
                showContentAsign(21);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/beupHtd.png" alt="" />
              </figure>
              <h3>
                4<sup>ro</sup> 1 <sup>ra</sup> ciclo superior
              </h3>
            </div>
            <div
              onClick={() => {
                showContentAsign(22);
              }}
            >
              <figure className="curseContainer">
                <img src="https://i.imgur.com/beupHtd.png" alt="" />
              </figure>
              <h3>
                4<sup>ro</sup> 2 <sup>da</sup> ciclo superior
              </h3>
            </div>
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
                <a href="https://classNameroom.google.com/c/MjkyMDQyNjcyMDA5?cjc=f22wvg3">
                  Fundamentos de los procesos químicos
                </a>
              </li>
              <li>
                <a href="/">Química industrial</a>
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
