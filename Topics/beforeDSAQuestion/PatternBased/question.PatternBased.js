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



/** Print Inverted 1 2 3 4 5 
 * 1 2 3 4 5 
 * 1 2 3 4 
 * 1 2 3 
 * 1 2 
 * 1






class Solution{
    printMethod(){
        for(let i = 0 ; i < 5 ; i++){
            let rows = "";
            for( let j = 1 ; j <= ( 5 - i) ; j++){
                rows += j
            }
            console.log(rows)
        }
    }
};
const u1 = new Solution();
u1.printMethod()

 */


/** Star pyramid 
     *     
    ***    
   *****   
  *******  
 ********* 
***********

Logic :


rows
Space    ( N - i - 1 ) 
star     ( 2 * N + 1 ) ---   2 * that's why because we expecting star by moving in ODD 1 , 3 , 5 , 7 , 9 
space    ( N - i - 1 )



     *
    ***
   *****
  *******
 *********
***********







let N = 6
class Solution{
    printPyramid(){
        for (let i = 0 ; i < N ; i++){
            let rows = "";
            for(let j = 0 ; j < ( N - i - 1); j++){
                rows += " ";
            };
            for(let j = 0 ; j < (2 * i + 1); j++){
                rows += "*"
            }
            for( let j = 0 ; j < (N - i - 1); j++){
                rows += " "
            }
            console.log(rows)
        }
    }
};

const u1 = new Solution();
u1.printPyramid()




 */




/** Inverted Pyramid 



 *********
  *******
   *****
    ***
     *



let n = 5;

class Solution {
    printMethod() {
        for (let i = 0; i < n; i++) {
            let rows = ""
            for (let j = 0; j < i; j++) {
                rows += " "
            }
            for (let j = 0; j < 2 * n - (2 * i + 1); j++ ){
                rows += "*";
            }
            for( let j = 0 ; j < i ; j++){
                rows += " "
            }
            console.log(rows)
        }
    }
};

const u1 = new Solution();

u1.printMethod()

 */

/**Q-9  Diamind Star pattern
 

    *    
   ***   
  *****  
 ******* 
*********
*********
 *******
  *****
   ***
    * 



   
let N = 5

class Solution {
    increaseMethod() {
        for (let i = 0; i < N; i++) {
            let rows = "";
            for (let j = 0; j < (N - i - 1); j++) {
                rows += " "
            }
            for (let j = 0; j < (2 * i + 1); j++) {
                rows += "*"
            }
            for (let j = 0; j < (N - i - 1); j++) {
                rows += " "
            }
            console.log(rows);
        }
    }
    EnvertedMethof(){
        for( let i = 0 ; i < N ; i++){
            let rows = "";
            for( let j = 0 ; j < i ; j++){
                rows += " "
            }
            for( let j = 0 ; j < 2 * N - (2 * i + 1 ); j++){
                rows += "*"
            }
            for( let j = 0; j < i ; j++ ){
                rows += " "
            }
            console.log(rows)
        }
    }
};

const u1 = new Solution();
u1.increaseMethod()
u1.EnvertedMethof()
   

 */




/**Q-10 Half Diamond Star Pattern

*
**
***
****
*****
****
***
**
*

let N = 5
class Solution{
    printIncreseTri(){
        for( let i = 0 ; i < N; i++){
            let rows = "";
            for( let j = 0 ; j < i ; j++){
                rows += "*"
            }
            console.log(rows)
        }
    }
    printDecTri(){
        for(let i = 0 ; i < N ; i++){
            let rows = ""
            for(let j = 0 ; j < ( N - i) ; j++){
                rows += '*'
            }
            console.log(rows)
        }
    }
}
const u1 = new Solution();
u1.printIncreseTri()
u1.printDecTri()


 */


/**Binary number triangle pattern 


1
01
101
0101
10101



let n = 5

class Solution{
   printPat(){
    for( let i = 0 ; i < n ; i++){
        let row  = "";
        for( let j = 0 ; j <= i ; j++ ){
            if(( i + j ) % 2 === 0){
                row += '1'
            } else{
                row += '0'
            }
        }
        console.log(row)
    }
   }
   }
const u1 = new Solution();
u1.printPat();
 */




/** Q- 12 Number crown pattern 
-- Their are 8 Spaces

1      1
12    21
123  321
12344321



let n = 5
class Solution {
    printMethod() {
        for (let i = 0; i < n; i++) {
            let rows = "";
            for (let j = 1; j <= i; j++) {
                rows += j
            }
            for(let j = 0 ; j < 2 * (n - i - 1); j++){
                rows += " "
            }
        for (let j = i; j >= 1; j--) {
            rows += j
        }
        
        console.log(rows)
    }
}
};
const u1 = new Solution();
u1.printMethod();


 */

/**Q - 13 Increasing Number triangle pattern 

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15


let n = 5
class Solution{
    printMethod(){
        let num = 1 ;
        for(let i = 1 ; i <= n ; i++){
            let rows = "";
            for( let j = 1; j <= i; j++){
                rows += num + " ";
                num++
            }
            console.log(rows)
        }
    }
};
const u1 = new Solution();
u1.printMethod()

 */

