

// Custom Function
function calculateTip() {

   // Store the values
   var billAmount = document.getElementById("billAmount").value;
   var serviceQuality = document.getElementById("serviceQuality").value;
   var numPeople = document.getElementById("totalPeople").value;

 // Quick Validation
  if(billAmount === "" || serviceQuality == 0) {
    window.alert("Please Enter Some value!");
    return ;
  }

   //check to see if input is empty or less than or equal to 1

   if(numPeople === "" || numPeople <= 1) {
       numPeople = 1;

       document.getElementById("each").style.display = "none";

   } else {

       document.getElementById("each").style.display = "block";

   }
 
    // Some maths and shit

    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

      // Display Tip
      document.getElementById("totalTip").style.display = "block";
      document.getElementById("tip").innerHTML = total;
}


// Hiding the tip amouhnt

document.getElementById("totalTip").style.display ="none";
document.getElementById("each").style.display ="none";

//Clicking the button 
 
document.getElementById("calculate").onclick = function() { calculateTip(); };