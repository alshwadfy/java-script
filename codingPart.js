//q1

let number = "123";
number = parseInt(number)
number = number +7
console.log(number)


//q2

function checkFalsy (variable){
    if(variable ==false){
        return "invalid"
    }
    else return "valid"
}
console.log(checkFalsy(0));

//q3

for(let i=1 ;i<11;i++){
if(i %2 ==0) continue
console.log(i)

}

//q4 


let array = [1,2,3,4,5]
array =array.filter((value)=>{if(value%2==0) return value})
console.log(array)

//q5
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 =[...array1,...array2]
console.log(array3);


//q6

let switchCase = 1
switch (switchCase) {
    case 1:
        console.log ("saturday")
        break;
        
    case 2:
        console.log ("sunday")
        break;
    case 3:
        console.log ("monday")
        break;
    case 4:
        console.log ("tuesday")
        break;
        
    case 5:
        console.log ("wedsnday")
        break;
    case 6:
        console.log ("thursday")
        break;
    case 7:
        console.log ("friday")
        break;
        

    default:
        break;
}



//q7
let arrayOfString =["a","ab","abc"]
    arrayOfString.map((value)=>{
    console.log(value.length)
})


//q8
let number2 = 15
function checkDiv(number2){
    
    return number2%5==0?number2%3==0? "Divisible by both" :"false":"false"

}
console.log(checkDiv(number2))


//q9

const squareOfNumber =((x)=>{
return x*x;

})
console.log(squareOfNumber(5))


const person = {name: 'John', age: 25}
//q10
function destructure(person){
return `${person.name} is ${person.age} old`


}


//q11
function multipleParameters(...num1) {
    let sum = 0;
    for (let num of num1) {
      sum += Number(num);
    }
    return sum;
  }
  
  console.log(multipleParameters(1, 2, 3, 4, 5)); // Output: 15
  
  

  //q12

  function promiseFuntion(){
    
    return new Promise((res,rej)=>{
        setTimeout(
            ()=>{
                res("success"),3000})      
    })    
  }


  promiseFuntion().then((message)=>{
    console.log(message)
  })


let array4 =[1,3,7,2,4]
  //q13
  function biggestInArray(x){
    return Math.max(...x)
  }
  console.log(biggestInArray(array4))



  // q14

  function valueReturn(person){
    return Object.keys(person)

  }
  console.log(valueReturn(person));
  
  //q15
  function splitString(x){
    const arr = String(x).split(" ")
    return arr

  }
  console.log(splitString("the quick brown fox"));






  //essay 
  /* 
  1- for each : moves on every element to do some operation 

    for of: moves on every element can be stopped in the middle of it 


  2- Hoisting : calling a funtion or a variable before its declared returns undefined(var)
    
    TDZ: here return an error (refrence error) start from the false declare to the variable initilaize (let)
  
  
  3- == :compares only the value 
     ===: compares value and the data Type  of it 



   4- 
   try executes a block of code that might throw an error if it throwed an error the catch takes the error handels it to give a safe feedback 
   in async a function that needs time it has high potential to throw an error thats why we need to use it 


   5- data Coercion  tries to match one data type to another to do the operation needed like let res = "4"+4 it changes it to String
    data conversion is parsing the data into another


  */