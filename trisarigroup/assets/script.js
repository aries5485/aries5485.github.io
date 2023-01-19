// Get the checkbox
var checkbox = document.getElementById("flexSwitchCheckDefault");

// Get the three divs
var div1 = document.getElementById("pricePlanBasic");
var div2 = document.getElementById("pricePlanPremium");
var div3 = document.getElementById("pricePlanPlatinum");

// Store the original text inside the divs
var originalText1 = div1.innerHTML;
var originalText2 = div2.innerHTML;
var originalText3 = div3.innerHTML;

// Add an event listener to the checkbox
checkbox.addEventListener("change", function() {
  // Get the current state of the checkbox
  var isChecked = checkbox.checked;

  // Check if the checkbox is checked
  if (isChecked) {
    // Change the text of div1 to "Checked 1"
    div1.innerHTML = "$2,500<span>/year</span>";
    // Change the text of div2 to "Checked 2"
    div2.innerHTML = "$4,950<span>/year</span>";
    // Change the text of div3 to "Checked 3"
    div3.innerHTML = "$6,000<span>/year</span>";
  } else {
    // Change the text of div1 back to the original text
    div1.innerHTML = originalText1;
    // Change the text of div2 back to the original text
    div2.innerHTML = originalText2;
    // Change the text of div3 back to the original text
    div3.innerHTML = originalText3;
  }
});
