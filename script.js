const urlParams = new URLSearchParams(window.location.search);
let result = urlParams.get('answer');
console.log(result);
if(result === "true"){
    console.log(true)
    document.getElementById("good").style.display = "block";
}else if (result === "false") {
    console.log(result);
    document.getElementById("bad").style.display = "block";
}