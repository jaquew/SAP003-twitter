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

  let today = new Date()
  let postTime =  today.getHours() + ":" + today.getMinutes() 

  document.getElementById("timeline").innerHTML += "<li>"+ text + "<br>" + postTime + "</li>"
  
  localStorage.setItem(localStorage.clickcount, text + "<br>" + postTime);

  document.getElementById("text").focus();
}


// contador de caracteres
document.getElementById("text").addEventListener("keyup", charCount)
function charCount(){
  let charNumber = document.getElementById("text").value.length
  // imprime na tela
  document.getElementById("count").innerHTML= 140 - charNumber
  
  // desabilitar o botao caso ultrapasse 140
  if (charNumber>140) {
    document.getElementById("btn-send").disabled = true
  }
  
  // mudar de cor
  if (charNumber < 120){
    document.getElementById("count").style.color="black"
  } else if (charNumber < 130){
    document.getElementById("count").style.color="orange"
  } else if (charNumber >= 130){
      document.getElementById("count").style.color="red"
  }

  auto_grow()
  
}

//aumentar area
let textarea = document.getElementById("text")
function auto_grow() {
  textarea.style.height = "10px";
  textarea.style.height = (textarea.scrollHeight)- 10 + "px";
}