<!-- INTERVIEW QUESTION -->



1 . What is middleware in Express?

Middleware in Express.js is a function that runs after a client sends a request and before the response is sent. It can modify the request or response, perform tasks like validation or logging, and either send a response or pass control to the next middleware using next().


2 . what is Node.js and why is it single threaded ?

Node.js is a run time env that help to java Script run code outside the browser typically on server
commonly used for
web services (APIs,backend system)
Real-time app (Gaming)

why is it single threaded

Node.js used a single main thread to execute javaScript code .But that doesnot mean it is slow or limited
here is why

No more thread complexicity
Event driven , Non blocking Architecture
use Event loop


console.log("Start");

setTimeout(() => {
  console.log("Timeout done");
}, 2000);

console.log("End");

 //output
Start
End
Timeout done


use background thread internally

even though

js is single thread for your code
but for internally js is multi-threaded under the hood by using libuv


Node internally use multiple thread via libuv

what is libuv  ?


libuv is a C library used by Node.js


Handle
file system operations
Network operations
Thread pool

When Single Thread is NOT Good

Node.js struggles with:

Heavy CPU tasks (e.g., image processing, encryption loops)

Because it can block the main thread.


3. What is the event loop in Node.js and how does it work?


Explain call stack, callback queue, microtasks vs macrotasks.

call stack in js help to run code line by line and one task at time.


callback Queue( Macrostack queue)

call back queue is run after the micro stack queue and it has low priority then Micro Stack (task waiting for their task)

Example it can be used

. SetTimeout()
. setInterval()
. I/O Operations

(Microstack Queue)

Microstack queue have a highest priority after call stack and it run before macrostack . when the stack empty...

Example use case -:

Promise.then()


Difference between process.nexTick() , setImmediate() , setTimeout()

IN JS Process.nextTick() is execute immediate after the stack is free  before the event loop continue

process.nextTick(()=>{
	console.log('Hi IM nextTick ill print immediate')
});

Highest priority queue in the node.js is process.nextTick()

example :---

console.log(1)

process.nextTick(()=>{
	console.log('2 Hi IM process.nextTick')
});

console.log(3)

// output

1
3
2 Hi IM process.nextTick


setTimeout()

is a timer phase of the event loop
execute after the given delay

setImmediate()

will run after the microstack and setImmediate is totally depend upon timmer of setTimeout basically it run after the setTImeout or sometime before also totally depend upon setTimeout

code example

console.log(1)

process.nextTick(()=>{
	console.log("2 Hi IM Proces . nextTick() MicroStack Queue")
})




function promise(){
return new Promise(()=>{
	resolve('3 Hi Im Promise a MicroStack Queue' )
})
}

promise()
.then((data)=> (console.log(data))




setTimeout(()=>{
	console.log('4Hi we are setTimeout')
},3000)


setImmediate(()=>{
	console.log('5 Hi Im SETIMMEDIATE')
})


console.log(6)


// confusiion is when we put 0 in setTimeout then  the flow will be
1
6
2 Hi I M Process nextTick()
4 Hi IM MICROSTACK QUEUE
5 Hi IM setImmediate()
3 Hi IM SetTimeout MACROSTACK QUEUE

so why setImmediate comes before Timeout

// Output

Step-1

first Synchronous code will run
call stack run immediately
// output
1
6


Now Microstack will run (Microstack has a higher priority as compare to macrostack) thats y

Microstack has :-

promise
process.nextTick()

//output

2 Hi I M Process nextTick()
4 Hi IM MICROSTACK QUEUE promise

Macrostack has :-
two important queue their

Timer =  setTimeout()
checkphase = setImmediate()

Simple analogy

Imagine a hospital:

set Timeout(0) = patient already waiting at counter
set Timeout(3000) = patient still at home (arrives later)
set Immediate() = doctor calling next patient after current round

So:

Early timer → may get treated first
Late timer → definitely comes after current cycle



what is Caching ?

caching is the technique of storing the frequent accessed data temporarily in a faster storage layer (like memory)
so that future request can be served more quickly without hitting the db or recomputing the result..

Caching is a technique where we store the frequent accessed data in a fast storage to reduce latency and database load

it improve performance and response time
it reduce database load and server processing

it can exit at multiple level (client side (html , CSS (browser cache))
server side (in-memory like Redis or Memcached)
CDN cache (like Cloudflare)

Where to cache

where frequently changed data , frequently read data

Don't cache

Sensitive data , high dynamic data

what is TTL(Time-To-Live)

TTL is the duration for which the cached data remain valid . after the TTL expire cache may be removed or refresh for the fresh data ...


why TTL is needed

cache may be server old data..
No control over data freshness


How cache expire
there are many ways to expire cache
TTL (Time-To-Live) Time Based expiration

Auto Delete After time
Example 60sec or 5min


2.Manual Invalidation

Manually delete the cache
DEL user:123

3. Lazy expiration

Lazy expiration means expired data is NOT removed immediately it remove when client access it

means if a person access the website and let say that cache time could be 5min and after that I'll expire then.
After that if a person goes back to that website again then after 5 min then it will be deleted because that the point of
lazy expiration

So lazy expire work on that flow where it stay after expire and sit on the cache memory
that's why lazy expire waste more memory because it free the memory only when it is access by the user

pro's
no extra CPU needed

what happen when cache is full then the eviction policies comes
LRU least Recently used
LFU Least Frequently used
FIFO (First in First out)

LRU (Least Recently Used data)
when we are exploring the webpage then the cache is stored in our local memory or RAM
so by default it can be delete but we use some method to clean up the memory
so we have LRU
so when we explore the web page and suppose we explore 3 thing like
put [A]  -> [A]
put [B] -> [A,B]
put [C] -> [A,B,C]

now access A from [A,B,C] so [B,C,A] so A become more recent
now insert D (Cache Full)
Remove B first
Add D -> [C,A,D]Upda

Ok so LRU remove least recently used data only when user access the the new one and then remove least recently used data
but why it never delete because -> It assumes recently used data is more likely to be used again.”
 
what is cache validation

Make sure Cache data delete or update when the original db changes**.**

suppose your cache is {name:"Abhi"}
but db update and now db is {name:"Rahul"}
but you're cache is after updating db is {name:"Abhi"} ❌ (STALE) the real core problem
then it also must be update or delete

to solve this we have 2 main strategies

write through cache (update cache + DB together)

DB -> updated
Cache -> updated

pros

No stale data
Always consistent



2. Cache Invalidation (Delete cache)

when data updates
delete cache
Next Request -> fetch fresh data




How will you secure your route

Ensuring that only Authorized person can access the routes

This is usually done in layers

Authentication
Authorization
Validation & security check


Authentication middleware

         Request
          |
       Auth Middleware
         |
	Valid Session\id
	|
	yes -> continue
	|
	No -> 401 Unauthorized


2. Session Based route security


function auth(req , res , next){
	if(!req.session.userid){
	return res.status(401).json({
	error: "Unauthorized"
})
}
}


app.get("/profile" , auth(req,res)=>{
	res.send("private profile")
}


what is connection pool
Connection pooling improves backend performance by reusing database connections instead of creating and destroying them repeatedly