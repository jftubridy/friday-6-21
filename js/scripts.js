// Business Logic for Pizza ---------
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings,
  this.cost = cost;
  // this.cost = this.size + this.toppings.length
}

// puts pizza price together
Pizza.prototype.cost = function() {
  this.size + this.toppings.length;
}


$(document).ready(function() {
  // attachContactListeners();
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = parseInt($("#size").val());
    console.log(inputtedSize);
    //debugger;
    var inputtedToppings = [];
    // function numTop() {
      // toppings.push("input:checkbox[name=top]:checked").value();
    $("input:checkbox[name=top]:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);
      console.log("inputtoppings "+inputtedToppings);
      console.log("top[]length "+inputtedToppings.length);
//going back and checking the transportation assignment to try and get checkboxes to work
    console.log("topping " + topping);
  });
});

  //   var customPizza= new Pizza(size, toppping);
  //   console.log(customPizza.size);
  //   $("#show-pizza").append("<li>"+ customPizza +" "+ "<br>" + "</li>");
  //   console.log(toppings.length);
  // // clears user-input fields
  // $("form")[0].reset();
});
