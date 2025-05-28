//const age = 26

//if( age > 20){
  //  console.log('you are older than 20');
//}

//const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//if(ninjas.length>3){
 //   console.log('thats a lot of ninjas');
//}

//const password = 'p@ss1'


//if(password.length >12){
  // console.log('password is mighty strong');

//}  //else if(password.length>6){
  //  console.log('password is strong enough');
//} else {
  //  console.log('password is not strong enougb');
//}

//logiacal operators OR || and AND &&

//let hasNumber = /\d/.test(password);
//if(password.length >12 && hasNumber && password.includes('@')){
  //  console.log('strong password');
//} else if(password.length >6 || hasNumber){
  //  console.log('password okay');
//} else {
  //  console.log('password is weak');
//}

// logical NOT operator (!)
//let user = false;
//if(user){
  //  console.log(user != dog)
//} else {
  //  console.log(user === true)
//}
//console.log(user.lenghth === 5)

//break and continue
//const scores = [50, 25, 0, 30, 100, 20, 10];
//for(let i=0; i<scores.length; i++){
    //console.log('your score is:', scores[i]);

   // if(scores[i] === 100){
    //console.log('congratulations, you got a score of 100');
    //    break; //exits the loop
  //  }
//

//switch statements

const grade = 'B';

switch(grade){
    case 'A':
    console.log('you got an A');
    break; // exits the switch statement
    case 'B':
    console.log('you got a B');
    break; // exits the switch statement
    case 'C':
    console.log('you got a C');
    break; // exits the switch statement
    default:
        console.log('good job');
}

//variable and block scope
let age = 30
if(true){
    let age = 40; // reassigning age within the block
    let name = 'Benjamin'; // name is block scoped
    

    console.log('inside the block:', age + ' your name is ' + name + ' and you are ' + (age-5) + ' years old'); // will throw an error if age is not defined in this scope
}

const test = 50
console.log('outside the block:', age, test);