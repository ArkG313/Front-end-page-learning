console.log('Hello, world!');
console.log(window);
console.log(document);
console.log(document.getElementsByClassName("sign-in"));
var btn=document.getElementById("btn");
btn.addEventListener("click",function() {
    console.log("欢迎光临");
    // window.alert("登陆成功");
    // window.confirm("你好你好你好");
    // document.getElementById("username")
    console.log(document.getElementById("username").value);
    // document.getElementById("password");
    console.log( document.getElementById("password").value);
    // window.location.href="/index.html";

    
})
// var js=document.createElement("script");
// js.src="index.js";
// document.body.appendChild(js);