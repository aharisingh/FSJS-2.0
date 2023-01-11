const obj = {
    rocket: 'rocket1',
    home: 'home1'
}
// for(k in obj){
//     console.log(k + " : "+ obj[k]);
// }
//console.log(obj);

// string, number, bigint, boolean, null, undefine, symbol

const obj1 = {
    rocket: 'rocket',
    fuel: 5,
    config: {
        name: 'jupiter'
    }
};
const objj2 = obj1;
// console.log(obj1 === objj2);
//console.log(obj1);
Object.freeze(obj1);//locks the attribute of the OBject
obj1.fuel = 200;
obj1['year'] = 2000;
 //console.log(obj1);


// part 2

const obj2 = new Object(); //constructor
//console.log(obj2);
obj2.redapple = '🍎'
obj2.bluebook = '📘'
 //console.log(obj2);

// part 3
const powers = {
    fly: true,
    cordinate: Math.random() + 2
}

const obj3 = Object.create(powers)
obj3.weight  = 45;
obj3.height = 5;
//for in loops thorough own property as well as proptype property .
// for(let k in obj3){
//     //just print the object own property
//     if(obj3.hasOwnProperty(k)){
//     console.log(k);
//     }
// }

//Object.keys only loops through object own key
const keys = Object.keys(obj3);
// console.log(keys);
// keys.forEach((k) =>{
//     console.log(k + " : " + obj3[k]);
// })
//  console.log(obj3);
//  console.log(obj3.fly);
//  console.log(obj3.cordinate);
// console.log(obj3.cordinate);
//  console.log(Object.getPrototypeOf(obj3));



//part 4
const obj4 = Object.create({})
Object.defineProperty(obj4,"name",{
    set : () => "Rohan Kashyap",
    get : () => "Harivansh",
    //to loop through this object , it should have enumerable property as true
    enumerable : true
});
 //console.log(obj4.name);
// console.log(obj4.hasOwnProperty("name"));
// console.log(obj4);

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

// for(k in obj4){
//     console.log("key is: ", k + " and value is " + obj4[k]);
// }

//part 5
const obj5 = {
    comics : 'DC',
    pencil: '',
    printComic: function(){
        this.pencil += 'qwertyuiop'
        console.log(this);
        return this;
    },
    printaComic: () => {
        // this.pen += '🖊️🗒️'
        console.log(this);
        return this;
    },
    
}
//console.log(obj5);
console.log(obj5.printaComic());
//console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());