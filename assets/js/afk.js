//3.13
var idleTime = 0;
var div=document.querySelector(".afk");

var idleInterval = setInterval(timerIncrement, 1000); 

document.onmousemove = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  /*document.onload = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };*/
  
  document.onkeydown = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onmousedown = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onmouseout = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onmouseover = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onmouseup = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onmouseleave = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onkeypress = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.onkeyup = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };
  
  document.ondblclick = function (e) {
    idleTime = 0;
    var div = document.querySelector(".afk");
    div.classList.remove("viz");
  };

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime >= 5) {
        {
          var div=document.querySelector(".afk");
          var timp=document.querySelector(".time");
          timp.innerHTML = idleTime;
          div.classList.add("viz");
          console.log(timp.classList);
        }
    }
}

