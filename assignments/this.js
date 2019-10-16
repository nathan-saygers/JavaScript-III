/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global binding - If you don't give context to 'this' it will apply to the console.
* 2. Implicit binding - You don't specifically call out how 'this' will bind, but it is implied through context (written within a function etc.)
* 3. New binding - 'this' is bound to values based on the creation of new objects from a constructor
* 4. Explicit binding - 'this' is bound to a value through the .call or .apply methods
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);

// Principle 2
const object = {
  property: 'doohicky',
  objectFlips: function(flipType) {
    console.log(`${this.property} does a ${flipType}`);
    console.log(this);
  }
};
object.objectFlips('backflip');

// Principle 3
function CoolStudent(teacher) {
  this.coolGreeting = 'yo ';
  this.teacher = teacher;
  this.backTalk = function()  {
    console.log(this.coolGreeting + this.teacher);
    console.log(this);
  };
}

const davey = new CoolStudent('Mr. Hawkins');
const hawkins = new CoolStudent('Davey!');

davey.backTalk();

// Principle 4
function student(){
  console.log(this.attendance);
}

let firstStudent = {
  name: 'Jonnie',
  attendance: 'Present!'
}

student.call(firstStudent);

// code example for Explicit Binding