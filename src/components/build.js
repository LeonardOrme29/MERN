class liston {
    constructor (largo, costo) {
      this.largo = largo;
      this.costo = costo;
    }
    costoCM2 () {
      return this.costo/this.largo;
    }
  }

class vidrio{
    constructor(largo,ancho,precioVidrio){
        this.largo=largo;
        this.ancho=ancho;
    	this.precioVidrio=precioVidrio;
    }
    area(){
        return this.largo*this.ancho
    }
    costoCM2(){
        return this.precioVidrio/this.area();
    }

}

class nordex{
    constructor(largo,ancho,precioNordex){
        this.largo=largo;
    	this.ancho=ancho;
    	this.precioNordex=precioNordex;
    }
    area(){
        return this.largo*this.ancho
    }
    costoCM2(){
        return this.precioNordex/this.area();
    }
}

class varilla{
    constructor(largo,costoV){
        this.largo=largo;
        this.costoV=costoV;
    }
    costoCM2(){
        return this.costoV/this.largo;
    }
}

class paspartu{
    constructor(largoP,anchoP,costoP){
        this.anchoP=anchoP;
        this.largoP=largoP;
        this.costoP=costoP;
    }
    areaP(){
        return this.anchoP*this.largoP;
    }
    costoCM2(){
        return this.costoP/this.areaP();
    }
}
class cuadroPlano{
    constructor(largoA,anchoA,Liston,Vidrio,Nordex,Paspartu,booleanPaspartu,largoP,anchoP,acrilico,gancho){
        this.largoA=largoA;
        this.anchoA=anchoA;
        this.Liston=Liston;
        this.Vidrio=Vidrio;
        this.Nordex=Nordex;
        this.Paspartu=Paspartu;
        this.booleanPaspartu=booleanPaspartu;
        this.anchoP=anchoP;
        this.largoP=largoP;
        this.acrilico=acrilico;
        this.gancho=gancho;
    }
    cantidadCM(){
        if (this.largoA!==0 && this.anchoA!==0) {
            return ((this.largoA+2)*2+(this.anchoA+2)*2);
        }
    	return 0;
    }
    cantidadListon(){
        let largoListon,aux;
    	let contador=1;
    	largoListon=this.Liston.largo;
        let auxliston=largoListon;
    	do{
    		aux=largoListon-(this.largo*2+this.ancho*2);
    		if (aux<0){
    			contador=contador+1;
    			largoListon=largoListon+auxliston;
    		}
    	}
    	while(aux<0);
    	return contador;
    }
    restanteListon(){
        let largoListon,aux,restante;
    	let contador=1;
    	largoListon=this.Liston.largo;
    	do{
    		aux=largoListon-(this.largo*2+this.ancho*2);
    		if (aux<0){
    			contador=contador+1;
    			largoListon=largoListon+largoListon;
    		}
    		restante=aux;
    	}
    	while(aux<0);
    	return restante;
    }
    costoListon(){
        return this.cantidadCM()*this.Liston.costoCM2();
    }
    //VIDRIO
    areaVidrio(){
        if (this.largoA!==0 && this.anchoA!==0) {
            return this.largoA*this.anchoA+4;
        }
    	return 0;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    areaNordex(){
        return this.largoA*this.anchoA;
    }
    costoNordex(){
        return this.areaNordex()*this.Nordex.costoCM2();
    }
    paspartuCM2(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            return (this.largoA+(this.largoP)*2)*(this.anchoA+(this.anchoP)*2)
        }
        return 0;
    }
    costoPaspartu(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            if (this.paspartuCM2()<this.Paspartu.areaP()/3) {
                return this.Paspartu.costoP/3;            
            }else{
                return this.Paspartu.costoP; 
            }
        }else{
            return 0;
        }
        
    }
    adiccionales(){
        return 2.12;
    }
    Total(){
        if (this.booleanPaspartu) {
            return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.costoPaspartu()+this.adiccionales();
        }else{
            return this.costoListon()+this.costoVidrio()+this.costoNordex()+this.adiccionales();
        }
    }
}
class cuadroBox{
    constructor(largoA,anchoA,Liston,Vidrio,Nordex,Varilla,Paspartu,booleanPaspartu,largoP,anchoP,acrilico,gancho){
        this.largoA=largoA;
        this.anchoA=anchoA;
        this.Liston=Liston;
        this.Vidrio=Vidrio;
        this.Nordex=Nordex;
        this.Varilla=Varilla;
        this.Paspartu=Paspartu;
        this.booleanPaspartu=booleanPaspartu;
        this.anchoP=anchoP;
        this.largoP=largoP;
        this.acrilico=acrilico;
        this.gancho=gancho;
    }
    cantidadCM(){
        if (this.largoA!==0 && this.anchoA!==0) {
            return ((this.largoA+2)*2+(this.anchoA+2)*2);
        }
    	return 0;
    }
    cantidadListon(){
        let largoListon,aux;
        let contador=1;
        largoListon=this.Liston.largo;
        let auxliston=largoListon;
        do{
            aux=largoListon-(this.largoA*2+this.anchoA*2);
            if (aux<0){
                contador=contador+1;
                largoListon=largoListon+auxliston;
            }
        }
        while(aux<0);
        return contador;
    }
    restanteListon(){
        let largoListon,aux,restante;
        let contador=1;
        largoListon=this.Liston.largo;
        do{
            aux=largoListon-(this.largoA*2+this.anchoA*2);
            if (aux<0){
                contador=contador+1;
                largoListon=largoListon+largoListon;
            }
            restante=aux;
        }
        while(aux<0);
        return restante;
    }
    costoListon(){
        return this.cantidadCM()*this.Liston.costoCM2();
    }
    //Varilla
    costoVarrilla(){
        return this.cantidadCM()*this.Varilla.costoCM2();
    }
    //VIDRIO
    areaVidrio(){
        return this.largoA*this.anchoA;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    areaNordex(){
        return this.largoA*this.anchoA;
    }
    costoNordex(){
        return this.areaNordex()*this.Nordex.costoCM2();
    }
    adiccionales(){
        return 2.12;
    }
    //Paspartu
    paspartuCM2(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            return (this.largoA+(this.largoP)*2)*(this.anchoA+(this.anchoP)*2)
        }
        return 0;
    }
    costoPaspartu(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            if (this.paspartuCM2()<this.Paspartu.areaP()/3) {
                return this.Paspartu.costoP/3;            
            }else{
                return this.Paspartu.costoP; 
            }
        }else{
            return 0;
        } 
    }
    Total(){
        if (this.booleanPaspartu) {
            return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.adiccionales()+this.costoVarrilla()+this.costoPaspartu();
        }else{
            return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.adiccionales()+this.costoVarrilla();
        }
    }
}
class cuadroDobleV{
    constructor(largoA,anchoA,Liston,Vidrio,Varilla,Paspartu,booleanPaspartu,largoP,anchoP,acrilico,gancho){
        this.largoA=largoA;
        this.anchoA=anchoA;
        this.Liston=Liston;
        this.Vidrio=Vidrio;
        this.Varilla=Varilla;
        this.Paspartu=Paspartu;
        this.booleanPaspartu=booleanPaspartu;
        this.anchoP=anchoP;
        this.largoP=largoP;
        this.acrilico=acrilico;
        this.gancho=gancho;
    }
    cantidadCM(){
        if (this.largoA!==0 && this.anchoA!==0) {
            return ((this.largoA+2)*2+(this.anchoA+2)*2);
        }
    	return 0;
    }
    cantidadListon(){
        let largoListon,aux;
        let contador=1;
        largoListon=this.Liston.largo;
        let auxliston=largoListon;
        do{
            aux=largoListon-(this.largoA*2+this.anchoA*2);
            if (aux<0){
                contador=contador+1;
                largoListon=largoListon+auxliston;
            }
        }
        while(aux<0);
        return contador;
    }
    restanteListon(){
        let largoListon,aux,restante;
        let contador=1;
        largoListon=this.Liston.largo;
        do{
            aux=largoListon-(this.largoA*2+this.anchoA*2);
            if (aux<0){
                contador=contador+1;
                largoListon=largoListon+largoListon;
            }
            restante=aux;
        }
        while(aux<0);
        return restante;
    }
    costoListon(){
        return this.cantidadCM()*this.Liston.costoCM2();
    }
    //Varilla
    costoVarrilla(){
        return this.cantidadCM()*this.Varilla.costoCM2();
    }
    //VIDRIO
    areaVidrio(){
        return this.largoA*this.anchoA;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    //PASPARTU
    paspartuCM2(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            return (this.largoA+(this.largoP)*2)*(this.anchoA+(this.anchoP)*2)
        }
        return 0;
    }
    costoPaspartu(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            if (this.paspartuCM2()<this.Paspartu.areaP()/3) {
                return this.Paspartu.costoP/3;            
            }else{
                return this.Paspartu.costoP; 
            }
        }else{
            return 0;
        } 
    }

    adiccionales(){
        return 2.12;
    }
    Total(){
         if (this.booleanPaspartu) {
            return this.costoListon()+2*(this.costoVidrio())+this.adiccionales()+this.costoVarrilla()*2+this.costoPaspartu();
        }else{
            return this.costoListon()+2*(this.costoVidrio())+this.adiccionales()+this.costoVarrilla()*2;
        }
    }
}
class cuadroDobleM{
    constructor(largoA,anchoA,Liston,Liston2,Vidrio,Nordex,Varilla,Paspartu,booleanPaspartu,largoP,anchoP,acrilico,gancho){
        this.largoA=largoA;
        this.anchoA=anchoA;
        this.Liston=Liston;
        this.Liston2=Liston2;
        this.Vidrio=Vidrio;
        this.Nordex=Nordex;
        this.Varilla=Varilla;
        this.Paspartu=Paspartu;
        this.booleanPaspartu=booleanPaspartu;
        this.anchoP=anchoP;
        this.largoP=largoP;
        this.acrilico=acrilico;
        this.gancho=gancho;
    }
    cantidadCM(){
        if (this.largoA!==0 && this.anchoA!==0) {
            return ((this.largoA+2)*2+(this.anchoA+2)*2);
        }
    	return 0;
    }
    cantidadListon(){
        let largoListon,aux;
        let contador=1;
        largoListon=this.Liston.largo;
        let auxliston=largoListon;
        do{
            aux=largoListon-(this.largoA*2+this.anchoA*2);
            if (aux<0){
                contador=contador+1;
                largoListon=largoListon+auxliston;
            }
        }
        while(aux<0);
        return contador;
    }
    restanteListon(){
        let largoListon,aux,restante;
        let contador=1;
        largoListon=this.Liston.largo;
        do{
            aux=largoListon-(this.largoA*2+this.anchoA*2);
            if (aux<0){
                contador=contador+1;
                largoListon=largoListon+largoListon;
            }
            restante=aux;
        }
        while(aux<0);
        return restante;
    }
    costoListon(){
        return this.cantidadCM()*this.Liston.costoCM2();
    }
    segundoListonCM(){
        return this.cantidadCM+4; //1 cm a cada lado, teniendo en cuenta q el borde del cuadro es de 2cm
    }
    //Otro listion
    segundoListonCosto(){
        return this.segundoListonCM()*this.Liston2.costoCM2();
    }
    //Varilla
    costoVarrilla(){
        return this.cantidadCM()*this.Varilla.costoCM2();
    }
    //VIDRIO
    areaVidrio(){
        return this.largoA*this.anchoA;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    areaNordex(){
        return this.largoA*this.anchoA;
    }
    costoNordex(){
        return this.areaNordex()*this.Nordex.costoCM2();
    }
    adiccionales(){
        return 2.12;
    }
    //Paspartu
    paspartuCM2(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            return (this.largoA+(this.largoP)*2)*(this.anchoA+(this.anchoP)*2)
        }
        return 0;
    }
    costoPaspartu(){
        if (this.booleanPaspartu && this.largoP!==0 && this.anchoP!==0 && this.largoP!=='' && this.anchoP!=='') {
            if (this.paspartuCM2()<this.Paspartu.areaP()/3) {
                return this.Paspartu.costoP/3;            
            }else{
                return this.Paspartu.costoP; 
            }
        }else{
            return 0;
        } 
    }
    Total(){
        if (this.booleanPaspartu) {
            return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.adiccionales()+this.costoVarrilla()+this.costoPaspartu()+this.segundoListonCosto();
        }else{
            return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.adiccionales()+this.costoVarrilla()+this.segundoListonCosto();
        }
    }
}

function buildCuadro(alto,ancho,tipoC,booleanPaspartu,largoP,anchoP,booleanAcrilico,booleanGancho){
    var altoCuadro=parseFloat(alto);
    var anchoCuadro=parseFloat(ancho);
    var listonCosto=15;
    var listonLargo=320;
    var liston1=new liston(listonLargo,listonCosto);
    var vidrio1=new vidrio(40,20,6.20);
    var nordex1=new nordex(244,122,32.90);
    var varilla1=new varilla(320,3);
    var paspartu1=new paspartu(70,50,8);
    var cuadroplano=new cuadroPlano(altoCuadro,anchoCuadro,liston1,vidrio1,nordex1,paspartu1,booleanPaspartu,largoP,anchoP,booleanAcrilico,booleanGancho);
    var cuadrobox=new cuadroBox(altoCuadro,anchoCuadro,liston1,vidrio1,nordex1,varilla1,paspartu1,booleanPaspartu,largoP,anchoP,booleanAcrilico,booleanGancho);
    var cuadrodobleV=new cuadroDobleV(altoCuadro,anchoCuadro,liston1,vidrio1,varilla1,paspartu1,booleanPaspartu,largoP,anchoP,booleanAcrilico,booleanGancho);
    //var cuadrodobleM=new cuadroDobleM(altoCuadro,anchoCuadro,liston1,liston2,vidrio1,varilla1,paspartu1,booleanPaspartu,largoP,anchoP,booleanAcrilico,booleanGancho);

    var totalCuadro;
    if (tipoC==='plano') {
        totalCuadro=cuadroplano.Total();
    }else if(tipoC==='box'){
        totalCuadro=cuadrobox.Total();
    }else if(tipoC==='dVidrio'){
        totalCuadro=cuadrodobleV.Total();
    }
    return totalCuadro*2;
    
}
export default buildCuadro;