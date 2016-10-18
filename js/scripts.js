function Movie(title, time, date, age, price)  {
  this.title = title;
  this.time = time;
  this.date = date;
  this.age = age;
  this.price= 0;

}

Movie.prototype.getPrice = function () {
  if (this.title === "movie1") {
    this.price = 5;


  } else if (this.title === "movie2") {
    this.price = 4;


  } else if (this.title === "movie3") {
    this.price = 3;


  } else {
  this.price = 2;
}

}


$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

  var title = $("#movie-select").val();
  var time = $("#time-select").val();
  var date = $("#day-select").val();
  var age = parseInt($("input#age").val());

  var ticketPrice = new Movie (title, time, date, age);

ticketPrice.getPrice();
alert(ticketPrice.price)

  // Movie.price();




});

});
