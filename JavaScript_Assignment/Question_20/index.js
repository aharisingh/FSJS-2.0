const shoppingCart = ["Milk","Coffee","Tea","Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);

const id = shoppingCart.indexOf("Honey");
if(id > -1){
    shoppingCart.splice(id,1);
}
console.log(shoppingCart);
const id1 = shoppingCart.indexOf("Tea");
shoppingCart[id1] = "Green Tea";
console.log(shoppingCart);
