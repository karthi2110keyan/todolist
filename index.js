
var button = document.querySelector(".addbtn")
var input = document.querySelector("textarea")
var divBox = document.querySelector(".list-container")
 

const listItems={
  lists:[]
}




input.style.border="black"
button.addEventListener("click",function(){
  
  const inputValue =input.value

 
 
 if(inputValue===""){
  input.setAttribute("placeholder","Enter somethig on text feild")
  input.style.border="1px solid red"
 }else{

  if(inputValue.length<=30){
    listItems.lists.push(inputValue) 
  }
  input.removeAttribute("placeholder")
  input.style.border="black"
}

if(listItems.length===6){
  alert("<h1>your list box has full</h1>")
}else if(listItems.length===8){
  listItems.splice(0,1)
}



render()
input.value=""


})




function render(){
let todolist="";
console.log(listItems.lists)
var i;
 for( i=0;i<listItems.lists.length;i++){

  
const  todo= listItems.lists[i]


 
  
    const html = `<div  class="parabox"><p class="para">`+todo+`</p><div class="button-box"><button class="delete" onclick="listItems.lists.splice(${i},1);render()
    ">x</button><button class="editbox"></button></div></div>`


    if(html.length===191){
      setTimeout(()=>{
        html=""
      },100)
    }else{
    todolist += html
    
    divBox.innerHTML= todolist
    }
  
  var edit = document.querySelector(".editbox")
  var col =document.querySelector(".parabox")
edit.addEventListener("click",function(){
  if(col.style.backgroundColor==="orange"){
    col.style.backgroundColor="#1d1d1d"
    col.style.color="white"
  }else{
    col.style.backgroundColor="orange"
    col.style.color="black"
  }
})
  

}


 }

// nav bar function..................


 var mbtn = document.querySelector(".conbox")
 var span = document.querySelectorAll("span")
var circle1 =document.querySelector(".circle1")
var circle2 =document.querySelector(".circle2")
var circle3 =document.querySelector(".circle3")

 mbtn.addEventListener("click",function(){

  if(span[0].style.visibility==="visible"){
    
    span[1].style.transform="rotate(45deg) translate(8px,10px)"
    span[2].style.transform="rotate(-45deg) translate(8px,-10px)"
    span[0].style.visibility="hidden"
    circle1.style.transform ="translate(-40px)"
    circle1.style.visibility="visible"
    circle2.style.visibility="visible"
    circle3.style.visibility="visible"
    circle2.style.transform="translate(-25px,44px)" ;
    circle3.style.transform=" translate(65px,1px)";

  }else{
    span[1].style.transform="none"
    span[2].style.transform="none"
    span[0].style.visibility="visible"
    circle1.style.transform="translate(60px)"
    circle3.style.transform="translate(50px,-60px)"
    circle1.style.visibility="hidden"
    circle2.style.visibility="hidden"
    circle3.style.visibility="hidden"
    circle2.style.transform="translate(60px,-55px)"
    sidebox.style.visibility="hidden"
  }
  

 })






//date and day exciute 

 var day_box = document.querySelector(".day")
 var date_box = document.querySelector(".date")
var weekdays=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"]
 var day = new Date().getDay()
 var date=new Date().getDate()
day_box.innerHTML=weekdays[day]
date_box.innerHTML=date




var sidebox = document.querySelector(".menu")

circle1.addEventListener("click",function(){
  
  if(sidebox.style.visibility==="visible"){
    sidebox.style.visibility="hidden"
  }else{
    sidebox.style.visibility="visible"
   
  }
})


let background_image=[{
  img1:"bgimg/bg0.jpeg",
  img2:"bgimg/bg1.jpeg",
  img3:"bgimg/bg2.jpeg"
}]
var bgbutton =document.querySelectorAll(".bg-change")
var db =document.querySelector(".designbox")

for(var j =0;j<bgbutton.length;j++){
bgbutton[j].style.backgroundImage=`url(bgimg/bg${j}.jpeg)`
}


bgbutton.forEach(function(bg) {


bg.addEventListener("click",function(){
  

  db.style.backgroundImage=bg.style.backgroundImage

  })

});




