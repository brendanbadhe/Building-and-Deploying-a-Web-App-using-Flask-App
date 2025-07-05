let runAddition = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  fetch(`/sum?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("system_response").innerHTML =
        "Result: " + result;
    });
};

let runSubtraction = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  fetch(`/sub?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("system_response").innerHTML =
        "Result: " + result;
    });
};

let runMultiplication = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  fetch(`/mul?num1=${num1}&num2=${num2}`)
    .then((response) => response.text())
    .then((result) => {
      document.getElementById("system_response").innerHTML =
        "Result: " + result;
    });
};
