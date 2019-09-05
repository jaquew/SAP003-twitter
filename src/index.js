let tweetArray = []
let timeArray = []
let nome
let idade

//dados do usário
if(localStorage.getItem("nome")!==null){
  document.getElementById("name").innerHTML = localStorage.getItem("nome")
} else {
  username = window.prompt("Qual seu nome?")
  localStorage.setItem("nome", username)
  document.getElementById("name").innerHTML = username
}
if(localStorage.getItem("idade")!==null){
  document.getElementById("age").innerHTML = localStorage.getItem("idade")
} else {
  userAge = window.prompt("Qual sua idade?")
  localStorage.setItem("idade",userAge)
  document.getElementById("age").innerHTML = userAge
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

//recuperar local storage, se existir
if (localStorage.getItem("tweet")!==null){
  tweetArray = JSON.parse(localStorage.getItem("tweet"))
  timeArray =  JSON.parse(localStorage.getItem("time"))
  for(let i in tweetArray){
    document.getElementById("timeline").innerHTML += "<li>" + tweetArray[i].replace(/(?:\r\n|\r|\n)/g,"<br>") + "<br>" + timeArray[i]  + "</li>"
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
  document.getElementById("timeline").innerHTML += "<li>"+ text.replace(/(?:\r\n|\r|\n)/g,"<br>")  + "<br>" + time + "</li>"

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
  textarea.style.height = (textarea.scrollHeight)- 5 + "px";
}