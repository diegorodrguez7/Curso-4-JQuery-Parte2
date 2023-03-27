$("#btn1").click(() => {
  $(".man div").get(1);
});

$("#btn2").click(() => {
  const len = $(".main div").length;
  let html = "";
  for (let i = 0; i < len; i++) {
    const temp = $(".main div").get(i);
    html += `${temp.textContent}`;
  }
  $(".main .span1").text(html);
});