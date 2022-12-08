//Clase Product
class Product {

    //Funcion constructora de la clase Product 
    constructor(name, description, price) {
        this.id = generateId();
        this.name = name;
        this.description = description;
        this.price = price;
    }

    //Funcion para agregar IVA al producto (21%)
    calculateIva() {
        return this.price + (this.price * 21) / 100;
    }
}

//Arrow function que genera un id unico e incremental para cada producto.
const generateId = (() => (id = 1, () => id++))();

//Funcion para mostrar todos los productos
function showProducts() {
    arrayProducts.forEach(element => {
        console.log(element);
    });
}

//Funcion que toma dos argumentos, crea un producto y lo retorna.
function createProduct(name, desc, price) {
    return new Product(name, desc, price);
}

//Funcion que compra y elimina un producto de la lista de stock. Devuelve true si se compro y false si no.
function buyProductById(id) {
    p = findById(id);
    indexProd = arrayProducts.indexOf(p);
    if (arrayProducts.includes(p)) {
        arrayProducts.splice(indexProd, indexProd + 1);
        return true;
    }
    return false;
}

//Funcion para buscar productos por id. Devuelve un solo objeto ya que el id es unico e incremental.
function findById(idFind) {
    for (let i = 0; i < arrayProducts.length; i++) {
        if (arrayProducts[i].id == idFind) return arrayProducts[i];
    }
    return "Not found";
}

//Funcion para buscar productos por nombre. Esta funcion es diferente a buscar por id ya que pueden haber varios productos con el mismo nombre.
function findByName(n) {
    var products = [];
    for (let i = 0; i < arrayProducts.length; i++) {
        if (arrayProducts[i].name == n) products.push(arrayProducts[i]);
    }
    return products;
}

//Funciones que ordenan de mayor a menor precio y viceversa.Cada funcion retorna la lista ordenada;
function sortHighest() {
    return arrayProducts.sort(function (a, b) { return b.price - a.price });
}
function sortLowest() {
    return arrayProducts.sort(function (a, b) { return a.price - b.price });
}

//Creamos arraylist de productos
//Creo la lista con algunos productos por si no se quiere ingresar manual y facilitar la correcion.
let arrayProducts = [
    new Product("AirPods", "Airpods for iphone mobiles.", 400),
    new Product("Airforce Nike", "Nike shoes airforce, ultimate version", 800),
    new Product("Keyboard RGB", "Mechanical keyboard rgb for gamers", 500),
    new Product("Microphone", "Ambient microphone", 200),
    new Product("PC gamer", "Pc gamer w/ i5-33300 & Nvidia geforce 1650ti", 1200),
    new Product("Nissan", "leather car nissan", 5000),
    new Product("Microphone", "Ambient microphone v2", 500),
    new Product("Nissan", "leather car nissan v2", 8000)
];
//Flag que solo es false cuando se quiere salir del bucle.
let process = true;
//Menu para printear
const menu = "1-Create a product for append to the product list.\n2-Show the products list.\n3-Find a product by ID\n4-Filter products.\n5-Buy a product.\n6-Find products by name\n0-Exit.";

//Ciclo while que solo se rompe cuando se ingresa "0" (EXIT).
while (process) {
    var op = parseInt(prompt(menu));
    //Opciones del menu
    switch (op) {
        case 1:
            var nameProduct = prompt("Enter the product name.");
            var descProduct = prompt("Enter the description, something about the product.");
            var priceProduct = parseFloat(prompt("Insert the product price."));
            arrayProducts.push(createProduct(nameProduct, descProduct, priceProduct));
            break;
        case 2:
            showProducts();
            break;
        case 3:
            var findId = parseInt(prompt("Enter the product ID."));
            console.log(findById(findId));
            break;
        case 4:
            var opFilter = parseInt(prompt("1.  Order from highest to lowest price.\n\
                                            2.  Order from lowest to highest price."));
            if (opFilter == 1) {
                console.log(sortHighest());
            }
            else if (opFilter == 2) {
                console.log(sortLowest());
            } else {
                alert("Please enter ('1' or '2')");
            }
            break;
        case 5:
            var buyForId = parseInt(prompt("Enter the product id for buy."));
            if (arrayProducts.includes(findById(buyForId))) {
                alert("The product price with IVA is " + findById(buyForId).calculateIva());
                var confirmBuy = prompt("Are you sure?\n Enter ('YES' or 'NO').").toUpperCase();
                if (confirmBuy == "YES") console.log(buyProductById(buyForId));
                else if (confirmBuy == "NO") console.log("Thanks anyway.Come back soon");
            }else{
                console.log("Product id not found. Try again.")
            }
            break;
        case 6:
            var findName = prompt("Enter the product name for search.");
            console.log(findByName(findName));
            break;
        case 0:
            process = false;
            break;
    }
}