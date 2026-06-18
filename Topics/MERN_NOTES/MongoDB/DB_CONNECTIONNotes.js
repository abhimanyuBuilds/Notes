// ***what is connection pooling 
// Connection pool is a cache of a database (or other service ) connection maintained in memory 
// so that they can be used by multiple client request instead of being closed and reopened each time.

// ***why do we use connection pool 
// to not create connection again and again 


// *** what does min size pool do 
// In connection pool min size is basically help to maintain atleast 2 on ready state pool
// connection pool keeps a few database connections awlays ready , so your app doesn't waste time making new once for every request

// connectTimeoutMS: 10000  // {How long should a server to wait to connect:}
// socketTimeoutMS: {45000} // {after creating connection how long should wait for the response}
/*
// ========================= MongoDB is a Document type DataBase ==============================
// {Document}: A Basic unit of data in mongoDB
// {collection}: A grouping of those documents
// { DataBase }: Is a collection for containers


mongoDB store data into BSON but bisplayed into json 
BSON support additional data types like dates , numbers and ObjectIds (BSON is a extension of JSON)
MongoDB support polymorphic data and has flexiable schema
we can also add some field later when we want with the use of optional
*/