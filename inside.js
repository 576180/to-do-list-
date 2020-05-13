 var button= document.getElementById("ijk");
var input= document.getElementById("xyz");
  var ul= document.querySelector("ul");




  button.addEventListener("click", function(){
  	if (input.value.length>0) {
  		
  	var li = document.createElement("li");
  	li.appendChild(document.createTextNode(input.value)); 
  	ul.appendChild(li);
  	input.value="";
  	}
  	else{}
  	
  })  
  input.addEventListener("keypress", function(event){
  	
  	if (input.value.length>0 && event.keyCode===13) {
  //	console.log(input.value);
  	var li = document.createElement("li");
  	li.appendChild(document.createTextNode(input.value)); 
  	ul.appendChild(li);
//sconsole.log(li.value);
  	input.value="";
  	
  	}
  	else{}
  	})  
   button.addEventListener("click", function(){
  	if (input.value.length>0) {
  		
  
  	lili.appendChild(document.createTextNode(input.value)); 
  	ul.appendChild(li);
  	input.value="";
  	}
  	else{}
  	
  })  
   document.getElementById("xyz").value;
   function buttonclick()
   {
   	
   	var efg =document.getElementById("xyz").value;
   	   // alert(efg);
   console.log(efg.value);
   }