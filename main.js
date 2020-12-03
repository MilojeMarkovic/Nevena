document.getElementById("navButton").addEventListener("click", toggleNav);

function toggleNav(){
  navSize = document.getElementById("mySidenav").style.width;
  if (navSize === '250px') {
    return close();
  }
  return open();
}

function open() {
  document.getElementById("mySidenav").style.width = "250px";
}
function close() {
  document.getElementById("mySidenav").style.width = "0";
}
