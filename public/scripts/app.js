var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});

const likesCount = 0;

$("#post-likes src").on("click", () => {
  likesCount+1
  $("#post-likes src").appendTo("src", "/assets/_Favourite.png")
});


