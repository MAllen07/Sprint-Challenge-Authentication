1. What is the purpose of using _sessions_?

Sessions allow us to store information in order to authenticate and authorize users as a means of securing the application's data.

2. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt provides a method to disguise user passwords called hashing. Hashing makes it more difficult to obtain user information.

3. What does bcrypt do to slow down attackers?

Bcrypt hashes passwords 10 ^ n times, n being the input number of hashes in our generate token function, which changes a password from being stored as plain text to an elaborate string that attackers must decrypt in order to access the user's password.

4. What are the three parts of the JSON Web Token?

Header, Payload Signature
