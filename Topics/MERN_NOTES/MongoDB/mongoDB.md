show dbs 
use database
use collection 


<!-- to fetch all documents   -->db.collecltionName.find()  
<!-- we can also give more number of condition  -->
db.Practise.find({Name: "Abhimanyu"})

<!-- if you want to find the query nested then use  -->


db.Practise.insertOne(
    {
        Name: "Abhimanyu Singh",
        Designation: "Junior Back-End Dev",
        CompanyName: "Atthah",
        Scale: "L1",
        Verified: false,

        Education: {
            Bachelors: "BS(CS)",
            Masters: "MCA",
            XII: "DAV"
        },

        Hobbies: {
            outDoor: ["Running", "Shooting"],
            inDoor: ["Badmintoon"]
        },
        PayingScale: "L2-Y7"
    })


    Now i want to fetch the Hobbies where hobbies = running / shooting 

    so db.Practise.find({"Hobbies.outDoor": {$in: ["Running" , "Shooting"]}})

for mongoDB updation method use $set and in mongoDB if u want to update data then updateMany{filter}, {update}


