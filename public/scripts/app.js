// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// });

// const likesCount = 0;
// const postLikes = document.getElementById('#post-likes')
// postLikes.onclick("click", )

// $("#post-likes src").on("click", () => {
//   $("#post-likes src").attr("src", "/assets/_Favourite.png")
// });

// document.querySelector(".post-likes").addEventListener("click", () => {
//   (".post-likes").setAttribute("src", "/assets/_Favourite.png")
// });

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
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