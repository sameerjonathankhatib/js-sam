var test = 0;
var min = 20;
var max = 80;
var ctr = 1;

//window.prompt();
function rndm(min,max) {
  min = Math.ceil(min); //will return the smallest integer value >= 20
  max = Math.floor(max); //will return the largest integer value <= 80
  return Math.floor(Math.random() * (max - min)) + min;
    // math floor(rounds up the answer) from multiplying Math random(that gives random number from 0 to 1) to (max(80) to min(20) that gives 60 plus min(20))
}
function mtch() {
    var count = rndm(min,max);
    console.log(count);
    var message = parseInt(prompt("Please enter a number",""));
    if(count === message) {
        window.confirm('You got the correct answer ' + ctr);
    } else {
     while ((message !=='') && (count !== message)) {
         var message = parseInt(prompt("Please enter a number",""));
         ctr++;
         if(count === message) {
           window.confirm('You got the correct answer ' + ctr); 
         }
    }
 }
}

mtch();
