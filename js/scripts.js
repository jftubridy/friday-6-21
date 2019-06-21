//Business Logic for Pizza Palace ---------
function PizzaPalace() {
  this.pizzas = [],
  this.currentId = 0
}
//pushes pizzas with id to the PizzaPalace
PizzaPalace.prototype.myPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}
//assigns id to each pizza
PizzaPalace.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//finds the pizza by ID within
PizzaPalace.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}
// deletes pizza, the first if allows the input to keep going with removing the pizza as well.
PizzaPalace.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
     // (move past empty arrays)
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}



// Business Logic for Pizza ---------
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = [];
  // this.cost = size + toppings.length,
}

// puts pizza price together
Pizza.prototype.cost = function() {
  return this.size + this.toppings.length;
}


// User Interface Logic ---------
var orderedPizzas = new PizzaPalace();
// puts pizza details into list format
function displayPizza(pizzaToDisplay) {
//this displays the pizza name to be clicked for more info
  var pizzasList = $("ul#pizzas");
  var htmlForPizzaInfo = "";
  pizzaToDisplay.pizzass.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.toppings + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
}
// shows contact info  and adds button for delete
function showPizza(pizzaId) {
  var pizza = pizzaPalace.findPizza(pizzaId);
  $('#show-pizza').show();
  $(".size").html(pizza.size);

  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class ='deleteButton' id =" + pizza.id + ">Delete</button>");
}
// listens for action taken
function attachContactListeners() {
  $("ul#pizzas").on("click", "li", function() {
  showPizza(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function(){
    pizzaPalace.deletePizza(this.id);
    $("#show-contact").hide();
    displayPizza(pizzaPalace);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("input#size").val();
    var inputtedToppings = $("input.topChecks").val();
    console.log(pizza);
    var pizza= new Pizza(inputtedSize, inputtedToppings);
    $("#show-pizza").append("<li>"+ size +" "+ "<br>" + "</li>");

  // clears user-input fields
  $("form")[0].reset();

    var newPizza = new Pizza(inputtedSize, inputtedToppings);
      pizzaPalace.addPizza(newPizza);
    displayPizza(pizzaPalace);
  });
});


//
//
// //User Logic
// $();
// var size = $("#size").val();
//
// var flavor = $("input:checkbox[name=top]:checked").val();
// });
