var count = prompt("Choose an arithmetic method: \n1. Addition \n2. Subtraktion\n3. Multiplikation\n4. Division");
var x = parseInt(prompt("Enter your first number", "0"));
var y = parseInt(prompt("Enter your second number", "0"));
var z = +x + +y;


// The 4 basic math cases
switch (count) {
  case '1':
    alert("Answer: " + z);
    break;

  case '2':
    alert("Answer: " + (x - y));
    break;

  case '3':
    alert("Answer: " + x * y);
    break;

  case '4':
    alert("Answer: " + x / y);
    break;
}