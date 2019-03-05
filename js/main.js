$(function() {
  var navigation = $('#navigation');
  if(window.location.pathname == '/index.html') {
    navigation.load('pages/shared/nav.html');
  } else {
    navigation.load('shared/nav.html');
  }


  var footer = $('#footer');
  if(window.location.pathname == '/index.html') {
    footer.load('pages/shared/footer.html');
  } else {
    footer.load('shared/footer.html');
  }


  var loginBox = $('#loginBox');
  if(window.location.pathname == '/index.html') {
    loginBox.load('pages/shared/login_box.html');
  } else {
    loginBox.load('shared/login_box.html');
  }

});

// function to open the side navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}
//function to close side navigation
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// open popup login box
function openForm() {
  document.getElementById("background-container").style.display = "block";
}

function closeForm() {
  document.getElementById("background-container").style.display = "none";
}
