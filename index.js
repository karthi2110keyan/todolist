var button = document.querySelector(".addbtn")
var input = document.querySelector("textarea")
var divBox = document.querySelector(".list-container")
 

const listItems=[]






button.addEventListener("click",function(){
  
  const inputValue =input.value

 
 
 


  if(inputValue.length<=30){
    listItems.push(inputValue)

    
  }

if(listItems.length===0){
  alert("delete the box")
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

    todolist += html
    

 
    divBox.innerHTML= todolist
  
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

