var button = document.querySelector(".addbtn")
var input = document.querySelector("textarea")
var divBox = document.querySelector(".list-container")
 

const listItems=[]


if(listItems===null){
  console.log("hh")
}


button.addEventListener("click",function(){
  
  const inputValue =input.value

 
 
 if(inputValue===""){
  input.setAttribute("placeholder","Enter somethig on text feild")
  input.style.border="1px solid red"
 }else{

  if(inputValue.length<=30){
    listItems.push(inputValue) 
  }
  input.removeAttribute("placeholder")
  input.style.border="none"
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

 var i;
 for( i=0;i<listItems.length;i++){

  
const  todo= listItems[i]


 
  
    const html = `<div  class="parabox"><p class="para">`+todo+`</p><div class="button-box"><button class="delete" onclick="listItems.splice(${i},1);render() 
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


 var mbtn = document.querySelector(".conbox")
 var span = document.querySelectorAll("span")
var circle1 =document.querySelector(".circle1")
var circle2 =document.querySelector(".circle2")
var circle3 =document.querySelector(".circle3")

 mbtn.addEventListener("click",function(){

  if(span[0].style.visibility==="visible"){
    
    span[1].style.transform="rotate(45deg) translate(6px,15px)"
    span[2].style.transform="rotate(-45deg) translate(6px,-18px)"
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
  }
  

 })

