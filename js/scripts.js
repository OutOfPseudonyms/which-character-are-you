$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    const drink = parseInt($("input:radio[name=drink]:checked").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const music = parseInt($("input:radio[name=music]:checked").val());
    const age = parseInt($("input:radio[name=age]:checked").val());
    const technology = parseInt($("input:radio[name=technology]:checked").val());
    let result = (drink + color + music + age + technology);
    let archeType;
    if (result >= 5 && result <= 8) {
      archeType = "the Leader";
    } else if (result >= 9 && result <= 12) {
      archeType = "the Lancer";
    } else if (result >= 13 && result <= 16) {
      archeType = "the Heart (I don't care what tvtropes says, it doesn't have to be 'the Chick')";
    } else if (result >= 17 && result <= 20) {
      archeType = "the Big Guy";
    } else if (result >= 21 && result <= 25) {
      archeType = "the Smart Guy";
    }
    $("#character").text(archeType);
    $("#output").show();
  })
})