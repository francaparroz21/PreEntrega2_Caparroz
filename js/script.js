//Clase Product
class Product {

    //Funcion constructora de la clase Product 
    constructor(name, price) {
        this.id = generateId();
        this.name = name;
        this.price = price;
    }

    //toString
    toString() {
        return "{ID: " + this.id + "\nName: " + this.name + "\nPrice: " + this.price + "}";
    }

    //Funcion para agregar IVA al producto (21%)
    calculateIva() {
        return this.price + (this.price * 21) / 100;
    }
}

//Arrow function que genera un id unico e incremental para cada producto.
const generateId = (() => (id = 1, () => id++))();

//Aclaraciones 
//Creamos arraylist de productos
const arrayProducts = [];
//Flag que solo es false cuando se quiere salir del bucle.
let process = true;
//Menu para printear
const menu = "1-Create a product for append to the product list.\n2-Show the products list.\n3-Find a product by ID\n4-Filter products.\n5-Buy a product.\n0-Exit.";


//Ciclo while que solo se rompe cuando se ingresa "0" (EXIT).
while (process) {
    var op = parseInt(prompt(menu));
    //Opciones del menu
    switch (op) {
        case 1:
            var nameProduct = prompt("Enter the product name.");
            var priceProduct = parseFloat(prompt("Insert the product price."));
            arrayProducts.push(createProduct(nameProduct, priceProduct));
            break;
        case 2:
            showProducts();
            process = false;
            break;
        case 3:
            var findId = prompt("Enter the product ID.");
            console.log(findById(findId));
            process = false;
            break;
        case 4:
            var opFilter = parseInt(prompt("1.  Order from highest to lowest price.\n\
                                            2.  Order from lowest to highest price."));
            if (opFilter == 1) {
                console.log(sortHighest());
            }
            else if (opFilter == 2) {
                console.log(sortLowest());
            }
            process = false;
            break;
        case 5:
            var buyForId = parseInt(prompt("Enter the product id for buy."))
            console.log(buyProductById(buyForId));
            process = false;
            break;
        case 0:
            process = false;
            break;
    }
}

//Funcion para mostrar todos los productos
function showProducts() {
    arrayProducts.forEach(element => {
        console.log(element);
    });
}

//Funcion que toma dos argumentos, crea un producto con los parametros y lo retorna.
function createProduct(name, price) {
    return new Product(name, price);
}

//Funcion que compra un producto y lo elimina de la lista de productos. Devuelve true si se compro y viceversa.
function buyProductById(id) {
    p = findById(id);
    indexProd = arrayProducts.indexOf(p);
    if (arrayProducts.includes(p)) {
        arrayProducts.splice(arrayProducts.indexOf(p, 1));
        return true;
    }
    return false;
}

//Funcion para buscar productos por id
function findById(id) {
    arrayProducts.forEach(element => {
        if(element.id == id)return element;
    });
    return "Not found";
}

//Funciones que ordenan de mayor a menor precio y viceversa.Cada funcion retorna la lista ordenada;
function sortHighest() {
    return arrayProducts.sort(function (a, b) { return b.price - a.price });
}
function sortLowest() {
    return arrayProducts.sort(function (a, b) { return a.price - b.price });
}