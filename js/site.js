/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function NavToggle() {
    var x = document.getElementById("toggleNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 