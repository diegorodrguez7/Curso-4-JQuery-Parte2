// 25. jQuery Mouse Move Events Listeners and hover Events

$(".main div").addClass("box").hover(function () {
  $(this).css("background-color", "red"),
    function () {
      $(this).css("background-color", "white")
    }
}).mouseenter(function (e) {

});

$(".main div").mouseup(function () {
  $(this).text("mouse up");
  $(this).css("background-color", "blue");
}).mousedown(function () {
  $(this).text("mouse dw");
  $(this).css("background-color", "green");
});

$(".main").mouseout(() => {
  $(".div2").text("Mouse out to main");
});
$(".main").mouseover(() => {
  $(".div2").text("Mouse over to main");
});
$(".main").mouseleave(() => {
  $(".div2").text("Mouse leave to main");
});
$(".main").mouseenter(() => {
  $(".div2").text("Mouse enter to main");
});

$("button").css("width", "100px");
$("button").mouseenter(function () {
  $(this).css("background-color", "white");
});

$(document).mousemove(function (e) {
  $("div1").text(`${e.pageX} ${e.pageY}`);
});