const counter = 0;
const temp = "";
$("input").val("diego");
$(".main div").click(function () {
  $(this).data("past", $(this).text());
  counter++;
  const html = `counter: ${counter}`;
  $(this).html(html);
});

$(".btn1").click(() => {
  const val = $(".div1").data("past");
  $(".div1").text(val);
});