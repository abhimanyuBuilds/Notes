// *** FOR LOOP ***


// for(initialization , condition , update){
// }

/*
{initialization} => i Runs only one time at the begning i = 0
{condition} => checked before every iterations i < 5
{update} => Runs after every iteration i++ usually increment / decrement 

{Flow of for loop} 


iteration 
    |
condition check
    |
code executes
    |
Update
    |
check condition again


*/

// for(let i = 0 ; i <= 10 ; i++){
//     console.log("Table of:",i)
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(`${i} * ${j} = `+ i*j )
//     }    
// }




// for(var i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1000);
// }
// var → one shared variable → all timeouts see final value (3)
// let → new variable per iteration → each timeout sees its own value

// explanation 

// 1< 3 true
// 2< 3 true
// 3< 3 false
// at this moment loop stop 
// After 1 Second 
// All delayed function execute 
// but they do  
// console.log(i)
// current value of i is 