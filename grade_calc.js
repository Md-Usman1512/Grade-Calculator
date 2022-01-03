

let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let subjectInput = document.querySelector('#subject');
let marksInput = document.querySelector('#marks');
let outofInput = document.querySelector('#outof')
let weightInput = document.querySelector('#weight');

// let scorePercent = document.querySelector(marksInput/100);

btnAdd.addEventListener('click', () => {
  document.getElementById("table").style.display = "table";
  document.getElementById("result").style.display = "block";
     let subject = subjectInput.value;
    let marks = marksInput.value;
    let outof = outofInput.value;
    let weight = weightInput.value;
    let score = (((marks/outof)*100)/100)*weight;
    score = Math.round(score *100)/100;

    if (weight == "" || weight == null){
      weight = 100
    }
    if (marks == "" || weight == null){
      marks = 0
    }
    if (isNaN(score)){
      score = 0
    }

    let template = `

<style>
<link rel="stylesheet" href="try3.css" />
</style>

 

<div class = "content-table">

<div class = "content-table td">



<tbody class = "content-table tbody tr">
                 <tr>
                <td><button class="deleteBtn">x</button></td>
                    <td>${subject}</td>
                    <td>${marks}</td>
                    <td>${outof}</td>
                    <td>${weight}</td>
                    <td>${score}</td>
                    
                </tr> </tbody>
                
                </div></div>`;
    table.innerHTML += template;
 
    
 
 
});
      

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

 table.addEventListener("click", onDeleteRow);


function trial(){
var table = document.getElementById('table') , sumVal = 0, weightSum=0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseFloat(table.rows[i].cells[5].innerHTML);
                
            }
            document.getElementById("sum").innerHTML = Math.round(sumVal*100)/100;

            for(var i = 1; i < table.rows.length; i++)
            {
              weightSum = weightSum + parseFloat(table.rows[i].cells[4].innerHTML);
            }
            document.getElementById("lost").innerHTML = "-" + Math.round((weightSum- sumVal)*100)/100;

          

          if (sumVal >= 80){
            document.getElementById("grade").innerHTML = "High - Distinction";
          }

          else if (sumVal < 80 && sumVal >= 70){
            document.getElementById("grade").innerHTML = "Distinction";
          }

          else if (sumVal >= 50 && sumVal <=69 ){
            document.getElementById("grade").innerHTML = "Credit";
          }

          else if (sumVal <= 49) { 
            document.getElementById("grade").innerHTML = "fail";

          }
        
        }
 
