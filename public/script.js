$(document).ready(function(){

  $("#search-form").submit(function(event){
    event.preventDefault();
    let searchType = document.getElementById('search-type')
    let searchValue = document.getElementById('search-box').value
  });

  $("#edit-button").click(() => {
    $("#edit-individual-book").show();
    $("#save-button").show();
    $("#delete-button").show();
    $("#individual-book-data").hide();
  })

  $("#save-button").click(() => {
    $("#edit-individual-book").hide();
    $("#save-button").hide();
    $("#delete-button").hide();
    $("#individual-book-data").show();
  })

});
