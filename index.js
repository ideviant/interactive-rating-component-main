var rating = 0;

$(".circle").on("click", function () {
  rating = $(this).text();
  $(".circle").css("color", "hsl(217, 12%, 63%");
  $(this).css("color", "white");
});

$(".submit").on("click", function () {
  $(this).css({"background-color": "white", color: "hsl(25, 97%, 53%)"});
  if (rating) {
    $(".rating-box").css("display", "none");
    $(".thanks-box").css("display", "flex");
    $(".result").text("You selected " + rating + " out of 5");
  }
});
