// alert("js");


window.onload = function () {
  
  document.getElementById("add-button").onclick = addItem
  document.getElementById("remove-button").onclick = removeItem

}

function addItem() {
  
    var item = document.createElement("li")
    item.innerHTML = document.getElementById("add-item").value
    document.getElementById("todo-list").appendChild(item)
    document.getElementById("add-item").value = ""

}

function removeItem() {
  
   var item1 = document.getElementById("add-item").value
   var list = document.querySelectorAll("li");
   document.getElementById("add-item").value = "";
   
  //  var found = false
   
   for(i =0 ; i < list.length; i++){

    if(list[i].innerHTML == item1){
      document.getElementById("todo-list").removeChild(list[i])
      // found = true
    }

   }


}










