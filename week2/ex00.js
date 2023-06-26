/*
var a1 = true && true;
var a2 = true && false;
var a3 = false && true; 
var a4 = false && false;   
var b1 = false && (3 == 4); 
var b2 = 'Cat' && 'Dog';
var b3 = false && 'Cat';
var b4 = 'Cat' && false;
var b5 = "" && 'Cat'    //"" -> false로 반환

console.log(a1,a2,a3,a4,b1,b2,b3,b4,b5);

var a1 = true || true;
var a2 = true || false;
var a3 = false || true; 
var a4 = false || false;   
var b1 = false || (3 == 4); 
var b2 = 'Cat' || 'Dog';
var b3 = false || 'Cat';
var b4 = 'Cat' || false;
var b5 = null ?? 'Cat'    //"" -> false로 반환

console.log(a1,a2,a3,a4,b1,b2,b3,b4,b5);


var n1 = !true;  
var n2 = !false; 
var n3 = !'Cat'; 
var n4 = !"";   
var n5 = !null;
var n6 = !0;
var n7 = !NaN;
var n8 = !undefined;
console.log(n1,n2,n3, n4, n5, n6, n7, n8)

//조건 ? 값1 : 값2
var age=19
var condition = age >= 20 ? '성인' : '미성년자';

console.log(condition);

let array = ['a',100,{test:'test'}]

for(let index = 0; index<array.length; index++){
    console.log(`array[${index}]`, array[index])
    console.log(typeof(array[index]))
    
}
console.log(Array.isArray(array))

let array_LO = {
    0:'a',
    1: 100,
    2:{test:'test'},
    length : 3
}

for(var index = 0; index < array_LO.length; index++){
    console.log(`array_LO[${index}] ` + array_LO[index])
    console.log(typeof(array_LO[index]))
}

console.log(Array.isArray(array_LO))
console.log(array_LO[2].test)

let testFunction = function(){
    console.log(this)
}

let obj = {
    testFunction: testFunction
}

obj.testFunction()
testFunction()*/


const month = {Month : 5};
let day = 17;
const timeWarp = (newMonth, newDay) => {
    month.Month = randomInt(1,12);
    if(month.Month == 1,3,5,7,8,10,12){
        day = randomInt(1, 31)
    }
    else if(month.Month ==2){
        day = randomInt(1, 28)
    }
    else{
        day = randomInt(1, 30)
    }
    console.log(`${month.Month}월 ${day}일`);
}
function randomInt(min, max){
    var randomNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randomNum;
}
timeWarp(5,17);