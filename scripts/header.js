const header = document.getElementById('header');

function headerWhenScroll() {
  if(window.pageYOffset >= 104 && window.pageYOffset < 1300) {
    header.style.backgroundColor = "#000000";
  } else if(window.pageYOffset >= 1300 && window.pageYOffset < 1990) {
    header.style.backgroundColor = "#0A0A0A";
  } else if(window.pageYOffset >= 1990) {
    header.style.backgroundColor = "#1F1F1F";
  }
   else {
    header.style.backgroundColor = "transparent";
  }
}

window.onscroll = (() => {
  headerWhenScroll()
});
