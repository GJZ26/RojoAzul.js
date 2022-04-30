const moneda = document.getElementById('moneda');
const body = document.body;
var link = document.querySelector("link[rel~='icon']");
let defaultLang = es;

link.href = './icon/inactive.png';

let seed;
document.title=defaultLang.title;
/**
 * 
 * @param {number} opcion 
 */
function changeLang(opcion){
    if (opcion==1){
        defaultLang=es;
    }else if(opcion==2){
        defaultLang=en;
    }else{
        defaultLang=port;
    }
    if(!moneda.classList.contains('rojo')&&!moneda.classList.contains('azul')){
        moneda.textContent=defaultLang.moneda;
    }
    console.clear();
    showConsoleMessage();
    document.title=defaultLang.title;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lanzar(){
    moneda.classList.add('rotating');
    body.classList.add('rotating');
    moneda.textContent="";
    moneda.classList.remove('rojo');
    body.classList.remove('rojo');
    body.classList.remove('azul');
    moneda.classList.remove('azul');
    seed = new Date().getMilliseconds()*Date.now();
    sleep(300).then(()=>{
        if(Math.round(Math.random()*seed)%2==0){
            moneda.classList.add('rojo');
            body.classList.add('rojo');
            moneda.textContent=defaultLang.rojo;
            link.href = './icon/red.png';
        }else{
            moneda.classList.add('azul');
            body.classList.add('azul');
            moneda.textContent=defaultLang.azul;
            link.href = './icon/blue.png';
        }
        moneda.classList.remove('rotating');
        body.classList.remove('rotating');
    });
}

function showConsoleMessage(){
    console.log("%c"+defaultLang.consolaVersion[0]+"\n%c"+defaultLang.consolaVersion[1]+": https://github.com/GJZ26/RojoAzul.js","color:blue;font-weight:bold","font-style:italic");
    console.info("%c"+defaultLang.funcionesTitle+"\n%cshowSeed() %c=> %c"+defaultLang.funcion1+"\n%cchangeLang() %c=> %c"+defaultLang.funcion2,"color:green;font-weight:bold","color:rgb(139, 0, 0);","color:gray","font-style:italic","color:rgb(139, 0, 0);","color:gray","font-style:italic");
}

function showSeed(){
    console.log(seed);
}

showConsoleMessage();
moneda.addEventListener('click',lanzar)