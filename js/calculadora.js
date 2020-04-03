
//Sumário de id e value!!
//até 1kg = 1
//1 a 1.5kg = 2
//1.5 a 2.5kg = 3
//<2.5kg = 4
//>2.5kg =5
//def. ferro = 6
//anêmico = 7



// Situação e peso
var kg 
var situacao


//input do peso
function changeTheVariable() {
kg = document.getElementById('inputField').value;
}
  

// input da situação (ao clicar)
function sit1() {
situacao = document.getElementById('1').value;
}		

  
function sit2() {
situacao = document.getElementById('2').value;
}	
  
function sit3() {
situacao = document.getElementById('3').value;
}			

function sit4() {
situacao = document.getElementById('4').value;
}
  
function sit5() {
situacao = document.getElementById('5').value;
}		
  
function sit6() {
situacao = document.getElementById('6').value;
}	

  function sit7() {
situacao = document.getElementById('7').value;
}
  


//pré-termo até 1kg

   function calcular() {

if (situacao == 1 && (kg >= 0.5 && kg <= 1.189)) {
window.alert("1 gota 1x ao dia");
} else if (situacao == 1 && (kg < 1)) {
    window.alert("Para pré-termo até 1kg, insira um peso maior ou igual a 0,5kg");    
} else if (situacao == 1 && (kg >= 1.2 && kg <= 1.799)){
window.alert("2 gotas 1x ao dia");   
} else if (situacao == 1 && (kg >= 1.8 && kg <= 2.399)){
window.alert("3 gotas 1x ao dia"); 
} else if (situacao == 1 && (kg >= 2.4 && kg <= 2.999)){
window.alert("4 gotas 1x ao dia"); 
} else if (situacao == 1 && (kg >= 3 && kg <= 3.699)){
window.alert("5 gotas 1x ao dia"); 
} else if (situacao == 1 && (kg >= 3.7 && kg <= 4.299)){
window.alert("6 gotas 1x ao dia"); 
} else if (situacao == 1 && (kg >= 4.3 && kg <= 4.899)){
window.alert("7 gotas 1x ao dia"); 
} else if (situacao == 1 && (kg >= 4.9 && kg <= 5.499)){
window.alert("8 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 5.5 && kg <= 6.199)){
window.alert("9 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 6.2 && kg <= 6.799)){
window.alert("10 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 6.8 && kg <= 7.399)){
window.alert("11 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 7.4 && kg <= 7.999)){
window.alert("12 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 8 && kg <= 8.699)){
window.alert("13 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 8.7 && kg <= 9.299)){
window.alert("14 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 9.3 && kg <= 9.899)){
window.alert("15 gotas 1x ao dia");     
} else if (situacao == 1 && (kg >= 9.9 && kg <= 10)){
window.alert("16 gotas 1x ao dia");
} else if (situacao == 1 && (kg >10)){
    window.alert("Para pré-termo até 1kg, peso máximo de 10kg");


//pré-termo entre 1kg-1,5kg
} else if (situacao == 2 && (kg < 1)) {
    window.alert("Para pré-termo entre 1kg-1,5kg, insira um peso maior ou igual a 1kg"); 
} else if (situacao == 2 && (kg >= 1 && kg <= 1.499)) {
window.alert("1 gota 1x ao dia");   
} else if (situacao == 2 && (kg >= 1.5 && kg <= 2.399)){
window.alert("2 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 2.4 && kg <= 3.199)){
window.alert("3 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 3.2 && kg <= 4)){
window.alert("4 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 4.1 && kg <= 4.899)){
window.alert("5 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 4.9 && kg <= 5.699)){
window.alert("6 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 5.7 && kg <= 6.499)){
window.alert("7 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 6.5 && kg <= 7.399)){
window.alert("8 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 7.4 && kg <= 8.199)){
window.alert("9 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 8.2 && kg <= 8.999)){
window.alert("10 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 9 && kg <= 9.899)){
window.alert("11 gotas 1x ao dia");   
} else if (situacao == 2 && (kg >= 9.9 && kg <= 10)){
window.alert("12 gotas 1x ao dia"); 
} else if (situacao == 2 && (kg >10)){
    window.alert("Para pré-termo entre 1kg-1,5kg, peso máximo de 10kg");

//pré-termo entre 1kg-2,5kg

} else if (situacao == 3 && (kg < 1.5)) {
    window.alert("Para pré-termo entre 1kg-2,5kg, insira um peso maior ou igual a 1,5kg"); 
} else if (situacao == 3 && (kg >= 1.5 && kg <= 2.299)){
window.alert("1 gota 1x ao dia");   
} else if (situacao == 3 && (kg >= 2.3 && kg <= 3.499)){
window.alert("2 gotas 1x ao dia");   
} else if (situacao == 3 && (kg >= 3.5 && kg <= 4.799)){
window.alert("3 gotas 1x ao dia");   
} else if (situacao == 3 && (kg >= 4.8 && kg <= 5.999)){
window.alert("4 gotas 1x ao dia");   
} else if (situacao == 3 && (kg >= 6 && kg <= 7.299)){
window.alert("5 gotas 1x ao dia");   
} else if (situacao == 3 && (kg >= 7.3 && kg <= 8.499)){
window.alert("6 gotas 1x ao dia");   
} else if (situacao == 3 && (kg >= 8.5 && kg <= 9.799)){
window.alert("7 gotas 1x ao dia");   
}  else if (situacao == 3 && (kg >= 9.8 && kg <= 10)){
window.alert("8 gotas 1x ao dia");
}  else if (situacao == 3 && (kg > 10)){
    window.alert("Para pré-termo entre 1kg-1,5kg, peso máximo de 10kg");


//a termo com menos de 2,5kg  

} else if (situacao == 4 && (kg < 2)) {
    window.alert("Para a termo com menos de 2,5kg, insira um peso maior ou igual a 2kg"); 
}  else if (situacao == 4 && (kg >= 2 && kg <= 4.499)) {
window.alert("1 gota 1x ao dia");   
} else if (situacao == 4 && (kg >= 4.5 && kg <= 6.999)){
window.alert("2 gotas 1x ao dia");   
} else if (situacao == 4 && (kg >= 7 && kg <= 9.499)){
window.alert("3 gotas 1x ao dia");   
} else if (situacao == 4 && (kg >= 9.5 && kg <= 10)){
window.alert("4 gotas 1x ao dia");
} else if (situacao == 4 && (kg > 10)){
    window.alert("Para a termo com menos de 2,5kg, peso máximo de 10kg");

//a termo com mais de 2,5kg  

} else if (situacao == 5 && (kg < 2.6)) {
    window.alert("Para a termo com mais de 2,5kg, insira um peso maior ou igual a 2,6kg"); 
}  else if (situacao == 5 && (kg >= 2.6 && kg <= 4.499)) {
    window.alert("1 gota 1x ao dia");   
    } else if (situacao == 5 && (kg >= 4.5 && kg <= 6.999)){
    window.alert("2 gotas 1x ao dia");   
    } else if (situacao == 5 && (kg >= 7 && kg <= 9.499)){
    window.alert("3 gotas 1x ao dia");   
    } else if (situacao == 5 && (kg >= 9.5 && kg <= 11.999)){
    window.alert("4 gotas 1x ao dia");
    } else if (situacao == 5 && (kg == 12)){
        window.alert("5 gotas 1x ao dia");
    } else if (situacao == 5 && (kg > 12)){
        window.alert("Para a termo com mais de 2,5kg, peso máximo de 12kg");

//deficiência de ferro

} else if (situacao == 6 && (kg < 5.1)) {
    window.alert("Para criança com def. de ferro, insira um peso maior ou igual a 5,1kg"); 
} else if (situacao == 6 && (kg >= 5.1 && kg <= 5.799)) {
window.alert("5 gotas 1x ao dia");   
} else if (situacao == 6 && (kg >= 5.8 && kg <= 6.799)){
window.alert("6 gotas 1x ao dia");   
} else if (situacao == 6 && (kg >= 6.8 && kg <= 7.799)){
window.alert("7 gotas 1x ao dia");   
} else if (situacao == 6 && (kg >= 7.8 && kg <= 8.799)){
window.alert("8 gotas 1x ao dia");   
} else if (situacao == 6 && (kg >= 8.8 && kg <= 9.799)){
window.alert("9 gotas 1x ao dia");   
} else if (situacao == 6 && (kg >= 9.8 && kg <= 10)){
window.alert("10 gotas 1x ao dia");   
} else if (situacao == 6 && (kg >= 10.1 && kg <= 35)){
window.alert("10 gotas 1x ou 2x ao dia");   
} else if (situacao == 6 && (kg > 35)){
    window.alert("20 gotas 1x ou 2x ao dia");  


//anêmico
} else if (situacao == 7 && (kg < 2.5)) {
    window.alert("Para criança com anemia, insira um peso maior ou igual a 2,5kg");   
} else if (situacao == 7 && (kg >= 2.5 && kg <= 3.799)) {
window.alert("1 gota 1x ao dia");   
} else if (situacao == 7 && (kg >= 3.8 && kg <= 5)){
window.alert("2 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 5.1 && kg <= 5.399)){
window.alert("10 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 5.4 && kg <= 5.899)){
window.alert("11 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 5.9 && kg <= 6.399)){
window.alert("12 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 6.4 && kg <= 6.899)){
window.alert("13 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 6.9 && kg <= 7.399)){
window.alert("14 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 7.4 && kg <= 7.899)){
window.alert("15 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 7.9 && kg <= 8.399)){
window.alert("16 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 8.4 && kg <= 8.899)){
window.alert("17 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 8.9 && kg <= 9.399)){
window.alert("18 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 9.4 && kg <= 9.899)){
window.alert("19 gotas 1x ao dia"); 
} else if (situacao == 7 && kg == 9.9){
window.alert("20 gotas 1x ao dia");   
} else if (situacao == 7 && (kg >= 10 && kg <= 35)){
window.alert("20 gotas 1x ou 2x ao dia");   
} else if (situacao == 7 && kg > 35){
window.alert("40 gotas 1x ou 2x ao dia");   
}
}







