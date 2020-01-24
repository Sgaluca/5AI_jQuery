var btn = document.createElement("button");
btn.innerHTML = "clicca";

var body = document.getElementsByTagName("body")[0];
body.append(btn);

btn.addEventListener("click",function(){
    document.getElementById("id1").innerHTML = "ciao come stai?"
});