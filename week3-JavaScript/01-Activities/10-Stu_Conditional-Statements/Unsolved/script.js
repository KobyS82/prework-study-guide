// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log('True ✅ True ✅');
} else if (expression1 === true) {
    console.log('True ✅ False ❌');
} else if (expression2 === true) {
    console.log('False ❌ True ✅');
} else if (expression1 === false) {   
    console.log('NOT False ❌ False ❌');
} else {
    console.log('False ❌ False ❌');
}



console.log('end');