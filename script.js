(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()

  var mod1=document.getElementById("card1");
  var but1=document.getElementById("coin");
  var close1=document.getElementById("close1");

  var but2=document.getElementById("lingua");
  var mod2=document.getElementById("card2");
  var close2=document.getElementById("close2");

  var mod3=document.getElementById("card3");
  var but3=document.getElementById("byahero");
  var close3=document.getElementById("close3");

  but1.onclick=function() {
    mod1.style.display="block";
  }

  close1.onclick=function() {
    mod1.style.display="none";
  }

  but2.onclick=function() {
    mod2.style.display="block";
  }

  close2.onclick=function() {
    mod2.style.display="none";
  }

  but3.onclick=function() {
    mod3.style.display="block";
  }

  close3.onclick=function() {
    mod3.style.display="none";
  }

  function colorChange(color){
    document.body.style.background = color;
  }
