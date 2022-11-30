//Clase Product
class Product{

    //Funcion constructora de la clase Product 
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    //Funcion para agregar IVA al producto (21%)
    calculatePriceWithIVA(){
        return this.price + (this.price*21)/100;
    }
}


//Creamos un objeto Product , con sus respectivos atributos y la funcion para calcular el IVA
const p1 = new Product("AirPods",10000);
alert(p1.calculatePriceWithIVA());