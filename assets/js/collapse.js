function collapse() {
  sectiuni = document.querySelectorAll("section");
  for (let i = 1; i < sectiuni.length; i++) {
    sectiuni[i].classList.add("collapsed");
    var div = document.createElement('div');
    div.className = 'over';
    div.innerHTML = "Expandeaza";
    sectiuni[i].appendChild(div);
    button = document.createElement('button');
    button.innerHTML = "collapseaza sectiunea";
    button.className = 'rand';
    sectiuni[i].appendChild(button);
    div.onclick = function myScript() {
      sectiuni[i].classList.remove("collapsed");
      this.remove();
    };
    button.onclick = function myFunc() {
      sectiuni[i].classList.add("collapsed");
      var div = document.createElement('div');
    div.className = 'over';
    div.innerHTML = "Expandeaza";
    div.onclick = function script(){
      sectiuni[i].classList.remove("collapsed");
      this.remove();
    };
    sectiuni[i].appendChild(div);
    }
  }
}



