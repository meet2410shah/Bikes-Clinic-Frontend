$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function myModal() {
  document.querySelector("#ModalMe").classList.add("myModalOn");
  document.querySelector("#ModalMe").classList.add("animated");
  document.querySelector("#ModalMe").classList.add("fadeIn");
  document.querySelector("#ModalContent").classList.add("modalContentOn");
  document.querySelector("#ModalContent").classList.add("animated");
  document.querySelector("#ModalContent").classList.add("fadeIn");
};

function modalOff() {
  document.querySelector("#ModalMe").classList.remove("myModalOn");
  document.querySelector("#ModalContent").classList.remove("modalContentOn");
}
