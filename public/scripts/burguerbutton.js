const ipad=window.matchMedia("screen and (max-width:767px)")
var Menus=document.querySelectorAll('.list-ul');
Menus=[...Menus]
Menus=Menus.reverse()
const Menu=Menus[0]
const burguerb=document.querySelector(".burguer-button")
var linksNavegacion=document.querySelectorAll(".list-ul li")
linksNavegacion=[...linksNavegacion]


function aparecer(){
    if(Menu.classList.contains("isActive")){
        Menu.classList.remove("isActive")
    }else{
        Menu.classList.add("isActive")
    }}
    ipad.addListener(validacion)
    function validacion(event){
        if(event.matches){
            burguerb.addEventListener("click",aparecer)
            linksNavegacion.map(link=>{
                link.addEventListener("click",aparecer)
            })
        }else{
            burguerb.removeEventListener("click",aparecer)
            linksNavegacion.map(link=>{
                link.addEventListener("click",aparecer)
            })
        }
    }
    validacion(ipad)
