let count=0;
let countE1 =document.getElementById("count-e1");
let saveE1=document.getElementById("save-e1")
let totalE1=document.getElementById("total-e1")

function increment(){
    count+=1
    countE1.innerText=count;

}
function save(){
    countStr=count+"-";
    saveE1.textContent+=countStr;
    countE1.textContent=0;
    count=0;

}
clear 

