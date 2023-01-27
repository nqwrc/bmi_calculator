function calculateBMI() {
  event.stopPropagation()
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = weight / (height / 100 * height / 100);
  var status;
  var kgNeeded = 0;

  if (result < 18.5) {
    status = "Underweight";
  } else if (result >= 18.5 && result < 25) {
    status = "Normal weight";
    kgNeeded = (25 * (height / 100 * height / 100)) - weight;
  } else if (result >= 25 && result < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  document.getElementById("result").innerHTML = result.toFixed(2);
  document.getElementById("status").innerHTML = status;
  document.getElementById("result-label").style.visibility = "visible";
  document.getElementById("status-label").style.visibility = "visible";

  if (status === "Normal weight" || status === "Underweight") {
    document.getElementById("kg-needed-label").innerHTML = "You're " + kgNeeded.toFixed(2) + " kg from being overweight";
    document.getElementById("kg-needed-label").style.visibility = "visible";
  } else {
    document.getElementById("kg-needed-label").style.visibility = "hidden";
  }
}
