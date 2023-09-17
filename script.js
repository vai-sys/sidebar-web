let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let navItem=document.querySelectorAll(".nav-item");
let name2=document. querySelector(".name");
btn.addEventListener("click",function(){
    sidebar.classList.toggle('active');
    navItem.forEach(function (item) {
        item.classList.toggle('display');
    });
    name2.classList.toggle("display");


})  