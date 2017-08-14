var faker = require('faker');

console.log("########################")
console.log("##Welcome to my shop!###")
console.log("########################")

for (var i = 0; i < 10; i++) {
    var productName = faker.commerce.productName();
    var productPrice = faker.commerce.price();
    var adjective = faker.company.bsAdjective();
    console.log((i+1)+": " + productName + " ($" + productPrice +"), it's " + adjective + "!")
}