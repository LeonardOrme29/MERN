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

class cuadroPlano{
    constructor(largo,ancho,Liston,Vidrio,Nordex){
        this.largo=largo;
        this.ancho=ancho;
        this.Liston=Liston;
        this.Vidrio=Vidrio;
        this.Nordex=Nordex;
    }
    cantidadCM(){
        var cantidadM;
    	cantidadM=(this.largo*2+this.ancho*2);
    	return cantidadM;
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
        return this.largo*this.ancho;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    areaNordex(){
        return this.largo*this.ancho;
    }
    costoNordex(){
        return this.areaNordex()*this.Nordex.costoCM2();
    }
    adiccionales(){
        return 2.12;
    }
    Total(){
        return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.adiccionales();
    }
    }
class cuadroBox{
    constructor(largo,ancho,Liston,Vidrio,Nordex,Varilla){
        this.largo=largo;
        this.ancho=ancho;
        this.Liston=Liston;
        this.Vidrio=Vidrio;
        this.Nordex=Nordex;
        this.Varilla=Varilla;
    }
    cantidadCM(){
        var cantidadM;
        cantidadM=(this.largo*2+this.ancho*2);
        return cantidadM;
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
    //Varilla
    costoVarrilla(){
        return this.cantidadCM()*this.Varilla.costoCM2();
    }
    //VIDRIO
    areaVidrio(){
        return this.largo*this.ancho;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    areaNordex(){
        return this.largo*this.ancho;
    }
    costoNordex(){
        return this.areaNordex()*this.Nordex.costoCM2();
    }
    adiccionales(){
        return 2.12;
    }
    Total(){
        return this.costoListon()+this.costoNordex()+this.costoVidrio()+this.adiccionales()+this.costoVarrilla();
    }
    }

class cuadroDobleV{
    constructor(largo,ancho,Liston,Vidrio,Varilla){
        this.largo=largo;
        this.ancho=ancho;
        this.Liston=Liston;
        this.Vidrio=Vidrio;
        this.Varilla=Varilla
     }
    cantidadCM(){
    var cantidadM;
    cantidadM=(this.largo*2+this.ancho*2);
    return cantidadM;
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
    //Varilla
    costoVarrilla(){
        return this.cantidadCM()*this.Varilla.costoCM2();
    }
    //VIDRIO
    areaVidrio(){
        return this.largo*this.ancho;
    }
    costoVidrio(){
        return this.areaVidrio()*this.Vidrio.costoCM2();
    }
    adiccionales(){
        return 2.12;
    }
    Total(){
        return this.costoListon()+2*(this.costoVidrio())+this.adiccionales()+this.costoVarrilla()*2;
    }
}

function buildCuadro(alto,ancho,tipoC){
    var altoCuadro=parseFloat(alto);
    var anchoCuadro=parseFloat(ancho);
    var listonCosto=12;
    var listonLargo=320;
    var liston1=new liston(listonLargo,listonCosto);
    var vidrio1=new vidrio(40,20,6.20);
    var nordex1=new nordex(244,122,32.90);
    var varilla1=new varilla(320,3)
    var cuadroplano=new cuadroPlano(altoCuadro,anchoCuadro,liston1,vidrio1,nordex1);
    var cuadrobox=new cuadroBox(altoCuadro,anchoCuadro,liston1,vidrio1,nordex1,varilla1);
    var cuadrodobleV=new cuadroDobleV(altoCuadro,anchoCuadro,liston1,vidrio1,varilla1);
    var totalCuadro=0;
    if (tipoC==='plano') {
        totalCuadro=cuadroplano.Total()
    }else if(tipoC==='box'){
        totalCuadro=cuadrobox.Total()
    }else if(tipoC==='dVidrio'){
        totalCuadro=cuadrodobleV.Total()
    }
    return totalCuadro*2;
    
}
export default buildCuadro;