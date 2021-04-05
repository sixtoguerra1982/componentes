
$(document).on('turbolinks:load', function(){
    $('#button1').click(function(){
        $('#collapseExample').toggle('slow')
    })
});


$(document).on('turbolinks:load', function(){
    $('#button2').click(function(){
        $('#button2').remove()
    })
});
$(document).on('turbolinks:load', function(){
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
}
});