/**
 * To build a logic you must fill the table
 * 
 * Row              Spaces                  Stars
 * 1                    ?                       ?
 * 2                    ?                       ?
 * 3                    ?                       ?
 * 4                    ?                       ?
 * 5                    ?                       ?
 */

/**
 * Print a triagnle 
 */
let n = 5



console.log('Printed 5 * 5 ')
class Question{
    printBox(){
        for ( let i = 0 ; i < 5 ; i++){
            let rows = "";
            for ( let j = 0 ; j < 5 ; j++){
                rows += "* "
            }
            console.log(rows)
        }
    }
}
const u1 = new Question()
u1.printBox()





console.log('Inverted triangle');
class Solution{
    printMethod(){
        for ( let i = 0 ; i <=n; i++){
            let rows = "";
            for ( let j = 0; j < (n - i) ; j++){
                rows += "* "
            }
            console.log(rows)
        }
    }
}
const u2 = new Solution();
u2.printMethod();




console.log('printTriangle')
class Question2{
    printTriangle(){
        for ( let i = 0 ; i <= 5; i++){
            let rows = "";
            for(let j = 0 ; j < i; j++){
                rows+= "* "
            }
            console.log(rows)
        }
    }
};

const u3 = new Question2();
u3.printTriangle();
