          Request
              |
              |
         verifyJWT
              |
       Token exists?
         /       \
       No         Yes
       |           |
     401      jwt.verify()
                   |
              Token Valid?
               /      \
             No        Yes
             |          |
           401       Find User
                        |
                   User Exists?
                    /      \
                  No        Yes
                  |          |
                401     req.user=user
                             |
                            next()
                             |
                         Controller
                             |
                          Response