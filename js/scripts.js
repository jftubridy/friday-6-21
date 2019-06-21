// Business Logic for Pizza ---------
function Pizza(size, toppings, cost) {
  this.size = size,
  this.toppings = []
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
    alert(inputtedSize);
    var inputtedToppings = $("input:checkbox[name=top]:checked").val();
    alert(inputtedToppings);
    var customPizza= new Pizza(inputtedSize, inputtedToppings);
    console.log(customPizza.cost);
    $("#show-pizza").append("<li>"+ customPizza +" "+ "<br>" + "</li>");
    alert(toppings.length);
  // clears user-input fields
  $("form")[0].reset();
  });
});
