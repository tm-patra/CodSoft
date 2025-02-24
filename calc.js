function concact(c){
    var input=document.getElementById('input').value;
    input=input+c;
    document.getElementById('input').value = input;
    
}
function calculate(){
    var input=document.getElementById('input').value;
    input=eval(input);
    document.getElementById('input').value=input+" ";
}
function clearInput() {
    document.getElementById('input').value = ''; 
}