/** Phase 2: The new Keyword

Learn exactly what JavaScript does internally.

Topics
Internal steps of new
Object creation
Prototype linking
Calling the constructor
Returning the new object

JavaScript roughly does this:

const obj = {};
obj.__proto__ = User.prototype;
User.call(obj, "Abhi");
return obj;

Understand every line.
 */