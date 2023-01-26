function calculateBMI() {
  event.stopPropagation()
  var age = document.getElementById("age").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = weight / (height / 100 * height / 100);
  var status;

  if (result < 18.5) {
    status = "Underweight";
  } else if (result >= 18.5 && result < 25) {
    status = "Normal weight";
  } else if (result >= 25 && result < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  document.getElementById("result").innerHTML = result.toFixed(2);
  document.getElementById("status").innerHTML = status;
  document.getElementById("result").style.visibility = "visible";
  document.getElementById("status").style.visibility = "visible";
}
