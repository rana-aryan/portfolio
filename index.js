const header = document.querySe1ector("header");

 window.addEventListener ("scroll", function(){
      header.classList.toggle("sticky", window.scrollY > 200)
});