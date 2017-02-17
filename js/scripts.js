$(function(){
  $("form").submit(function(event){
    var food = $("#food").val();
    console.log(food);
    event.preventDefault();
    var age = $("#age").val();
    console.log(age);
    var animal = $("#animal").val();
    console.log(animal);


if (food === "Thai" && age === "Under 25" && animal === "Cat") {
   $("#leonardo").show();

}  else if (food === "Chinese" && age === "25-35" && animal === "Dog") {
    $("#amy").show();



  } else if (food === "Mexican" && age === "35 and over" && animal === "Wolverine"){
    $("#lenny").show();
  }
});

  // var number1 = ($("#food").val());
  //   event.preventDefault();
  //   console.log(number1);
  //   if (number1 === "1"){
  //     $("#age, #animal")hide();
  //
  //   }





  //
  //
  // var number2 = ($("#animal").val());
  // var number3 = ($("#age").val());
  //




});
