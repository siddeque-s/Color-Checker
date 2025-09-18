const colorChange = (selectedcolor) => {
    
  document.querySelector("body").style.backgroundColor = selectedcolor;
  sessionStorage.setItem("Background color", selectedcolor);
};


let needColor = sessionStorage.getItem("Background color");


document.querySelector("body").style.backgroundColor = needColor; 
if (needColor !== null) {
  selectColor.value = needColor;
}

