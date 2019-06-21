// Business Logic for Pizza Palace ---------
function PizzaPalace() {
  this.pizzas = [],
  this.currentId = 0
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
  this.size = size,
  this.toppings = [],
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
    htmlForPizzaInfo += "<li id=" + contact.id + ">" + pizza.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}
// shows contact info  and adds button for delete
function showPizza(contactId) {
  var contact = addressBook.findPizza(contactId);
  $('#show-contact').show();
  $(".first-name").html(pizza.firstName);

  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class ='deleteButton' id =" + + contact.id + ">Delete</button>");
}
// listens for action taken
function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
  showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function(){
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayPizza(addressBook);
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    // var inputtedEmail =
    // $('input#email').val();
    // var inputtedHomeAddress = $('input#homeAddress').val();
    $('input#Address').val();
    var inputtedFirstAddressType = $('input#firstAddress').val();
    var inputtedSecondAddress = $('input#secondAddress').val();
    var inputtedThirdAddress = $('input#thirdAddress').val();
    var inputtedFourthAddress = $('input#fourthAddress').val();
    //pulled class id and plugged into output
    var firstType = $('#firstType').val();
    var secondType = $('#secondType').val();
    var thirdType = $('#thirdType').val();
    var fourthType = $('#fourthType').val();


    var address= new Address(inputtedFirstAddressType, inputtedSecondAddress, inputtedThirdAddress, inputtedFourthAddress);
    console.log(address);
    $("#address").append("<li>"+ firstType +" "+ address.firstAddress+ "<br>" +secondType +" "+address.secondAddress+ "<br>" +thirdType +" "+address.thirdAddress+ "<br>" +fourthType +" "+address.fourthAddress+ "</li>")

  // clears user-input fields
  $("form")[0].reset();
   // $("input#new-first-name").val("");
   // $("input#new-last-name").val("");
   // $("input#new-phone-number").val("");
   // $('input#email').val("");
   // $('input#homeAddress').val("");
   // $('input#firstAddressn').val("");
   // $('input#secondAddressn').val("");
   // $('input#thirdAddressn').val("");
   // $('input#fourthAddressn').val("");




    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, Address);
    // var newAddress = new Address(inputtedFirstAddressType, inputtedSecondAddress, inputtedThirdAddress, inputtedFourthAddress)
    addressBook.addContact(newContact);
    displayPizza(addressBook);
  })
})























//User Logic
$();
var size = $("#size").val();

var flavor = $("input:radio[name=top]:checked").val();
