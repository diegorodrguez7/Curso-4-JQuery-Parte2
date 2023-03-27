// 24. jQuery toArray Method to get the jQuery elements as DOM elements

$("#btn1").click(() => {
  const eles = $(".main div").toArray();
  eles.forEach((e, i) => {
    console.log(e.textContent);
    const span = document.createElement("span");
    span.textContent = `hello ${i + 1}`;
    e.append(span);
  });
});