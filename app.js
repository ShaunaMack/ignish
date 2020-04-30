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