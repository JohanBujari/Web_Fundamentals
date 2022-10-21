function pizzaOven(crustType, sauceType, chesses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.chesses = chesses;
    pizza.toppings = toppings;

    return pizza;

}


var pizza1 = pizzaOven("deep dish", "traditonal", ["mozarella"], ["peperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);


