// localfileのimportはcorsで動かないので直接ここに書いた
function getData() {
  return "Station12をクリア!";
}

var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;
