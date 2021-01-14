$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const placeInput = $("input#place").val();
    const transportInput = $("input#transport").val();
    const hotelInput = $("input#hotel").val();

    $(".place").text(placeInput);
    $(".transport").text(transportInput);
    $(".hotel").text(hotelInput);
    $("#story").show();
});
});