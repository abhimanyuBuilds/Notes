
fork in Node.js is a method from the ("child_process") module that creates a new "child_process" . it is mainly used to execute the 
cpu-intensive task in a seprate process so that the main event loop remains free to handle other request..
Benifits of creating a fork is 
Each process has it own memory 
its own event loop 
its own v8 engine 
its own variable 


fork() is not about avoiding async/await.

async/await helps manage asynchronous I/O operations like database queries, file reading, or API requests.
fork() is used for CPU-bound tasks that would otherwise block the event loop.

Examples:

Image processing
Video encoding
Large calculations
Data compression
PDF generation



fork is specialize to design to create a child process that help to communicate with parent process with build in IPC ( inter process communication) The parent and child exchange  the message using 
parent 
child 
received 

.on is a EventEmmitter method 
it register an event listener


Rule to know 
always use same "message" as in parent it create an event that's y 
Both the parent and child must listen for the "message" event because Node.js emits a built-in "message" event whenever data is sent over the IPC channel.

