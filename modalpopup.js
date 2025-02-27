// Get the modal
var modal = document.getElementById(&quot;myModal&quot;);


// Get the  element that closes the modal
var span = document.getElementsByClassName(&quot;close&quot;)[0];

// When the page load, open the modal 

$(window).on(&#39;load&#39;,function(){
    var delayMs = 6000; // delay in milliseconds
    
    setTimeout(function(){
       modal.style.display = &quot;block&quot;;
    }, delayMs);
});

// When the user clicks on  (x), close the modal
span.onclick = function() {
  modal.style.display = &quot;none&quot;;
}
    

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = &quot;none&quot;;
  }
}