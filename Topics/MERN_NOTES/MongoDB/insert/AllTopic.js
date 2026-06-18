/* INSERT 
        There are two methods that we can insert methods
        db.<collection>.insertOne()
        if collection doesn't exit it will automaticaly create collection if you use insertOne
        insertOne()
        insertMany()
        if you use insertMany then you will insert multiple document at once and if you want to use it monogodb use insertMany() as an array 
        insertMany expect the array of documents and each document must be seprated by comma 
        db.<collectionName>.insertMany([{}])


===============================================================================================================================

        // Finding document in a mongoDB collection 
        find()
        db.<collection>.find()
        // TO find the specific document we have two methods 
        $eq { field: { $eq: <value> } }
        we can use the eq operator to find documents with a field and value
        {field: <value>}
        in()
        The $in operator allow us to select the document that have a field value equal to any of the value specified in the array 


        db.collection.find({
        field: {
        $in: [ <value> , <value>]
        }
        })


        db.collection.find({ state: "AZ"})
        will return if exists


===========================================================================================================================


    Finding the document by using comparission operators
    [ $gt $gte $lt $lte]


    we access sub-document by using dot Notation "field.nestedField"

    db.collectionName.find({"item.price" : { $gt: 88 }})
    same as $lt 
    $lte 
    $gte


==============================================================================================================

    Query on array element in MongoDB


    db.collection.find({products: "Investment"})


    we will use $eleMatch when we have array of object to find the document 

    db.collection.find({
    skills: {
    $eleMatch: {$eq: "InvestmentStock "}
    }
    });


    db.sales.find({
    items: { 
    $eleMatch: { name: "laptop" , price: { $gt: 88} , quantity: { $gte: 890}}
    }
    });

// Querying the document by using logical operators
    And  Operators Or Operators


    db.collection.find({
    $and: [{  "Airline" : " SouthWest Airline"} , {stops: { $gt: 1} }],
    });


    db.collection.find({ $or : [ { "JetAirWays" : "SEA" } , { "USA": { $gte: 88}}]})




    db.collection.find({ 
    $and:
     [
    { $or: 
      [{ 'dst' : 'yes} , {'jet': 'No'} ]} , 
    $or: [ {'keys': 'Yes having'} , { 'Helping' : "Handss"} ]}  
    ] , 
    }
    )


    ====================================================================

    Question 

Level 1 (insert & find)
Q1 - Find all employees.
    db.employees.find() ✅
Q2 - Find only Abhimanyu.✅
    db.employees.findOne({ name: "Abhimanyu" })

Q3 - Find employees living in Delhi.✅
    db.employees.find( {"address.state" : "Delhi" })

Q4 - Find employees whose department is Backend 

db.employees.find( { "department" : "Backend"})

Q5 - Find employees whose salary is 90000. ✅

db.employees.find({salary:{$eq : 90000 }})

Level 2 ($eq)
Q6 - Find employee whose name equals Rahul using $eq.✅

    db.employees.find( name: {$eq: "Rahul"} )

Q7 - Find employee whose department equals QA.✅

db.employees.find({ department: { $eq: "QA"}})



Level 3 ($in)
Q8 - Find employees from Delhi or Pune.

db.employees.find({ "city": { $in:[ "Pune" , "Delhi"] }})

Q-9 Find employees whose department is Backend or Frontend.

db.employees.find({ "department": { $in : [ "Backend" , "Frontend"] }})


Q - 10 Find employees whose age is either 24, 29, or 31.

db.employees.find({ age: {$in : [24 , 29 , 31 ] }})




Level 4 (Comparison Operators)
Q11- Find employees whose salary is greater than 90000.

    db.employees.find({ salary:{$gt: 90000 }})


Q12 - Find employees whose age is less than 28.

db.employees.find({ age: { $lt: 28}})


Q13 -Find employees whose salary is greater than or equal to 85000.

db.employees.find({salary: { $gte: 85000}})
    



Q14 - Find employees whose salary is less than or equal to 100000.

db.employees.find({ salary: { $lte: 100000}})

Q15 - Find employees whose age is between 25 and 30.
    db.employees.find({ age: {$gt : 25 , $lt: 30  }})

Q-16 - Find employees whose state is Delhi. 

db.employees.find({  "address.state": "Delhi"})



Q17 -Find employees whose pincode is greater than 120000.❌
 
db.employees.find({ { "address.pincode": { $gt:  120000 } }})

Q-18 Find employees whose state is Haryana.

db.employees.find({ "address.state": { $eq: "Haryana"}});



Level 6 (Arrays)
Q19 - Find employees working on CRM project.


db.employees.find({ projects: { $in: ['CRM']}})

Q20 - Find employees working on Banking project.


db.employees.find({projects: { $in : ['Banking']}})



Q21 - Find employees working on Automation project.

db.employees.find({ projects: { $in: [ 'Automation' ] }})



Level 7 ($elemMatch)
Q22 - Find employees having Node.js experience greater than 4 years.

db.employees.find({ "skills": { $elemMatch : { name: "Node.js" , experience: { $gt: 4}}}})


Find employees having MongoDB experience greater than 3 years.

db.employees.find({ "skills": { $elemMatch: { name : "MongoDB" , experience: { $gt: 3}}}})



Find employees having JavaScript experience greater than 4 years.

db.employees.find({ 'skills': { $elemMatch: { name: "JavaScript" , experience: { $gt: 4}}}})




Find employees having AWS experience greater than 2 years.

db.employees.find({"skills": { $elemMatch: { name: "AWS" , experience: { $gt :2}}}})

Find employees having Selenium experience greater than 2 years.

db.employees.find({ "skills": {$elemMatch: { name: "Selenium" , experience: { $gt: 2}}}})


Level 8 ($and)
Q27

Find Backend employees whose salary is greater than 80000.



db.employees.find({ $and : [
{"salary": { $gt: 80000  } },
{ "department": "Backend"}
 ]
})


Find employees from Delhi whose age is greater than 25.




db.employees.find({ $and : [ 
{ "city" : "Delhi"} ,
 { age:{$gt: 25} } 
  
 ]})



 Find active Backend employees.


 db.employees.find({$and: [
  {"active": {$eq: true}} , 
  {"department": "Backend"}
]
  })





  Find Backend employees whose state is Delhi.

  db.employees.find({ $and: [ { "department": "Backend"} , {"address.state":{$eq: "Delhi"}}] })



  Level 9 ($or)
Q31 - Find employees from Delhi or Gurgaon.


db.employees.find({ $or: [ 
{"city": "Gurgaon"} , 
{"address.city": {$eq: "Delhi" }}
]});

Find employees whose department is QA or salary is greater than 100000.

db.employees.find({ $or: [ 
{ "department": "QA"} ,
{"salary": {$gt: 100000}}
]
})



Find employees who are inactive or whose salary is greater than 100000.


db.employees.find({ $or:[  { "active": false} , {"salary": {$gt: 100000}}   ]})





Level 10 (Mixed Queries)
Q34 - Find employees whose department is Backend and city is Delhi.


db.employees.find({ $and: [  { "department": "Backend"} , {"city":{$eq: "Delhi"}}  ]})


Find employees whose salary is greater than 70000 and less than 100000.

 db.employees.find({ $and : [ 
 {"salary": {$gt: 70000 , $lt: 100000})
 


 Find employees from Delhi or whose salary is greater than 100000.


 db.employees.find({ $or: [ 
 
 {"city": {$eq: "Delhi"}} , 


 {"salary": { $gt: 100000}}


 ]
 
 })



 Find employees working on CRM and having Node.js experience greater than 5 years.


 db.employees.find({ 
 "projects":"CRM"} , 
 skills: { $elemMatch: { 
 name: "Node.js" , 
 experience: {$gt: 5
}
 }
 }
 ]})


 db.employees.find({ 
 project: "CRM" , 
 skills: { 
 $elemMatch: { 
 name: "Node.js", 
 experience: {
  $gt: 5
}
  
  }

 }})
 



 Q38 - Find employees who satisfy:

Department = Backend
Salary > 80000
Node.js experience > 4



db.employees.find({ $and: [ 
{"department": { $eq: "Backend"} } , 
{"salary": {$gt: 80000}} , 
{"skills.name" : { $eq: "Node.js"}} , 
{"skills.experience": {$gt: 4}}

]})



Q39 - Find employees who satisfy:

City is Delhi or Pune
Age > 25
Active = true

db.employees.find({ 
{"city":{$in: [ 'Delhi','Pune']}} , 
$and: {
"age":{$gt: 25}} , 
{"active":{$eq: true}}
})


Q40 (Interview Level)

Find employees who satisfy:

(Department = Backend OR QA)
Salary > 80000
State is Delhi or Haryana
Node.js experience greater than 2


db.employees.find({
    $and: [
        {
            $or: [
                { department: "Backend" },
                { department: "QA" }
            ]
        },
        {
            salary: { $gt: 80000 }
        },
        {
            $or: [
                { "address.state": "Delhi" },
                { "address.state": "Haryana" }
            ]
        },
        {
            skills: {
                $elemMatch: {
                    name: "Node.js",
                    experience: { $gt: 2 }
                }
            }
        }
    ]
})


*/




// Q6 – $eq

// Find the employee whose name equals "Rahul" using $eq.

// 🟡 Q17 – Dot Notation

// Find employees whose address pincode is greater than 120000.

// 🟡 Q31 – $or

// Find employees who live in Delhi OR Gurgaon.

// 🟡 Q33 – $or with Boolean

// Find employees who are:

// Inactive
// OR
// Have a salary greater than 100000
// 🟡 Q35 – Range Query

// Find employees whose salary is greater than 70000 and less than 100000.

// Bonus: Solve it in the shortest possible way (without using $and).

// 🟡 Q36 – $or

// Find employees who:

// Live in Delhi
// OR
// Have a salary greater than 100000

// Hint: Be careful with the field names.

// 🟡 Q37 – Arrays + $elemMatch

// Find employees who:

// Work on the CRM project
// AND
// Have Node.js experience greater than 5 years

// Hint: skills is an array of objects.

// 🟡 Q38 – $elemMatch

// Find employees who satisfy:

// Department = Backend
// Salary > 80000
// Node.js experience > 4 years
// 🟡 Q39 – Mixed Query

// Find employees who satisfy:

// City is Delhi OR Pune
// Age > 25
// Active = true

// Bonus: Solve it without using $and.

// 🔴 Q40 – Interview-Level Question

// Find employees who satisfy all of the following:

// (Department = Backend OR QA)
// Salary > 80000
// State is Delhi OR Haryana
// Node.js experience greater than 2 years

// Hint: This question combines:

// $or
// Implicit AND
// $in
// $elemMatch
// 🎯 Challenge

// Solve all 10 of these again and send me your answers. I'll review them as if I were interviewing you for a 
// Node.js Backend Developer role, pointing out both syntax issues and best practices.











// =======================================================================================================================
                                                    /* Replacing a document in mongoDB */

                            
// replaceOne()
// db.collection.replcaeOne(filter , replacement , options)


// db.employees.replaceOne({ _id: ObjectId('6a2fccb20d42300c2cd36ce1')}  ,
// { 
//     name: "Sarthak jha" , 
//     age : 24 , 
//     salary: 50000 , 
//     department: 'Accounts',
//     city: "Baraily",
//     active: true,
//     address: "Baraily.. 565D99",
//     skills: {
//         name: "Account",
//         experience: 9
//     },
//     projects: [ 'BOB' , "MB"]
// })




// updateOne()
// with updateOne we use two operator $set (to use to add new field or document )
// $push (Append a value to array ) if absent , $push adds the array field with the value as its element

// db.collection.updateOne(<filter> , <update>, {options})



// db.employees.updateOne({_id: ObjectId('6a2fccb20d42300c2cd36cde')} , 
// {$set: { name: "Abhimanyu Singh Chaudhary" , salary: 100000 , department: "Junior Back-End Dev"} , 
// $push: { projects: "Lakshya+"}
// });



/* If the update filter dosen't match any filter then the document will be created with {upsert} 

// upsert = {Update + insert} -- insert a document with provided information if matching document don't exit

If the document exists → MongoDB updates it.
If the document doesn't exist → MongoDB inserts a new document.

db.employees.updateOne({_id: ObjectId('6a2fccb20d42300c2cd36cdf')},
 {$set:{name: "Rahul kumar"} , 
$push: {projects: 'Atthah'},
},
 {
    upsert: true
}
)



findAndModify()


db.employees.findAndModify({
query: {
 _id: ObjectId('6a2fccb20d42300c2cd36ce0') ,
}, 
update: { 
    $push: {
     projects: "R1RCM" 
     }
     } , 
    new: true
});








updateMany()

accepts filter document 
update document 
options object



db.employees.updateMany({ department: "Backend" , skills: "Node.js" } , {$set: { salary: 100000}})

db.employees.deleteOne({ department: "Backend" , salary: {$gt: 100000}})

delete by id 

db.employees.deleteOne({ _id: ObjectId('6a2fccb20d42300c2cd36ce1')})




delete using $or 


db.employees.deleteMany({ 
$or: [ 
{city: "Noida"},
{"address.state": "Maharashtra"}
]
})



if you want to drop the collection then 

db.employees.drop() 








// ============================================Sorting Limiting Query results 




The sorting and limiting are two most common MongoDB operations . They are frequently used together with api 
for feature like pagination , leaderBoard , latest posts and top-selling product

sort() in mongoDB 

db.collection.find(query).sort({field : order });

1 = Asc
-1 = Dsc



limit()

Return only the first N record

db.employees.limit(3);



skip()
The first N documents 



{Projection} - In MongoDB is a way to find only those column where we have to find it 
Projection always take two argument 
if you want to exclude the _id:

db.collection.find({filter} , {projection})


db.employees.find({city: 'Noida'},{ _id: 0 ,name: 1 , salary : 1});


using $in operator

db.employees.find({skills : { $in:['Cloud Architecture']}}, { _id: 0 , address: 0})





================================== count the document that matches the query ===========================
db.collectionname.countDocuments(<Query> , <options> )

db.employees.countDocuments({salary: { $gt: 80000}} , {city: "Bengaluru"})









*/

