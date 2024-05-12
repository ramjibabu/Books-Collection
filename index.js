// firstadd button and events
var addButt=document.getElementById("addButt");
var overLay=document.getElementById("overLay");
var popUpBox=document.getElementById("popUpBox")

addButt.addEventListener("click",function(){
    overLay.style="display:block"
    popUpBox.style="display:block"
})

var popUpBoxClose=document.getElementById("popUpBoxClose");
popUpBoxClose.addEventListener("click",function(event){
    event.preventDefault();
   overLay.style="display:none"
    popUpBox.style="display:none"
})
// form variable
var bookTitleInput=document.getElementById("bookTitleInput");
var bookAuthorInput=document.getElementById("bookAuthorInput");
var textAreaInput=document.getElementById("textAreaInput");

// form variable
var container=document.getElementById("container");
var popUpBoxAdd=document.getElementById("popUpBoxAdd");


popUpBoxAdd.addEventListener("click",function(event){
    event.preventDefault();
   var div=document.createElement("div");
   div.setAttribute("id","bookBox")
   div.innerHTML=`<h3>${bookTitleInput.value}</h3>
   <span>${bookAuthorInput.value}</span>
   <p>${textAreaInput.value}</p>
   <button onclick="deleteButt(event)">Delete</button>`
   container.append(div)
   overLay.style="display:none"
   popUpBox.style="display:none"
   

})

function deleteButt(event){
    event.target.parentElement.remove();

}
