import Typed from 'typed.js';

var options = {
  strings: ["<i>akshita</i>.", "&amp; akshita garg."],
  typeSpeed: 40,
}

var typed = new Typed(".blink", options);
var add=document.getElementById("add");
var removeAll=document.getElementById("removeall");
var list=document.getElementById("list");


//removeAll button

removeAll.onclick=function(){
    list.innerHTML=""
}

//adding a new list element

add.onclick= function(){
    addlis(list);
    document.getElementById("userinput").value="s";
    document.getElementById("userinput").focus();
}

function addlis(targetUl){
    var inputText=document.getElementById('userinput').value;
    var li = document.createElement('li')
    var textNode=document.createTextNode(inputText+ " ");
    var removeButton=document.createElement('button');
    
    if(inputText !== ""){
        removeButton.className='btn btn-danger btn-xs';
        removeButton.innerHTML='&times';
        removeButton.setAttribute('onclick','removeMe(this)')
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }else{
        alert("Please enter a todo")
    }
    
}
function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}