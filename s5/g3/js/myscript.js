function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function grande(){
      document.getElementById('titolo').classList.add('ingrandimento')
  }

  function maiuscolo(){
    document.getElementById('titolo').classList.add('maiuscolo')
}

function colore(){
    document.getElementById('titolo').classList.add('colore')
}

function nascondi(){
    document.getElementById('titolo').classList.add('nascondi')
    document.getElementById('titolo').classList.add('mostrare')

}

function mostrare(){
    document.getElementById('titolo').classList.add('mostrare')
    document.getElementById('titolo').classList.add('nascondi')

}