// Simple Explanation (Primitive vs Non-Primitive in JavaScript)
// Primitive = Small and light (like a simple box with one thing inside)
// Non-Primitive = Heavy and big (like a big suitcase with many things + extra packaging)

// 1. What are they?


// TypeExamplesMemory UsageSimple AnalogyPrimitivenumber, string, booleanVery LowA small paper noteNon-PrimitiveObject, Array, {}HighA big folder with files

// 2. Real Memory Example (Easy Numbers)
// Imagine you have 1 million records:






// StructureApprox. Memory UsedHow Much Heavier?Array of numbers (primitive)~8–16 MBLightArray of objects {id: 1, score: 100}80–200+ MB5–10x heavier
// Why?

// Each primitive number just stores the number → very small.
// Each object has extra "packaging" (called overhead):
// Hidden class
// Pointers
// Memory management info


// This extra packaging takes 30–80 bytes per object even if the actual data is small.

// 3. Why does this matter in Large-Scale Apps?
// In big applications (like Netflix, Facebook, or your backend), you often deal with millions or billions of data items.
// Problems caused by too many objects:

// Uses much more RAM → higher server cost
// Slower performance
// More Garbage Collection (GC pauses) → app becomes slow or freezes
// Harder to scale


// 4. Simple Tips (What you should do)
// Bad (Heavy):
// JavaScriptconst users = [
//   { id: 1, name: "Abhi", score: 95 },
//   { id: 2, name: "Rahul", score: 87 }
//   // ... 1 million times
// ];
// Better (Light):
// JavaScriptconst ids = [1, 2, 3, ...];           // primitive numbers
// const scores = [95, 87, 92, ...];     // primitive numbers
// // or even better:
// const scores = new Float64Array(1000000);
// Best for heavy data: Use TypedArray (Int32Array, Float64Array, etc.)

// Would you like me to explain any specific part more simply?

// What is Primitive?
// What is Object overhead?
// Real example with code?
// Or something else?

// Just tell me which part is confusing. I'll explain even simpler. 😊Array of numbers (primitive)~8–16 MBLightArray of objects {id: 1, score: 100}80–200+ MB5–10x heaviergive me the example of both✅ Here are clear examples of both:
// 1. Array of Primitives (Numbers) - Light Version
// JavaScript// Array of 1 million primitive numbers
// const numbers = new Array(1000000);

// for (let i = 0; i < 1000000; i++) {
//     numbers[i] = i;           // ← Primitive number
// }

// console.log("Array of 1M numbers created");
// Memory Usage: ≈ 7.6 MB to 16 MB

// 2. Array of Objects - Heavy Version
// JavaScript// Array of 1 million objects
// const objects = new Array(1000000);

// for (let i = 0; i < 1000000; i++) {
//     objects[i] = { 
//         id: i,                    // number
//         score: Math.random() * 100  // number
//     };   // ← Object (Non-primitive)
// }

// console.log("Array of 1M objects created");
// Memory Usage: ≈ 64 MB to 200+ MB

// Real Test with Memory Measurement (Node.js)
// Here's a complete code you can run to see the difference yourself:
// JavaScriptfunction getMemory() {
//     const used = process.memoryUsage().heapUsed / 1024 / 1024;
//     return used.toFixed(2) + " MB";
// }

// // ---------- Light Version ----------
// console.log("Before numbers:", getMemory());

// const numbers = [];
// for (let i = 0; i < 1000000; i++) {
//     numbers.push(i);           // Primitive
// }

// console.log("After 1M numbers:", getMemory());

// // ---------- Heavy Version ----------
// console.log("\nBefore objects:", getMemory());

// const objects = [];
// for (let i = 0; i < 1000000; i++) {
//     objects.push({ id: i, score: i * 0.5 });   // Object
// }

// console.log("After 1M objects:", getMemory());
// Typical Output:

// Array of numbers → ~8 MB
// Array of objects → ~65 MB (often 8x more memory)


// Why the big difference?

// Primitive number: Just stores the number (very small).
// Object: Stores extra things for every single object:
// Hidden Class (Map)
// Property pointers
// Memory management data


// Would you like me to also show the best version using TypedArray (even more memory efficient)?i understand but want to know how to use typedArray and whis is Object overhead✅ Great! Let me explain both things simply and clearly.

// 1. What is Object Overhead?
// Object Overhead = Extra memory that JavaScript adds to every object you create.
// Even if your object is very small, JavaScript still adds a lot of "packaging" around it.
// Simple Breakdown of Object Overhead:




// PartSize (approx)What is it?Hidden Class (Map)8–16 bytesInternal structure of the objectProperties Pointer8 bytesWhere your data is storedElements Pointer8 bytesFor arrays inside objectMemory Management Info8–16 bytesFor Garbage CollectorTotal Overhead~40–80+ bytesEven before your actual data
// Example:

// You create { id: 1, score: 95 }
// Your actual data = only ~16 bytes
// But total memory used = 60–100 bytes

// This is why 1 million objects use much more memory than 1 million numbers.

// 2. How to Use TypedArray (Best for Memory)
// TypedArray is a special type of array that stores only one type of data (numbers) with very low overhead.
// Common TypedArrays:

























// TypedArrayStoresBest ForInt32ArrayIntegers (-2B to +2B)IDs, countsFloat64ArrayDecimal numbersScores, prices, coordinatesUint8ArraySmall numbers (0-255)Images, binary data

// ✅ Practical Examples
// Example 1: Using Float64Array (Recommended)
// JavaScript// Best way - Very memory efficient
// const length = 1000000;

// // Create TypedArray
// const scores = new Float64Array(length);     // Only numbers
// const ids = new Int32Array(length);

// // Fill the data
// for (let i = 0; i < length; i++) {
//     ids[i] = i;
//     scores[i] = Math.random() * 100;
// }

// console.log("Memory efficient version created");
// Example 2: Full Comparison Code
// JavaScriptfunction getMemory() {
//     return (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB";
// }

// // 1. Normal Objects (Heavy)
// console.log("Before Objects:", getMemory());
// const objects = [];
// for (let i = 0; i < 500000; i++) {
//     objects.push({ id: i, score: i * 1.5 });
// }
// console.log("After Objects:", getMemory());

// // 2. TypedArrays (Very Light)
// console.log("\nBefore TypedArrays:", getMemory());
// const ids = new Int32Array(500000);
// const scores = new Float64Array(500000);

// for (let i = 0; i < 500000; i++) {
//     ids[i] = i;
//     scores[i] = i * 1.5;
// }
// console.log("After TypedArrays:", getMemory());
// Expected Result:

// Objects version: ~40–60 MB
// TypedArray version: ~8–12 MB (much better!)


// When to Use TypedArray?
// Use it when:

// You have large amounts of numbers
// Building data processing apps
// Working with charts, ML, games, or analytics
// You want to save memory and improve speed

// Not good for:

// When you need mixed data types (string + number)
// When you need to add/remove properties dynamically