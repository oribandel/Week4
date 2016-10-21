
$(function() {

  $("button.btn.btn-success").on("click", function(event) {
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    elementThatWasClicked.parent().remove();
  })


})
