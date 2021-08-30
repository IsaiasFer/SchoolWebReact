//funcion para la divisiones y cursos en la plataforma
export function divisiones() {
  //VARIABLES
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
      // alert("Elpepe")
      /* history.go(-1) */
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

export function showContentDivisions(numberDivision) {
  //VARIABLES
  // -----------SECTIONS-------------
  let cursos = document.getElementById("curses");
  let divisions = document.getElementById("divisions");

  // -----------SECTIONS-------------

  const division1 = document.getElementById("division1");
  const division2 = document.getElementById("division2");
  const division3 = document.getElementById("division3");
  const division4 = document.getElementById("division4");
  const division5 = document.getElementById("division5");
  const division6 = document.getElementById("division6");
  let VOLVER = document.querySelector(".volverButton");

  // ---------DIVISIONS----------

  var divisionsArray = [
    divisions,
    division1,
    division2,
    division3,
    division4,
    division5,
    division6,
  ];

  // ---------DIVISIONS----------
  //VARIABLES
  for (let i = 0; i < divisionsArray.length; i++) {
    divisionsArray[i].style.display = "none";
  }
  divisionsArray[numberDivision].style.display = "flex";
  divisions.style.display = "flex";
  cursos.style.display = "none";
  VOLVER.classList.add("inDivisions");
  VOLVER.onclick=""
}

export function showContentAsign(numberAsign) {
  //VARIABLES
  // -----------SECTIONS-------------
  let divisions = document.getElementById("divisions");
  let asignsContainer = document.getElementById("asignsContainer");

  // -----------SECTIONS-------------
  const asign11b = document.getElementById("asign11b");
  const asign12b = document.getElementById("asign12b");
  const asign13b = document.getElementById("asign13b");
  const asign14b = document.getElementById("asign14b");
  const asign15b = document.getElementById("asign15b");
  const asign21b = document.getElementById("asign21b");
  const asign22b = document.getElementById("asign22b");
  const asign23b = document.getElementById("asign23b");
  const asign24b = document.getElementById("asign24b");
  const asign11 = document.getElementById("asign11");
  const asign12 = document.getElementById("asign12");
  const asign13 = document.getElementById("asign13");
  const asign14 = document.getElementById("asign14");
  const asign21 = document.getElementById("asign21");
  const asign22 = document.getElementById("asign22");
  const asign23 = document.getElementById("asign23");
  const asign24 = document.getElementById("asign24");
  const asign31 = document.getElementById("asign31");
  const asign32 = document.getElementById("asign32");
  const asign33 = document.getElementById("asign33");
  const asign41 = document.getElementById("asign41");
  const asign42 = document.getElementById("asign42");

  let VOLVER = document.querySelector(".volverButton");

  // ----------------ASIGNS----------------------

  var asignArray = [
    divisions,
    asign11b,
    asign12b,
    asign13b,
    asign14b,
    asign15b,
    asign21b,
    asign22b,
    asign23b,
    asign24b,
    asign11,
    asign12,
    asign13,
    asign14,
    asign21,
    asign22,
    asign23,
    asign24,
    asign31,
    asign32,
    asign33,
    asign41,
    asign42,
  ];

  // ----------------ASIGNS----------------------

  //VARIABLES
  for (let i = 0; i < asignArray.length; i++) {
    asignArray[i].style.display = "none";
  }
  asignArray[numberAsign].style.display = "block";
  asignsContainer.style.display = "block";
  divisions.style.display = "none";
  VOLVER.classList.add("inAsign");
}

//funcion para el menu hamburguesa
export function burguerButton() {
  const ipad = window.matchMedia("screen and (max-width:767px)");
  var Menus = document.querySelectorAll(".list-ul");
  Menus = [...Menus];
  Menus = Menus.reverse();
  const Menu = Menus[0];
  const burguerb = document.querySelector(".burguer-button");
  var linksNavegacion = document.querySelectorAll(".list-ul li");
  linksNavegacion = [...linksNavegacion];

  function aparecer() {
    if (Menu.classList.contains("isActive")) {
      Menu.classList.remove("isActive");
    } else {
      Menu.classList.add("isActive");
    }
  }
  ipad.addListener(validacion);
  function validacion(event) {
    if (event.matches) {
      burguerb.addEventListener("click", aparecer);
      linksNavegacion.forEach((link) => {
        link.addEventListener("click", aparecer);
      });
    } else {
      burguerb.removeEventListener("click", aparecer);
      linksNavegacion.forEach((link) => {
        link.addEventListener("click", aparecer);
      });
    }
  }
  validacion(ipad);
}

//funcion para el boton de plataformas
export function menuLateral() {
  var PLATFORM = document.querySelector(".plataformasButton");
  var MENU = document.querySelector(".menu");
  function aparecer() {
    if (MENU.classList.contains("isActive")) {
      MENU.classList.remove("isActive");
    } else {
      MENU.classList.add("isActive");
    }
  }
  function sape() {
    PLATFORM.addEventListener("click", aparecer);
  }
  sape();
}
