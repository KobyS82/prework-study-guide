// This can be used instead of the parent object's name, such as the variable name

// TODO: What does 'this' refer to?
//this == the global object (in a browser is the window) "Window(object)"
console.log(this);

// TODO: What does 'this' refer to?
// this == its object "Inside this function, this is [object Window]"
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// this == inside this object, the age object "20"
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// "5750"
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
