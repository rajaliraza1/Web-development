// Do not change any of the function names

function createUserClass(username, name, email, password) {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  this.user =username;
  this.name1 =name;
  this.email1=email;
  this.password1=password;
}
  user.prototype.sayhi=function(){
    return this.username + 'Hello, my name is {{name}}';
  };
const r = new user('abc','name1','abc@yahoo.com','abc123');
console.log(r.sayhi());


function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
Constructor.prototype.sayHi = function() {
return 'Hello World!';
};
}
addPrototypeMethod('');


function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  };
  }
  addReverseString('hello');

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
