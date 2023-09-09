document.body.addEventListener(('keydown'), (e) => {
    $("#text").empty(); 
    var key = e.code;
    $("#text").append(key)
})