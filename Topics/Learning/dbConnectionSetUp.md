Application Starts
        |
        ↓
new DatabaseConnection()
        |
        ↓
constructor() runs
        |
        +----------------+
        |                |
        ↓                ↓
register events      set mongoose settings
        |
        ↓
app.js ----> connectDB()
                  |
                  ↓
            connect()
                  |
                  ↓
          MONGO_URI exists?
               /     \
             No       Yes
             |         |
          Error      mongoose.connect()
                       |
                  successful?
                    /      \
                  No       Yes
                  |         |
             retry()      connected event
                  |             |
              3 times           |
                  |             |
              exit(1)       isConnected=true
                                |
                                ↓
                           Application runs
                                |
                          MongoDB disconnected?
                                |
                               Yes
                                |
                          disconnected event
                                |
                          handleDisconnection()
                                |
                             connect()
                                |
                             reconnect