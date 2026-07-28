/**
 * @Rule 
 * 
 * Outer Loop: rows 
 * Inner Loop: Column
 * 
 * 
 * The outer loop controls rows.
The inner loop completes all its iterations before the outer loop moves to the next row.
 * 
 * To build a logic you must fill the table
 * 
 * Row              Spaces                  Stars
 * 1                    ?                       ?
 * 2                    ?                       ?
 * 3                    ?                       ?
 * 4                    ?                       ?
 * 5                    ?                       ?
 */


/**Print a 5 * 5 box 

* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 


class Solution{
    printFiveFive(){
        for ( let i = 0 ; i < 5 ; i++){
            let rows = "";
            for ( let j = 0 ; j < 5 ; j++){
                rows += "* "
            }
            console.log(rows)
        }
    }
};
const u1 = new Solution();
u1.printFiveFive()


 */






/** Q - 2 Increasing Triangle
* 
* * 
* * * 
* * * * 
* * * * * 


class Solution{
    printInc(){
        for ( let i = 1; i<= 5 ; i++){
            let rows = "";
            for ( let j = 1 ; j <= i ; j++){
                rows += "* ";
            }
            console.log(rows)
        }
    }
};
const u1 = new Solution();
u1.printInc()

 */


  
/** Q - 3 print increasing triangle with Increasing numbers
1
12
123
1234
12345

Here it the solution 


class Solution{
    printNum(){
        for( let i = 1; i <= 5 ; i++){
            let rows = "";
            for ( let j = 1 ; j <= i; j++){
                rows += j
            }
            console.log(rows)
        }
    }
};
const u1 = new Solution();
u1.printNum()


 */


/**  Q - 4  Printing increasing triangle with same numbers 
1
22
333
4444
55555


class Solution{
    printNum(){
        for( let i = 1 ; i <= 5; i++ ){
            let rows = "";
            for( let j = 1 ; j <= i ; j++){
                rows += i;
            }
            console.log(rows)
        }
    }
};

const u1 = new Solution();
u1.printNum();


 */






/** Q- 5  Inverted Triangle 
* * * * *
* * * *
* * *
* *
*


let n = 5
class Solution{
    printDesc(){
        for ( let i = 0 ; i < n; i++){
            let rows = "";
            for ( let j = 0 ; j < (n - i ); j++){       
                rows += "* ";
            }
            console.log(rows);
        }
    }
};

const u1 = new Solution();
u1.printDesc()

 */
