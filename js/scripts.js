// Business Logic for Pizza ---------
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = toppings,
  // this.cost = this.size + this.toppings.length
  this.cost = 0
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

    var inputtedToppings = parseInt( $("input:checkbox[name=top]:checked").val());

    var customPizza= new Pizza(inputtedSize, inputtedToppings);
    console.log(customPizza.cost);
    $("#show-pizza").append("<li>"+ customPizza +" "+ "<br>" + "</li>");

  // clears user-input fields
  $("form")[0].reset();
  });
});
