// //1
// const balance = document.getElementById(
//     "balance"
//   );
//   const money_plus = document.getElementById(
//     "money-plus"
//   );
//   const money_minus = document.getElementById(
//     "money-minus"
//   );
//   const list = document.getElementById("list");
//   const form = document.getElementById("form");
//   const text = document.getElementById("text");
//   const amount = document.getElementById("amount");
//   // const dummyTransactions = [
//   //   { id: 1, text: "Flower", amount: -20 },
//   //   { id: 2, text: "Salary", amount: 300 },
//   //   { id: 3, text: "Book", amount: -10 },
//   //   { id: 4, text: "Camera", amount: 150 },
//   // ];
  
//   // let transactions = dummyTransactions;
  
//   //last 
//   const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
  
//   let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];
  
//   //5
//   //Add Transaction
//   function addTransaction(e){
//     e.preventDefault();
//     if(text.value.trim() === '' || amount.value.trim() === ''){
//       alert('please add text and amount')
//     }else{
//       const transaction = {
//         id:generateID(),
//         text:text.value,
//         amount:+amount.value
//       }
  
//       transactions.push(transaction);
  
//       addTransactionDOM(transaction);
//       updateValues();
//       updateLocalStorage();
//       text.value='';
//       amount.value='';
//     }
//   }
  
  
//   //5.5
//   //Generate Random ID
//   function generateID(){
//     return Math.floor(Math.random()*1000000000);
//   }
  
//   //2
  
//   //Add Trasactions to DOM list
//   function addTransactionDOM(transaction) {
//     //GET sign
//     const sign = transaction.amount < 0 ? "-" : "+";
//     const item = document.createElement("li");
  
//     //Add Class Based on Value
//     item.classList.add(
//       transaction.amount < 0 ? "minus" : "plus"
//     );
  
//     item.innerHTML = `
//       ${transaction.text} <span>${sign}${Math.abs(
//       transaction.amount
//     )}</span>
//       <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
//       `;
//     list.appendChild(item);
//   }
  
//   //4
  
//   //Update the balance income and expence
//   function updateValues() {
//     const amounts = transactions.map(
//       (transaction) => transaction.amount
//     );
//     const total = amounts
//       .reduce((acc, item) => (acc += item), 0)
//       .toFixed(2);
//     const income = amounts
//       .filter((item) => item > 0)
//       .reduce((acc, item) => (acc += item), 0)
//       .toFixed(2);
//     const expense =
//       (amounts
//         .filter((item) => item < 0)
//         .reduce((acc, item) => (acc += item), 0) *
//       -1).toFixed(2);
  
//       balance.innerText=`$${total}`;
//       money_plus.innerText = `$${income}`;
//       money_minus.innerText = `$${expense}`;
//   }
  
  
//   //6 
  
//   //Remove Transaction by ID
//   function removeTransaction(id){
//     transactions = transactions.filter(transaction => transaction.id !== id);
//     updateLocalStorage();
//     Init();
//   }
//   //last
//   //update Local Storage Transaction
//   function updateLocalStorage(){
//     localStorage.setItem('transactions',JSON.stringify(transactions));
//   }
  
//   //3
  
//   //Init App
//   function Init() {
//     list.innerHTML = "";
//     transactions.forEach(addTransactionDOM);
//     updateValues();
//   }
  
//   Init();
  
//   form.addEventListener('submit',addTransaction);





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
 