function myFunction() {
  let person = prompt("Please enter your name", "Name");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person;
  } 
}