function add() {
    let newText=document.querySelector(".todoinp").value;
    let newList = document.querySelector("#ul-list");
    newList.innerHTML+=`<li><li>
    <p>${newText}</p>
    <i class="fa-solid fa-check ok" onclick="doneList(this)"></i>
    <i class="fa-solid fa-xmark del" onclick="deleteList(this)"></i>
    </li></li>`;
    document.querySelector(".todoinp").value = "";
  }
  function deleteList(x) {
    let delElement=document.querySelector(".del");
    x.parentElement.remove();
  }
  function doneList(a) {
    let pTag = a.parentElement.querySelector('p');
    if (pTag.style.textDecoration === "line-through") {
      pTag.style.textDecoration = "none";
      a.style.color="green";
  } else {
      pTag.style.textDecoration = "line-through";
      a.style.color="blue";
  }
  
  }