function infoSmart() {
    var list = document.getElementById("smart")
    var button = document.getElementById("button_info")
    if (list.style.display === 'none') {
         list.style.display = 'block';
         button.firstChild.data = "Minder informatie SMART"
     } else {
         list.style.display = 'none';
         button.firstChild.data = "Meer informatie SMART"
     }
 
    // list.style.display = "block";
 }
 
 window.onscroll = function() {myFunction()};
 
 var navbar = document.getElementById("navbar");
 var sticky = navbar.offsetTop;
 
 function myFunction() {
   if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
   } else {
     navbar.classList.remove("sticky");
   }
 }
 
 var modal = document.getElementById('myModal');
 
 var img = document.getElementById('myImg');
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
     captionText.innerHTML = this.alt;
 }
 
 var span = document.getElementsByClassName("close")[0];
 
 span.onclick = function() { 
   modal.style.display = "none";
 }