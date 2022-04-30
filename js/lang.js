class lang{
    title;
    moneda;
    azul;
    rojo;
    consolaVersion;
    funcionesTitle;
    funcion1;
    funcion2;
    constructor(title,moneda,azul,rojo,consolaVersion,funcionesTitle,funcion1,funcion2){
        this.title=title;
        this.moneda=moneda;
        this.azul=azul;
        this.rojo=rojo;
        this.consolaVersion=consolaVersion;
        this.funcionesTitle=funcionesTitle
        this.funcion1=funcion1;
        this.funcion2=funcion2;
    }
}

const es = new lang("Rojo Azul","Haga click para comenzar","Azul","Rojo",["Versión 1.0.0","Código fuente"],"¡Prueba nuestras funciones!","Muestra la semilla aleatoria","Traduce el texto al idioma seleccionado (Español/Inglés/Portugués)");
const en = new lang("Red Blue","Click to start","Blue","Red",["Version 1.0.0","Source code"],"Try our features","Show the random seed","Translate the text to the selected language (Spanish/English/Portuguese)");
const port = new lang("Vermelho azul","Clique para começar","Azul","Vermelho",["Versão 1.0.0","Código fonte"],"Experimente nossos recursos!","Amostra de semente aleatória","Traduzir o texto para o idioma selecionado (Espanhol/Inglês/Português)");