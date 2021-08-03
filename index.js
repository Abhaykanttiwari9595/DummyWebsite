function myFunction1(){
    for(i=0;i<=9;i++){
        document.getElementsByClassName("image")[i].style.display="block";
    }  
}        
function myFunction2(){
    for(i=0;i<=8;i++){
        if(i == 0 || i == 1 || i == 2){
            document.getElementsByClassName("image")[i].style.display="block";
        }
       else{
             document.getElementsByClassName("image")[i].style.display="none";
        }
    }  
}
function myFunction3(){
    for(i=0;i<=8;i++){
        if(i == 3 || i == 4 || i == 5){
            document.getElementsByClassName("image")[i].style.display="block";
        }
       else{
             document.getElementsByClassName("image")[i].style.display="none";
        }
    }  
}
function myFunction4(){
    for(i=0;i<=8;i++){
        if(i == 6 || i == 7 || i == 8){
            document.getElementsByClassName("image")[i].style.display="block";
        }
       else{
             document.getElementsByClassName("image")[i].style.display="none";
        }
    }  
}