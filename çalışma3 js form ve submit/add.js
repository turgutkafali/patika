// let formDom = document.querySelector('#userForm');
// formDom.addEventListener('submit' , formSubmit);

// function formSubmit(event){
//     event.preventDefault()
//     console.log('hersey yolunda');
// }



var username;
var password;
  function handleSubmit(e) {
    e.preventDefault();
    console.log("username:" + username + "-" + "password:" + password);
  }
  function handleChange(e) {
    if (e.target.name === "username") {
      username = e.target.value;
    }
    if (e.target.name === "password") {
      password = e.target.value;
    }
  }