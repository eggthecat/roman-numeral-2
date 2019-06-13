// business logic
var romanNumeralOutput = [""];
romanNumeralOutput.join(" ");


// var toRomanNumeral = function(number) {
function toRomanNumeral(number) {
  for (var index = number; index != 0; index += 0) {
    if (index >= 1000) {
      romanNumeralOutput.push("M");
      var index = (index - 1000);
        var number = index;
    } else if (index >= 900) {
      romanNumeralOutput.push("CM");
      var index = (index - 900);
        var number = index;
    } else if (index >= 500) {
      romanNumeralOutput.push("D");
      var index = (index - 500);
        var number = index;
    } else if (index >= 400) {
      romanNumeralOutput.push("CD");
      var index = (index - 400);
        var number = index;
    } else if (index >= 100) {
      romanNumeralOutput.push("C");
      var index = (index - 100);
        var number = index;
    } else if (index >= 90) {
      romanNumeralOutput.push("XC");
      var index = (index - 90);
        var number = index;
    } else if (index >= 50) {
      romanNumeralOutput.push("L")
      var index = (index - 50);
        var number = index;
    } else if (index >= 40) {
      romanNumeralOutput.push("XL")
      var index = (index - 40);
        var number = index;
    } else if (index >= 10) {
      romanNumeralOutput.push("X")
      var index = (index - 10);
        var number = index;
    } else if (index >= 9) {
      romanNumeralOutput.push("IX")
      var index = (index - 9);
        var number = index;
    } else if (index >= 5) {
      romanNumeralOutput.push("V")
      var index = (index - 5);
        var number = index;
    } else if (index >= 4) {
      romanNumeralOutput.push("IV")
      var index = (index - 4)
        var number = index;
    } else if (index >= 1) {
      romanNumeralOutput.push("I")
      var index = (index - 1)
        var number = index;
        console.log(index);
    }
  }
}

// user interface logic
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    event.preventDefault();
    // console.log("working")
    var number = parseInt($("input#number").val());
  toRomanNumeral(number);


    $("h1#result").text(romanNumeralOutput);

    // $("#result").show();
  });
});
