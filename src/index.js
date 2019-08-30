// Desativa o botão se o campo se tiver vazio
document.getElementById("text").addEventListener("keyup", btn)
function btn(){
  if (document.getElementById("text").value===""){
    document.getElementById("btn-send").disabled = true;
  } else{
    document.getElementById("btn-send").disabled = false;
  }
}

// imprime os tweets que já estão salvos
for(i=1; i<localStorage.length;i++){
  document.getElementById("timeline").innerHTML += "<li>" + localStorage.getItem(i) + "</li>"
}

// função para contar os cliques e armazenar no local storage
document.getElementById("btn-send").addEventListener("click", clickCounter)
 
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

  document.getElementById("timeline").innerHTML+= "<li>"+localStorage.getItem(localStorage.clickcount) + "</li> "
}