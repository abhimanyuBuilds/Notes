// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler



// Count digits in a number
// class Solution{
//     printM(n){
//         let count = 0;
//         while(n > 0){
//             const result = n % 10
//             console.log(n)
//             n = Math.floor(n / 10);
//             // console.log(n)
//             count++
//         }
//         console.log(count)
//     }
// };

// const u1 = new Solution()
// u1.printM(121232312)

// sum of digit 

// class Solution{
//     printM(n){
//         let sum = 0;
//         while(n > 0 ){
//             let result = n % 10 ;
//             n = Math.floor(n / 10)
//             sum += result
//         }
//         console.log(sum)
//     }
// };
// const u1 = new Solution()
// u1.printM(12345)

//Product of digits



// class Solution{
//     printM(n){
//         let product = 1;
//         while(n > 0){
//             let result = n % 10;
//             n = Math.floor(n / 10)
//             product*= result
//         }
//         console.log(product)
//     }
// };

// const u1 = new Solution()
// u1.printM(12345)

// Reverse a numbe

// class Solution{
//     printM(n){
//         let reverse = 0
//     while( n > 0 ){
//         let  result = n % 10;
//         n = Math.floor(n / 10)
//         reverse = reverse * 10 + result ;
//     }
//     console.log(reverse)
// }
// };

// const u1 = new Solution();
// u1.printM(838383)


//Check palindrome number



// class Solution{
//     printM(n){
//         let original = n 
//             let reverse = 0;
//         while(n > 0 ){
//             let result = n % 10;
//             n = Math.floor(n / 10);
//             reverse = reverse * 10 + result;
//         }
//          if(reverse === original){
//             console.log('yes it is ')
//         }else{
//             console.log("No its not")
//         }
// }
// };


// const u1 = new Solution()
// u1.printM(123321)




// find largest digit 

// class Solution {
//     FindLargest(n) {
//         let largest = 0;
//         while (n > 0) {
//             let result = n % 10;
//             n = Math.floor(n / 10);


//             if (result > largest) {
//                 largest = result
//             }
//         }
//         console.log(largest)

//     }
// };


// const u1 = new Solution()
// u1.FindLargest(123456)





//Find smallest digit

// class Solution{
//     FindMin(n){
//         let minimumDig = 10;
//         while( n > 0){
//             let result = n % 10;
//             n = Math.floor(n / 10);
//             if(minimumDig > result){
//                 minimumDig = result                
//             }
//         }
//         console.log(minimumDig)
//     }
// };
// const u1 = new Solution();
// u1.FindMin(121313)


//Count occurrences of a digit

// class Solution{
//     findOccurence(n , target){
//         let occurrence = 0 ;
//         while( n > 0){
//             let digit = n % 10 ;
//             n = Math.floor( n / 10);
//             if(digit === target){
//                 occurrence++
//             }
//         }
//         console.log(occurrence)
//     }
// };

// const u1 = new Solution();
// u1.findOccurence(1212322321233432234 , 4)





//Count even/odd digits

// class Solution{
//     printM(n){
//         let odd = 0 
//         let even = 0
//         while( n > 0 ){
//             let digit = n % 10 ;
//             n = Math.floor(n / 10);
//             if(digit % 2 === 0){
//                 even++
//             }else{
//                 odd++
//             }
//         }
//         console.log("ODD",odd)
//         console.log("Even" , even)
//     }
// };
// const u1 = new Solution()
// u1.printM(1234334556557)