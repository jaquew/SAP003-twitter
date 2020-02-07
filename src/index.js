let tweetArray = []
let timeArray = []

//dados do usário
if(localStorage.getItem("nome")){
  document.querySelector(".name").innerHTML = localStorage.getItem("nome")
} else {
  const username = window.prompt("Qual seu nome?")
  localStorage.setItem("nome", username)
  document.querySelector("name").innerHTML = username
}

//recuperar local storage, se existir
if (localStorage.getItem("tweet")!==null){
  tweetArray = JSON.parse(localStorage.getItem("tweet"))
  timeArray =  JSON.parse(localStorage.getItem("time"))
  for(let i in tweetArray){
    document.getElementById("timeline").innerHTML += "<li>" + tweetArray[i].replace(/(?:\r\n|\r|\n)/g,"<br>") + " <p id='time'>" + timeArray[i] + "</p> </li>"
  }
}

if (tweetArray.length>0){
  document.querySelector("#length").innerHTML = tweetArray.length + ' tweets'
}

// Desativa o botão se o campo se tiver vazio
document.getElementById("text").addEventListener("keyup", btn)
function btn(){
  if (document.getElementById("text").value===""){
    document.getElementById("btn-send").disabled = true;
  } else{
    document.getElementById("btn-send").disabled = false;
  }
}

document.getElementById("btn-send").addEventListener("click", postatxt)
function postatxt() {
  event.preventDefault()
  //get time
  let today = new Date()
  let time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes()
  //get text
  let text = document.getElementById("text").value

  tweetArray.push(text);
  timeArray.push(time)

  //colocar na storage
  localStorage.setItem("tweet", JSON.stringify(tweetArray))
  localStorage.setItem("time", JSON.stringify(timeArray))

  //imprimir na tela
  document.getElementById("timeline").innerHTML += "<li>"+ text.replace(/(?:\r\n|\r|\n)/g,"<br>")  + " <p id='time'>" + time + "</p></li>"

  //limpar
  document.getElementById("text").value = "";
  document.getElementById("text").focus();
  document.getElementById("btn-send").disabled = true
}

// contador de caracteres
document.getElementById("text").addEventListener("keyup", charCount)
function charCount(){
  let charNumber = document.getElementById("text").value.length
  // imprime na tela
  document.getElementById("count").innerHTML= 280 - charNumber
  
  // desabilitar o botao caso ultrapasse 280
  if (charNumber>280) {
    document.getElementById("btn-send").disabled = true
  }
  
  // mudar de cor
  if (charNumber < 260){
    document.getElementById("count").style.color="black"
  } else if (charNumber < 270){
    document.getElementById("count").style.color="orange"
  } else if (charNumber >= 270){
      document.getElementById("count").style.color="red"
  }
  auto_grow()  
}

//aumentar area
let textarea = document.getElementById("text")
function auto_grow() {
  textarea.style.height = "60px";
  textarea.style.height = (textarea.scrollHeight) + 2 +"px";
}