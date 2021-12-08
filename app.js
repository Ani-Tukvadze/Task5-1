window.onload = function() {
    var button = document.getElementById("submit");
    var button1 = document.getElementById("delete");
    var input = document.getElementById("input");
    button.onclick = add;
    button1.onclick = remove;
  };
  

  
  function add() {
    var input = document.getElementById("input");
    var output = document.getElementById("list");
    if (input.value != "") {
      var li = document.createElement("li");
      li.innerHTML = input.value;
      output.appendChild(li);
    }
  };
  
  
  function remove() {
    var list = document.getElementById("list");
    var allLi = list.getElementsByTagName("li")
    if (allLi.length > 0) {
      list.removeChild(allLi[allLi.length - 1]);
    }
  };