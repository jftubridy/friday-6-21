// Business Logic for Pizza ---------
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings;
  //this.cost = 0;
}

Pizza.prototype.sizePrice = function(){
  if (this.size == "Small") {
    this.cost = 1;
  } else if (this.size == "Medium") {
    this.cost = 2;
  } else if (this.size == "Large") {
    this.cost = 3;
  } else {this.cost = 4;
  } console.log("this.cost at sizePrice "+this.cost);
}

Pizza.prototype.numTop = function() {
  if (this.toppings.length >= 0) {
    this.cost += (this.toppings.length);
  console.log("this.cost at numTop " +this.cost);
  }
}

$(document).ready(function() {
  // attachContactListeners();
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = ($("#size").val());
    var inputtedToppings = [];
    $("input:checkbox[name=top]:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);

  });

    var customPizza= new Pizza(inputtedSize, inputtedToppings);
    $("#custSize").text(customPizza.size);
    console.log("size value " + customPizza.size);
    $('#custToppings').text(customPizza.toppings);
    console.log("customPizza.topping " + customPizza.toppings);
    customPizza.sizePrice();
    customPizza.numTop();
    $('#custCost').text("$"+customPizza.cost);
    console.log("customPizza.cost "+customPizza.cost);
  // clears user-input fields
  $("form")[0].reset();
});
});
