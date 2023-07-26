var text = document.getElementById("string")

var btn = document.getElementById("show");
var i = 0;

btn.onclick = function () {
  var timer = setInterval(() => {
    document.getElementById("par").textContent += text.value[i];

    i++;
    if (i >text.value.length - 1) {
      clearInterval(timer);
    }
  }, 200);
};

