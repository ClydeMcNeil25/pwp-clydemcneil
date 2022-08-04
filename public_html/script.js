document.addEventListener('click', function(e) {
  if(e.target.document.contains.getElementById("customTees")){
    const src = e.target.document.getElementById("src");
    console.log(src);
  }
})