for(i=1; i<localStorage.length;i++){
  document.getElementById("timeline").innerHTML+= "<li>" + localStorage.getItem(i) + "</li>"
}

document.getElementById("btn-send").addEventListener("click", clickCounter)

// função para contar os cliques e armazenar no local storage 
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  postatxt()
}

function postatxt() {
  let text = document.getElementById("text").value;
  localStorage.setItem(localStorage.clickcount, text);

  document.getElementById("timeline").value=localStorage.getItem

  document.getElementById("timeline").innerHTML+= "<li>"+localStorage.getItem(localStorage.clickcount) + "</li> "
}