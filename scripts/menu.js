/* When setting the value of the variable "classOrIdMenu", */
/* enter the type with "#" to ID and "." to Class. */

function menuOpeningAndClosingControl(classOrIdMenu, property, value) {
  const menu = document.querySelector(`${classOrIdMenu}`);

  if (property === 0) {
    menu.style.display = `${value}`
  }
  
  if (property === 1) {
    menu.style.width = `${value}`
  }
}