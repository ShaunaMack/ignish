function addStash(event) {
    // Your code here
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    document.getElementById("stash-pic").style.top = y + "px";
    document.getElementById("stash-pic").style.left = x + "px";
    document.getElementById("stash-pic").style.visibility = "visible";
  }
  
  // Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
  document.getElementById("stash-pic").style.visibility = "hidden";
  document.getElementById("cat-pic").addEventListener("click", addStash);

// add random colour
function rgb(num) {
  return Math.floor(Math.random() * num);
};
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
};

document.body.onclick = colorChange;