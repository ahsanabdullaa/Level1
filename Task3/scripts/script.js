$(document).ready(function () {
  $("#convert").click(function () {
    if ($(".input").val() === "" || isNaN($(".input").val())) {
      $(".errorMsg").html("Please enter a number");
      $(".input").addClass("error");
      return;
    }
    $(".input").removeClass("error");
    $(".errorMsg").html("");
    var temp = $(".input").val();
    var unit = $("#unit").find(":selected").val();
    console.log(unit);
    console.log(temp);
    var convertedTemp = 0;
    var unitSymbol = "";
    if (unit === "c") {
      convertedTemp = (temp * 9) / 5 + 32;
      unitSymbol = "F";
    } else {
      convertedTemp = ((temp - 32) * 5) / 9;
      unitSymbol = "C";
    }
    $("#temperature").html(convertedTemp.toFixed(2) + " " + unitSymbol);
    console.log(convertedTemp);
  });
});
