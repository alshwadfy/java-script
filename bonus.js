/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentCount = init;
    return {
increment:()    =>  {
    return ++currentCount
},

reset:()=>{
    return currentCount= init
},
        

decrement: ()=>{
    return --currentCount}

}
};


 