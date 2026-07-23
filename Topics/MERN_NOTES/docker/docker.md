Problem Before Docker
Imagine you're building an Node.js Application
your laptop has 

Node.js v 23 
mongoDB v8
redis 
Ubuntu

and your friend laptop contain 

Node.js v20
mongoDB v6
redis 
Ubuntu 


and you're friend say it not working on my machine 

that's what the problem occur where --- DOCKER --- it comes in the picture to solve the problem of -->
"it's run on my machine"



Their are two solution 
1. Hypervisors 
2. Docker


Hypervisors : is nothing but a VM virtual machine which basically package all the host OS and then deploy the application . However it has Pron and cons both 

what is hypervisors ?

A Hypervisors is a software that allows multiple operating system to run on a single physical machine 

first pron : 
You can have multiple instances of your OS which like if you want WindowOS , or wants Ubuntu , or Mac OS 

--- A VM contains 
OS 
libraries 
Application 
Dependencies


Example :



Physical Machine
        |
    Hypervisor
       / \
      /   \
   VM1    VM2
 Ubuntu  Windows
 Node    Python

Example 
Suppose you have a machine of 16 GB RAM and 8 CPU



then it convert it into 

two or three as your need 

Hypervisors create 
VM1:
- Ubuntu
- 4GB RAM

VM2:
- Windows
- 4GB RAM

VM3:
- CentOS
- 4GB RAM


Now one physical machine act like multiple computers 

Problem with VMs 
VMs are heavy
then Developer said why i need a complete os just to run the app 


then the docker arrive 

Don't package the whole computer .. just package the only application

Docker Architecture

Host OS
   |
Docker Engine
   |
-----------------
|       |       |
C1      C2      C3
Node    Redis   Mongo



why docker 
1. Docker solve the problem of works on my machine
2. Heavy VMs however LightWeight Containers..

Problem 3

Deploying applications.

Instead of:

Install Node
Install Mongo
Install Redis
Install Dependencies

You do:

docker pull my-app
docker run my-app

Done.






Q-1 what is containers in docker?
Solution :  In docker container is nothing but an isolated environment that contain an application and all 
its dependencies.



