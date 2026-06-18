bcrypt is a password hashing algorithm used to store passwords securely.
It automatically generates and adds a unique salt to every password before hashing.
This makes hashes stronger and protects against attacks like rainbow tables.

bcrypt also uses a cost factor (also called rounds or salt rounds), such as 10, 12, or 16.
The cost factor controls how many times the hashing process becomes computationally harder.

Higher rounds = more security but slower performance.
Lower rounds = faster but weaker security.

Pepper : is a extra secret value before added to password before hashing

difference between {SALT - PEPPER}

SALT 
.prevent same password from same hash
. store password in db 
. it store unique for all user

PEPPER

. if database leaks , attacker still needs pepper
. adding before hashing
. store secret value in server/.env
.same for all users

ARGON2 
. Modern password hashing algorithm
. slow and memory-hard
. protect against GPU/brute-force attack


Flow -> password + pepper  = hashedPassword


<!-- Store Password in .Env -->

PEPPER=mysecretValue


<!--  Argon2  -->

Argon2 is nothing but a password hashing algorithm used to design  secure against GUIs and brute-force attack than bcrypt 


. it automatically generate a unique salt 
. hash the password securely
. stores the salt inside the final hash



<!--  Brute-force Attack -->

is a trail and error method used by attacker to guess sensitive information typically passwords , encryption keys aor login credentials - by systematically or login credentials - by systematically trying every possible combination until the  correct one is found

How it works:
The attacker uses automated software to generate and submit a large number of guesses.

The process relies on computational power and time; shorter or simpler passwords can be cracked quickly, while longer, complex ones take exponentially longer.



<!-- Defense Against Brute-force Attack -->

.use long complex password
.Account lockout
Rate Limitting(only allow 1 attempt per second)
CAPTCHA (prevent automated tools)
multi factor auth 
monitoring and alerting


<!-- FLOW OF STORING SECURE PASSWORD -->

USER PASSWORD
     |
ADD PEPPER(SERVER SECRET)
    |
ARGON GENERATE RANDOM SALT
    |
HASH CREATED
    |
STORE HASH IN DB
