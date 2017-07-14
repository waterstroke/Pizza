//Business Logic
function Pizza(size, toppings, price, name, address,delivery) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
  this.name = name;
  this.address = address;
  this.deliveryOpt = delivery;
}
// function PersonInfo(name, address){
//  this.name = name;
//  this.address = address;
// }

Pizza.prototype.getAddress = function() {
  this.address = $("input#input-address").val();
}

Pizza.prototype.getName = function() {
  this.name = $("input#name").val();
}

Pizza.prototype.chooseDelivery = function() {
  this.deliveryOpt = $("input:checkbox[name=option]:checked").val();
}

Pizza.prototype.createPizza = function() {
  this.size = $("input:checkbox[name=size]:checked").val();
  var inputToppings = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    var eachToppings = $(this).val();
    inputToppings.push(eachToppings);
  })

  this.toppings = inputToppings;
  var toppingCounter = this.toppings.length;
  if (this.size === "small") {
    this.price = 12 + toppingCounter * 2;
  } else if (this.size === "medium") {
    this.price = 16 + toppingCounter * 2;
  } else if (this.size === "large") {
    this.price = 24 + toppingCounter * 2;
  } else if (this.size === "Specialty") {
    this.price = 32 + toppingCounter * 2;
  }

  $("#total-cost").text(this.price);
  $("#name").text(this.name);
  $("#thanks").text("Thank you for your order, " + this.name + "!");
  $("#input-address").text(this.address);
  $("#deliveryLocation").text(this.address);

}


//User Interface Logic
$(document).ready(function() {
  var orderedPizza = new Pizza();
  //This is for the click function to hold the name for the order
  $("#submission").click(function(event) {
    event.preventDefault();
    orderedPizza.getName();
    $(".delivery-option").show()
    $(".begin-order").hide()
    // $("form#toppings-list").hide()
  })
// this has to submit the DELIVERY OPTION
  // $(".delivery-option").hide()

  $("#deliveryOpt").click(function(event) {
    event.preventDefault();
    $(".delivery-option").hide()
    // if (click === delivery)
    $(".delivery").show();
  })


  $("#submitAddress").click(function(event) {
    event.preventDefault();
    orderedPizza.getAddress();
    $(".delivery").hide();
    $("#hide-topping").show();
  })

  $("#final-order").click(function(event) {
    event.preventDefault();
    // $(".toppings-list").show()
    orderedPizza.createPizza();
    $("#HIDE-EVERYTHING").hide()
    $("#image-hide").Show();
  })
});
