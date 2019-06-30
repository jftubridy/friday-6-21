// Business Logic for Pizza ---------
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings;
  // this.cost = this.size + this.toppings.length
}

// puts pizza price together
Pizza.prototype.cost = function() {
  this.size + this.toppings.length;
}

Pizza.prototype.cost = function(){
  if (this.size == "Small") {
    this.cost = 1;
  } else if (this.size == "Medium") {
    this.cost = 2;
  } else if (this.size == "Large") {
    this.cost = 3;
  } else {this.cost = 4;
  }
}


$(document).ready(function() {
  // attachContactListeners();
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = ($("#size").val());
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

    var customPizza= new Pizza(inputtedSize, inputtedToppings);
    console.log(customPizza.size);
    $("#custSize").text(customPizza.size);
    $('#custToppings').text(customPizza.toppings);
    $('#custCost').text("$"+$(parseInt(customPizza.cost)) + $(parseInt(customPizza.toppings.length)));
    console.log(toppings.length);
  // clears user-input fields
  $("form")[0].reset();
});
});
