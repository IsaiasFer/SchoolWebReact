var PLATFORMS=document.querySelectorAll('.plataformasButton');
PLATFORMS=[...PLATFORMS]
PLATFORMS=PLATFORMS.reverse()
const PLATFORM=PLATFORMS[0]
var MENU=document.querySelector(".menu");
function aparecer(){
    if(MENU.classList.contains("isActive")){
        MENU.classList.remove("isActive")
    }else{
        MENU.classList.add("isActive")
    }}
function sape(){
    PLATFORM.addEventListener("click",aparecer)
}
sape()