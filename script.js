function addItem() {
    var content = document.getElementById("my-textarea").value;
    if (content != "") {
        var myListElement = document.getElementById("my-list");
        var li = document.createElement("li");
        li.innerHTML = content;
        li.setAttribute("class", "list-item"); // added line
        myListElement.appendChild(li);
    }
  }