const txt1=document.getElementById('nm');
const txt2=document.getElementById('msg');
const btn=document.getElementById('button');
const result=document.getElementById('details');

function showMsg(){
    result.innerHtml = txt1.value;                
}
btn.addEventListener('click',showMessage); 
